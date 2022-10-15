const express=require('express');
const app=express();
const path=require('path');
const registerRoutes=require('./routes/login.js');
// const homeRoutes=require('./routes/homes.js');
const sequeli=require("./util/database.js");
const US=require('./models/userDetails.js')

const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const { json } = require('body-parser');


app.use(registerRoutes);
// app.use(homeRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

sequeli.sync()

app.listen(4900);