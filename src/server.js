import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

import cookieParser from 'cookie-parser';

const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  // middlewares for app
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
  });

  // routers for geting all contacts and contact by id
  app.use(router);

  // handlers for errors
  app.use(notFoundHandler);

  app.use(errorHandler);

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });
};

// setupServer.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleDateString()}`);
//   next();
// });
