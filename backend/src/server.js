import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import menuRouter from './routes/menuRouter.js';
import userRouter from './routes/userRouter.js';
import { connectDB } from './config/databaseConfig.js';

// Connect to the database
connectDB();

const app = express();

app.use(express.json());

app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));

app.use('/api/menu', menuRouter);
app.use('/api/user', userRouter);

// Add a simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

export default app;