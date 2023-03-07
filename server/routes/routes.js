import express from 'express';

import * as controls from '../controllers/controller.js';
import * as ogControls from '../controllers/controller-origin-grinder.js'
import * as pouroverControls from '../controllers/controller-pourover.js'
import * as aeroControls from '../controllers/controller-aeropress.js'

const router = express.Router();

router.get('/', controls.getPosts);

router.get('/home', controls.testAddUser);

router.get('/testing', controls.testFetch);

router.post('/findUser', controls.verifyJWT, controls.findTheUser);
router.post('/updateUser', controls.verifyJWT, controls.updateUsersFacts);

router.get('/allrecipes', controls.allRecipes);
router.post('/getUserRecipes', controls.verifyJWT, controls.userRecipes);

router.post('/login', controls.login);
router.post('/register', controls.register);
router.get('/getId', controls.verifyJWT, controls.getTheId);

router.post('/addRecipe', controls.verifyJWT, controls.addRecipe);
router.post('/deleteRecipe', controls.verifyJWT, controls.deleteRecipe);
router.post('/updateRecipeImmersion', controls.updateRecipeImmersion);
router.post('/findImmersion', controls.findRecipeImmersion);

router.post('/addPourover', controls.verifyJWT, pouroverControls.addPouroverRecipe);
router.post('/findPourover', pouroverControls.findPouroverRecipe);
router.post('/updatePourover', pouroverControls.updatePourover);

router.post('/addAeropress', controls.verifyJWT, aeroControls.addAeropress);
router.post('/findAeropress', aeroControls.findAeropressRecipe);
router.post('/updateAeropress', aeroControls.updateAeropress);

router.post('/getComments', controls.getComments);
router.post('/leaveComment', controls.verifyJWT, controls.leaveComment);
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