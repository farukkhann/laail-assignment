

const express=require("express")
const app=express()
app.use(express.json())
const connect=require("./config/db")


const userController=require("./controllers/user.controller")
const contractController=require("./controllers/contract.controller")

app.use("/users",userController)
app.use("/contracts",contractController)


app.listen(8080,async(req,res)=>{
    try {
        await connect()
        console.log("8080 is running")
    } catch (errorr) {
        res.send(errorr)
    }
})