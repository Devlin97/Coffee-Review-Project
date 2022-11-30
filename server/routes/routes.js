import express from 'express';

import { getPosts, testAddUser, testFetch, allRecipes, login } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getPosts);

router.get('/home', testAddUser);

router.get('/testing', testFetch);

router.get('/allrecipes', allRecipes);

router.post('/login', login);

export default router;