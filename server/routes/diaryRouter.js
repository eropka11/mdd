import Router from 'express';
import diaryController from '../controllers/diaryController.js';

const router = new Router;

router.get('/:id', diaryController.getDiary);
router.post('/', diaryController.createEntry);

export default router;
