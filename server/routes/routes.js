import express from 'express';

import { getPosts, testAddUser } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getPosts);

router.get('/home', testAddUser);

export default router;