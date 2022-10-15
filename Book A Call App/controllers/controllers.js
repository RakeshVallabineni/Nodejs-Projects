const path=require("path");


const USER=require('../models/userDetails');

exports.postSuccess=(req,res,next)=>{
    try{
    const requestBody=req.body;
    USER.create({
        
        name:requestBody.UName,
        email:requestBody.UEmail,
        phone:requestBody.UPhone,
        date:requestBody.UDates
    }).then((user)=>{res.status(200).json({USER:user});}).catch(err=>{console.log(err)});
    
    
}
catch(err){
    console.log(err);
}
    
}

exports.getSuccess=(req,res,next)=>{
   USER.findAll().then((userdetails)=>{res.send(userdetails)}).catch(err=>{console.log(err)});
}

exports.deleteRegistration= (req,res,next)=>{
    const param= req.params.ID;
     USER.destroy({where:{id:param}}).then(()=>{res.status(200);}).catch(err=>{console.log(err)});
    
    
}
