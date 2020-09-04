import { ApiRouter } from './api/api';
import { BackOfficeRouter } from './back-office/back-office';
import { client } from './client-controller';
import { _routes } from '../utils/interfaces';

export const routes: _routes = (app) => {
  app.use('/api', ApiRouter);
  app.use('/backOffice', BackOfficeRouter);
  app.get('*', client);
};
