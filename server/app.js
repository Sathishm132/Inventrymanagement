const express=require('express');
const router = require('./routes/stock');
const sequelize = require('./Util/databse');
const cors=require("cors")
const bodyparser=require('body-parser')
const app=express();
app.use(cors())
app.use(bodyparser.json())
app.use('/stocks',router)
const stock=require("./Models/Stockmodel")

sequelize.sync().then((result)=>{
    
    app.listen(5000,()=>{
        console.log("sucsess")
    })
})
