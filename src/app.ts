import express, { Express } from 'express';

//Import Routes
import home from './routes/home';
class App {
  app: Express;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  routes(): void {
    this.app.use('/', home);
  }
}
export default new App().app;
