import Router from 'express';
import settingsController from '../controllers/settingsController.js';

const router = new Router;

router.get('/', settingsController.getSettings);
router.post('/', settingsController.editSettings);

export default router;
