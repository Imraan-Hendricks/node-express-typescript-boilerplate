import { Application, Request, Response, NextFunction } from 'express';
import { Server } from 'http';

export interface _routes {
  (app: Application): void;
}

export interface _routeHandler {
  (req: Request, res: Response): void;
}

export interface _middleware {
  (req: Request, res: Response, next: NextFunction): void;
}

export interface _shutdown {
  (server: Server): void;
}
