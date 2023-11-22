import { Router } from 'express';
import { ViewsController } from '@controllers/views.controller';
import { Routes } from '@interfaces/routes.interface';

export class ViewRoute implements Routes {
  public path = '/';
  public router = Router();
  public views = new ViewsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.views.getIndex);
  }
}
