import Router from 'express';
import userController from '../controllers/userController.js';

const router = new Router;

router.get('/:id', userController.getUser);

export default router;
