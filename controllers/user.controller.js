const express=require("express")

const router=express.Router()
//users
const Users=require("../models/user.mode")

router.get("/",async(req,res)=>{
    try {
        const users=await Users.find().lean().exec()
        res.status(400).send(users)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
})


router.post("/",async(req,res)=>{
    try {
        const response= await Users.create(req.body)
        res.status(401).send(response)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
})

module.exports=router