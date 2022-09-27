import express from 'express';

import { getPosts } from '../controllers/controller-post.js';

const router = express.Router();

router.get('/', getPosts);

export default router;