const express=require('express');
const router=express.Router();
const path=require('path');

const controller=require("../controllers/controllers.js");
router.get('/success',controller.getSuccess);

router.post('/register',controller.postSuccess);

router.delete('/success/delete/:ID',controller.deleteRegistration);

router.put('/success/update/:ID')
module.exports=router;