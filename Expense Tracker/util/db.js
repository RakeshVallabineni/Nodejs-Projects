const Sequelize=require('sequelize');
const sequelize=new Sequelize('expensetracker','root','187@Mysql',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;