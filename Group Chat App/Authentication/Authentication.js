const jswt=require('jsonwebtoken');
const USER=require('../models/user.js');

const TOKEN=process.env.TOKEN_SECRET;

exports.Authenticate=async (req,res,next)=>{
    const token=req.header('Authorization');

    const user=Number(jswt.verify(token,TOKEN));
    const userResponse=await USER.findByPk(user);
    console.log(userResponse);
    req.userResponse=user;
    next();

}




