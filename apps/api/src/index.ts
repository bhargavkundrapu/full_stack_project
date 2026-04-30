import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import v1Routes from './routes/v1';
import { errorHandler, notFoundHandler } from './middleware/error.middleware';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

// API v1 router
app.use('/api/v1', v1Routes);

// Existing routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background-color: #0f172a; color: white;">
            <div style="text-align: center; padding: 2rem; background: #1e293b; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
                <h1 style="color: #38bdf8; margin-bottom: 1rem;">Flipkart Clone Backend API 🚀</h1>
                <p>The backend server is successfully running and actively listening for requests.</p>
                <small style="color: #64748b; display: block; margin-top: 1rem;">Go to /api/v1/health for health check.</small>
            </div>
        </div>
    `);
});

// Route not found handler
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log('\n======================================================');
    console.log(`🚀 BACKEND ONLINE: Server is running on port ${PORT}`);
    console.log(`🌐 Verify visually at: http://localhost:${PORT}`);
    console.log('======================================================\n');
});
