import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import menuRouter from './routes/menuRouter.js';
import userRouter from './routes/userRouter.js';
const PORT = 5000;
import { connectDB } from './config/databaseConfig.js';
connectDB();

const app = express();


app.use(express.json());

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));


app.use('/api/menu', menuRouter)
app.use('/api/user', userRouter)

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})
