import { Router } from 'express';
import homeController from '../controllers/home';

const router: Router = Router();
router.get('/', homeController.index);
// router.post('/', homeController.create);
export default router;
