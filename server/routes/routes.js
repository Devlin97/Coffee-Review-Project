import express from 'express';

import { getPosts, testAddUser, testFetch, allRecipes } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getPosts);

router.get('/home', testAddUser);

router.get('/testing', testFetch);

router.get('/allrecipes', allRecipes);

export default router;