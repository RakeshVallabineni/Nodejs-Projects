const SIGNUP=require('../models/signUpModel.js');

const bcrypt=require('bcrypt');
const saltRounds=10;

exports.postUserSignUp=async (req,res,next)=>{
    try{
    const requestBody=req.body;
    console.log(requestBody);
   
   bcrypt.hash(requestBody.UPassword,saltRounds,async(err,hash)=>{
   try{
   let signupResponse=await SIGNUP.create({
    
    firstname:requestBody.UFirstName,
    lastname:requestBody.ULastName,
    emailid:requestBody.UEmail,
    password:hash
    })
    // .then(signup=>{res.status(200).json({SIGNUP:signup});console.log(signup)}).catch(err=>console.log(err));
    res.status(200).json({SIGNUP:signupResponse})
    console.log(signupResponse);
    //    const requestBody=req.body;
    //    console.log(requestBody);
}
catch(err){
    console.log(err);
}
})
}
catch(err){
    console.log(err);
}
   
}

