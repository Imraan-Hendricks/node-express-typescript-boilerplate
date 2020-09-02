import { Request, Response, NextFunction } from 'express';
import { Server } from 'http';

export interface _cleanup {
  (server: Server): void;
}

export interface _handleRequest {
  (req: Request, res: Response, next: NextFunction): void;
}

export interface _onInterrupt {
  (server: Server): void;
}

export interface _onTerminate {
  (server: Server): void;
}
