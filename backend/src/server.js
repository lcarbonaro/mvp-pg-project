import express from 'express';
import cors from 'cors';
import menuRouter from './routes/menuRouter.js';
import userRouter from './routes/userRouter.js';

import { connectDB } from './config/databaseConfig.js';


const app = express();

connectDB();

app.use(express.json());

// Define allowed origins
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'https://miaspizza-nzz4exr02-prettygenius-projects.vercel.app'
];

// commented this out to allow all origins for testing purposes (LCC)
// CORS configuration
/*
app.use(cors({
  credentials: true,
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
*/

// added this instead of above (LCC)
app.use(cors());

app.use('/api/menu', menuRouter);
app.use('/api/user', userRouter);

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// un-commented this (LCC)
const port = 3000;
  app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
/**/

//export default app;   // commented this out (LCC)