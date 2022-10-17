const ORDER=require('../models/orderModel.js');


exports.postOderDetials=(req,res,next)=>{
    const requestBody=req.body;
    ORDER.create({
        orderName:requestBody.itemName,
        price:requestBody.price,
        image:requestBody.image
    }).then(response=>{res.status(200).json({ORDER:response})}).catch(err=>console.log(err));
    
    
}

exports.deleteOrderDetails=(req,res,next)=>{
    const param= req.params.orderid;
    console.log(param);
    ORDER.destroy({where:{id:param}}).then(()=>{res.status(200);}).catch(err=>{console.log(err)});
}


exports.cartDetails=async (req,res,next)=>{
    try{
      let response=await ORDER.findAll();
      res.status(200).json({res:response});
    }
    catch(err){
      console.log(err);
    }

}
