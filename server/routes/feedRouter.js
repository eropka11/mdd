import Router from 'express';
import feedController from '../controllers/feedController.js';

const router = new Router;

router.get('/', feedController.getFeed);

export default router;
