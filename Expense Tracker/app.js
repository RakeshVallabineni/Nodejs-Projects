const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());

const { json } = require('body-parser');
const bodyParsed=require('body-parser');
app.use(bodyParsed.json());


const loginRouter=require('./routers/loginRouter.js');
const signupRouter=require('./routers/signupRouter.js');







const sequelize = require('./util/db.js');

const User=require('./models/signUpModel.js');

const forgotPassword=require('./models/forgotPassword.js');
const EXPENSE = require('./models/expense.js');


User.hasMany(EXPENSE);
EXPENSE.belongsTo(User);




app.use(loginRouter);
app.use(signupRouter);

sequelize.sync().then(()=>{app.listen(9000);})


