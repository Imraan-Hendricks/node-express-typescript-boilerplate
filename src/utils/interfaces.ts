import { Application } from 'express';
import { Request, Response } from 'express';

export interface _routes {
  (app: Application): void;
}

export interface _routeHandler {
  (req: Request, res: Response): any;
}
