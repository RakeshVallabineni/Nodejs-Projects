const Sequelize=require("sequelize");
const sequelize=require('../util/database.js');

const USER=sequelize.define("userdetails",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    date:{
        type:Sequelize.STRING,
        allowNull:false
    },
    time:{
        type:Sequelize.STRING,
        allowNull:false
    }
    


});

module.exports=USER;