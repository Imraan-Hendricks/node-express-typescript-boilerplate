import { _middleware, _shutdown } from '../utils/interfaces';

var state = false;

const cleanup: _shutdown = (server) => {
  state = true;
  console.log('Closing http server');
  server.close(() => {
    console.log('Http server closed');
    // [close db connections here]
    console.log('Shutting down');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Could not close connections in time, forcing shut down');
    process.exit(1);
  }, 30 * 1000);
};

export const handleRequests = (): _middleware => (req, res, next) => {
  if (!state) return next();

  res.setHeader('Connection', 'close');
  res.status(503).send('Server is in the process of restarting');
};

export const onInterrupt: _shutdown = (server) =>
  process.on('SIGINT', () => cleanup(server));

export const onTerminate: _shutdown = (server) =>
  process.on('SIGTERM', () => cleanup(server));
