# Flipkart Clone Monorepo

Production-ready Flipkart clone monorepo containing a React frontend and an Express backend.

## Structure

- `apps/web`: Vite + React + Tailwind CSS frontend
- `apps/api`: Node.js + Express + Prisma backend


## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   - Copy `apps/api/.env.example` to `apps/api/.env` and update the database URL and JWT secrets.
   - Copy `apps/web/.env.example` to `apps/web/.env`.

3. **Database Setup**
   ```bash
   cd apps/api
   npx prisma db push
   npx prisma generate
   ```

4. **Run Development Servers**
   From the root directory:
   ```bash
   npm run dev
   ```

## Tech Stack
- Frontend: React, Vite, Tailwind CSS, TypeScript
- Backend: Node.js, Express, Prisma, PostgreSQL (Neon)

- Auth: JWT (Access & Refresh tokens)
