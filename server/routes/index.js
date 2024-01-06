import Router from 'express';
import diaryRouter from './diaryRouter.js';
import feedRouter from './feedRouter.js';
import meRouter from './meRouter.js';
import searchRouter from './searchRouter.js';
import settingsRouter from './settingsRouter.js';
import userRouter from './userRouter.js';

const router = new Router;

router.use('/me', meRouter)
router.use('/user', userRouter);
router.use('/diary', diaryRouter);
router.use('/feed', feedRouter);
router.use('/settings', settingsRouter);
router.use('/search', searchRouter);

export default router;
