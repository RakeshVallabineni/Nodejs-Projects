const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');

const SIGNUP=sequelize.define('signup',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
    },
    firstname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    emailid:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }

})

module.exports=SIGNUP;