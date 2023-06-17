const express=require("express")
const router=express.Router()
const controller=require("../controllers/stockcontroller")
router.get("/",controller.getstock)
router.post("/",controller.addstock)
router.put("/:id",controller.buystock)

module.exports=router;