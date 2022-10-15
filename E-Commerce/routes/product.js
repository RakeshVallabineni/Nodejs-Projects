const express=require('express');
const routes=express.Router();
const controller=require('../controllers/orderController.js');

routes.post('/orderDetails',controller.postOderDetials);
routes.delete('/orderDetails/:orderid',controller.deleteOrderDetails);
module.exports=routes;