import { Response, Request } from 'express';
class Home {
  index(req: Request, res: Response): void {
    res.status(200).json({ home: true });
  }
}

export default new Home();
