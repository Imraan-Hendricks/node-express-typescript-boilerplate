import express, { Application } from 'express';
import path from 'path';
import { NODE_ENV, PORT } from './config/env';
import { routes } from './routes/routes';

const app: Application = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/build')));
app.use('/public', express.static(path.join(__dirname, '../public')));

routes(app);

app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
