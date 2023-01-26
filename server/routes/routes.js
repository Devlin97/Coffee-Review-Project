import express from 'express';

import * as controls from '../controllers/controller.js';

const router = express.Router();

router.get('/', controls.getPosts);

router.get('/home', controls.testAddUser);

router.get('/testing', controls.testFetch);

router.get('/allrecipes', controls.allRecipes);
router.post('/getUserRecipes', controls.userRecipes);

router.post('/login', controls.login);
router.post('/register', controls.register);

router.post('/addRecipe', controls.addRecipe);

router.post('/getComments', controls.getComments);
router.post('/leaveComment', controls.leaveComment);
router.post('/deleteComment', controls.deleteComment);

export default router;