const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');

const EXPENSE=sequelize.define('expense',{

    id:{type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    income:{type:Sequelize.INTEGER,
        allowNull:false},
    amount:{type:Sequelize.INTEGER,
        allowNull:false},
        description:{type:Sequelize.STRING,
        allowNull:false},
    type:{type:Sequelize.STRING,
        allowNull:false}

})

module.exports=EXPENSE;