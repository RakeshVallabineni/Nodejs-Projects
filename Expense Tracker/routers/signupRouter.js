const express=require('express');
const signinRouter=express.Router();

const signUpController=require('../controllers/signUpController');


signinRouter.post('/userSignUp',signUpController.postUserSignUp);

// signinRouter.get('/userSignUp',signUpController.getUserDetails);


module.exports=signinRouter;