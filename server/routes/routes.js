import express from 'express';

import * as controls from '../controllers/controller.js';
import * as ogControls from '../controllers/controller-origin-grinder.js'
import * as pouroverControls from '../controllers/controller-pourover.js'

const router = express.Router();

router.get('/', controls.getPosts);

router.get('/home', controls.testAddUser);

router.get('/testing', controls.testFetch);

router.get('/allrecipes', controls.allRecipes);
router.post('/getUserRecipes', controls.userRecipes);

router.post('/login', controls.login);
router.post('/register', controls.register);

router.post('/addRecipe', controls.addRecipe);
router.post('/deleteRecipe', controls.deleteRecipe);
router.post('/updateRecipe', controls.updateRecipe);

router.post('/addPourover', pouroverControls.addPouroverRecipe);

router.post('/getComments', controls.getComments);
router.post('/leaveComment', controls.leaveComment);
router.post('/deleteComment', controls.deleteComment);

//======================= Grinder and Origin Routes =======================
router.get('/getGrinders', ogControls.getGrinders);
router.get('/getCountries', ogControls.getCountries);

router.post('/addGrinder', ogControls.addGrinder);
router.post('/addCountry', ogControls.addCountry);

router.post('/deleteGrinder', ogControls.deleteGrinder);
router.post('/deleteCountry', ogControls.deleteCountry);
//=========================================================================

export default router;