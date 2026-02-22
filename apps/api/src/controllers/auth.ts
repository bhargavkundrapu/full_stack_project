import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { registerSchema, loginSchema } from '@flipkart-clone/shared';

const prisma = new PrismaClient();

const generateTokens = (userId: string) => {
    const accessToken = jwt.sign({ id: userId }, process.env.JWT_ACCESS_SECRET!, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET!, { expiresIn: '7d' });
    return { accessToken, refreshToken };
};

export const register = async (req: Request, res: Response) => {
    try {
        const parsed = registerSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.format() });
        }

        const { name, email, password } = parsed.data;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword }
        });

        const { accessToken, refreshToken } = generateTokens(user.id);

        await prisma.refreshToken.create({
            data: {
                token: refreshToken,
                userId: user.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            }
        });

        res.status(201).json({ user: { id: user.id, name: user.name, email: user.email }, accessToken, refreshToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const parsed = loginSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.format() });
        }

        const { email, password } = parsed.data;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const { accessToken, refreshToken } = generateTokens(user.id);

        await prisma.refreshToken.create({
            data: {
                token: refreshToken,
                userId: user.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            }
        });

        res.status(200).json({ user: { id: user.id, name: user.name, email: user.email }, accessToken, refreshToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const refresh = async (req: Request, res: Response) => {
    const { token } = req.body;
    if (!token) return res.status(401).json({ error: 'Refresh token required' });

    try {
        const dbToken = await prisma.refreshToken.findUnique({ where: { token } });
        if (!dbToken || dbToken.expiresAt < new Date()) {
            if (dbToken) await prisma.refreshToken.delete({ where: { token } });
            return res.status(403).json({ error: 'Invalid or expired refresh token' });
        }

        jwt.verify(token, process.env.JWT_REFRESH_SECRET!, async (err: any, decoded: any) => {
            if (err) return res.status(403).json({ error: 'Invalid refresh token signature' });

            const newTokens = generateTokens(decoded.id);

            await prisma.refreshToken.delete({ where: { token } });
            await prisma.refreshToken.create({
                data: {
                    token: newTokens.refreshToken,
                    userId: decoded.id,
                    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }
            });

            res.status(200).json({ accessToken: newTokens.accessToken, refreshToken: newTokens.refreshToken });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const logout = async (req: Request, res: Response) => {
    const { token } = req.body;
    if (!token) return res.status(200).json({ message: 'Logged out' });

    try {
        await prisma.refreshToken.deleteMany({ where: { token } });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
