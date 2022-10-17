const Sequelize=require('sequelize');
const sequelize = require('../util/db.js');

const ORDER=sequelize.define('orderD',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    orderName:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    price:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    }

});

module.exports=ORDER;