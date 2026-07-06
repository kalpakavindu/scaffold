import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import { errorMiddleware } from './middlewares/index.js';
import { indexRoutes } from './routes/index.js';
import { connectMongo, HttpError, HttpStatus } from './utils/index.js';

// Load env variables
dotenv.config({ path: ['./.env'], quiet: true });

// Connect to database
connectMongo();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_URL, process.env.SERVER_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// API routes
app.use('/api/', indexRoutes);

// 404 Error
app.use((_, __, next) => next(new HttpError('Resource not found', HttpStatus.NotFound)));

app.use(errorMiddleware);

const PORT = process.env.SERVER_PORT || 5174;
const HOST = process.env.SERVER_HOST || 'localhost';

app.listen(PORT, HOST, (e) => {
  if (e) {
    console.error(`Server: ${e.message}`);
    process.exit(1);
  }
  console.info(`Server: Started http://${HOST}:${PORT}`);
});
