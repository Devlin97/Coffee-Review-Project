import express from 'express';

import { getPosts, testData } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getPosts);

router.get('/home', testData);

export default router;