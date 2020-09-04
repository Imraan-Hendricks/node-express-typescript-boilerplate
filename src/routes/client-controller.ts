import { NODE_ENV } from '../config/env';
import path from 'path';
import { _routeHandler } from '../utils/interfaces';

export const client: _routeHandler = (req, res) => {
  if (NODE_ENV !== 'production')
    return res.redirect('http://localhost:3000' + req.originalUrl);

  res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
};
