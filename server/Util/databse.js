const {Sequelize}=require("sequelize")
const config=require("./cofig")
const sequelize=new Sequelize('node-complete','root','Sathish1032',
{host:'localhost',dialect:'mysql'})
module.exports=sequelize