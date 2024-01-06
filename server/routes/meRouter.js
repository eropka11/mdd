import Router from 'express';
import meController from '../controllers/meController.js';

const router = new Router;

router.get('/auth', meController.check);
router.post('/registration', meController.registration);
router.post('/login', meController.login);
router.post('/createDiary', meController.createDiary);

export default router;
