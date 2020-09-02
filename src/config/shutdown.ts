import {
  _cleanup,
  _handleRequest,
  _onInterrupt,
  _onTerminate,
} from './shutdown-interface';

var state = false;

const cleanup: _cleanup = (server) => {
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

export const handleRequests = (): _handleRequest => (req, res, next) => {
  if (!state) return next();

  res.setHeader('Connection', 'close');
  res.status(503).send('Server is in the process of restarting');
};

export const onInterrupt: _onInterrupt = (server) =>
  process.on('SIGINT', () => cleanup(server));

export const onTerminate: _onTerminate = (server) =>
  process.on('SIGTERM', () => cleanup(server));
