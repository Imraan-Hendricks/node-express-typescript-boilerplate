import express, { Application } from 'express';
import { NODE_ENV, PORT } from './config/env';

const app: Application = express();

app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
