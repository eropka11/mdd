import Router from 'express';
import searchController from '../controllers/searchController.js';

const router = new Router;

router.post('/', searchController.search);

export default router;
