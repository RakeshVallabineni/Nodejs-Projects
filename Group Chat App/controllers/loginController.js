const USER=require('../models/user.js');

const bcrypt=require('bcrypt');

const jswt=require('jsonwebtoken');

const TOKEN=process.env.TOKEN_SECRET;


exports.userLogin=async (req,res,next)=>{
    try{
    const requestBody=req.body;

    let loginResponse=await USER.findAll({where:{ useremail:requestBody.UEmail} });
    
    //let loggedinResponse=await USER.findAll({where:{userid:requestBody.UEmail}});
    if(loginResponse.length!=0){
   
       const passwordResponse=await bcrypt.compare(requestBody.UPassword,loginResponse[0].userpassword)
        
        if(passwordResponse){
            
            
            
            const token = jswt.sign(loginResponse[0].id,TOKEN);
        
            res.status(200).json({success:true,res:token,message:'Logged-In Successfully'});  
            }

            else{
                res.status(200).json({success:false,message:'Re-Check All credentials'});
            }
                 
    }
    else {
          
        res.status(200).json({success:false,message:'User Does Not Exist. Please Register !!'})
     }

    }
    catch(err){
    console.log(err);
    }

}
