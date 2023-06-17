const {Sequelize,DataTypes}=require("sequelize")
const sequelize = require("../Util/databse")
const Stock=sequelize.define("stocks",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    


})
module.exports=Stock