import express from 'express';
import { _routeHandler } from '../../utils/interfaces';

export const ApiRouter = express.Router();

const controller: _routeHandler = (req, res) => {
  res.json({ route: '/api' });
};

ApiRouter.get('/', controller);
