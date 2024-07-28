import express from 'express';
import cors from 'cors';
import menuRouter from './routes/menuRouter.js';
import userRouter from './routes/userRouter.js';

const app = express();

app.use(express.json());

// Define allowed origins
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'https://miaspizza-nzz4exr02-prettygenius-projects.vercel.app'
];
// CORS configuration
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

app.use('/api/menu', menuRouter);
app.use('/api/user', userRouter);

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
  console.log("Backend is working!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;