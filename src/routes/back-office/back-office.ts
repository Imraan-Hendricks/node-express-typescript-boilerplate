import express from 'express';
import { _routeHandler } from '../../utils/interfaces';

export const BackOfficeRouter = express.Router();

const controller: _routeHandler = (req, res) => {
  res.json({ route: '/backOffice' });
};

BackOfficeRouter.get('/', controller);
