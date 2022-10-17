const express=require('express');
const router=express.Router();
const path=require('path');

const controller=require("../controllers/controllers.js");
router.get('/registerDetails',controller.registerDetails);

router.post('/register',controller.postSuccess);

router.delete('/success/delete/:ID',controller.deleteRegistration);




module.exports=router;