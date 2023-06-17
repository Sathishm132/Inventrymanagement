const Stock = require("../Models/Stockmodel")

exports.getstock=(req,res,)=>{
    Stock.findAll().then((result)=>{
        res.json(result)
    })
}
exports.addstock=(req,res)=>{
    
    Stock.create({
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity,
        description:req.body.description
    }).then(()=>{
        res.status(200).json(req.stock)
    })
}
exports.buystock=(req,res)=>{
    console.log(req.body)
    Stock.update({
        quantity:req.body.quantity
    },{
        where:{
            id:req.params.id
        }
    })
}
