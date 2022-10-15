const { where } = require('sequelize');
const LOGIN=require('../models/loginModel.js');
const SIGNUP=require('../models/signUpModel.js');
const bcrypt=require('bcrypt');
const EXPENSE=require('../models/expense.js')
const jswt=require('jsonwebtoken');
var nodemailer = require('nodemailer');
const FORGOT=require('../models/forgotPassword.js')

const uuid = require("uuid");

exports.postUserLogin=async (req,res,next)=>{
   try{
   const requestBody=req.body;

   let responseLogin=await  SIGNUP.findOne({where:{emailid:requestBody.UEmail}})
   console.log(responseLogin);
   if (responseLogin){
         const compared=bcrypt.compare(responseLogin.password,requestBody.UPassword);
         if (compared){
            const token=jswt.sign(responseLogin.id,'d4b0f29b1877137109172a1ed62067fa9351a507f7e8e6ffbdde9252df37870137891da68fc8a215f95a91cda7bcd0d342b190487d51457073bb514ede01861b');
            res.status(200).json({message:'Successfully Loggedin',token:token})
         }
      }

   else{
      res.status(400).json({success:false,message:'user not exist'})
   }



   // LOGIN.create({
   // emailid:requestBody.UEmail,
   //  password:requestBody.UPassword
   // }).then(login=>{res.status(200).json({LOGIN:login});console.log(login)}).catch(err=>console.log(err));

}
catch(err){
   console.log(err);
}
}

exports.userHomePage=async (req,res,next)=>{
   try{
      const requestBody=req.body;

   let response= await EXPENSE.create({
    income:requestBody.income,
    amount:requestBody.amount,
    description:requestBody.description,
    type :requestBody.type,
    signupId:req.user.id

    })
    res.status(200).json({EXPENSE:response});

}
catch(err){
   console.log(err);
}
}

exports.delExpense=async (req,res,next)=>{
   try{
      const requestBody=req.params.delID;


      let response =await EXPENSE.destroy({where:{id:requestBody}});

      res.status(200).json({succes:true,Message:"deleted Successfully"});

   }
   catch(err){
      console.log(err);
   }


   }

   exports.deleteALLExpense=async (req,res,next)=>{
      try{
        let response=await EXPENSE.destroy({where:{signupId:req.user.id}});
         res.status(200);
      }
      catch(err){
         console.log(err);
      }
   }
exports.ALLExpense=async (req,res,next)=>{
   try{
   let response = await EXPENSE.findAll({where:{signupId:req.user.id}});
    res.status(200).json({EXPENSE:response});
   }
   catch(err){
      console.log(err);
   }


}

exports.Expenses=async (req,res)=>{

   let response=await EXPENSE.findAll({where:{signupId:req.user.id}});

   res.status(200).json({res:response});

}

exports.forgotPassword=async (req,res,next)=>{
   try{
   const requestBody=req.body.email;
   console.log(requestBody);
   
   //console.log(req.user.id);
   let response=await SIGNUP.findAll({where:{emailid:requestBody}});


   if(response!=''){
   const id=uuid.v4();
   console.log('uuid'+id);
   let newResponse=await FORGOT.create({


      id:id,
      active:true,
      userid:requestBody,

   })

   //e21489e7-dfc9-429f-800e-fcf9468955e2
   var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
      user: 'pubgmobilechina12@gmail.com',
      pass: 'anrrxmcsjzasgotz'
      }
   });

   var mailOptions = {
      from: 'pubgmobilechina12@gmail.com',
      to: requestBody,
      subject: 'Sending Email using Node.js',
      html:`<a href="http://127.0.0.1:5500/Front-End/forgotPassword/resetPassword.html?${id}">Reset Password</a>`
   };

   transporter.sendMail(mailOptions, function(error, info){
      if (error) {
      console.log(error);
      } else {
      res.status(304);
      }
   });

}
else{
   res.status(404).json({title:'user not found'});
}
    }
    catch(err){
       console.log(err);
   }
   
}



exports.resetPassword=async (req,res,next)=>{
   const requestBody=req.body;
   console.log(requestBody.userresetId);

   
   
   let response=await FORGOT.findByPk(requestBody.userresetId);

   if(response){
      bcrypt.hash(requestBody.npassword,10, async (err,hash)=>{
         userPasswordUpdate=response.userid;

         let  userPasswordResponse=await SIGNUP.update({password:hash},{where:{emailid:userPasswordUpdate}});
      
         console.log(userPasswordResponse);
      })

   

   }

 
}

