import express from 'express';

import { getPosts, testAddUser, testFetch } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getPosts);

router.get('/home', testAddUser);

router.get('/testing', testFetch);

export default router;