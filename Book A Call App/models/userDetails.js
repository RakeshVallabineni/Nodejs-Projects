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
        type:Sequelize.INTEGER
        
    },
    date:{type:Sequelize.DATE}
    


});

module.exports=USER;