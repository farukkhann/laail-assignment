
const express=require("express")

const router=express.Router()
const Contract= require("../models/contract.mode")
//contracts
router.get("/",async(req,res)=>{
    try {
        const contacts=await Contract.find().populate([]).lean().exec()
        res.send(contacts)
    } catch (error) {
        req.status(500).send({message:error.message})
    }
})

router.post("/",async(req,res)=>{
    try {
        const contract=await Contract.create(req.body)
        res.status(401).send(contract)
    } catch (error) {
        req.status(500).send({message:error.message})
    }
})

module.exports=router