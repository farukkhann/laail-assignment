
const mongoose=require("mongoose")

mongoose.set("strictQuery",false)

const connect=()=>{
    return mongoose.connect("mongodb+srv://faruk:mSzaqjGpVDgrEHuy@cluster0.m3picex.mongodb.net/laail?retryWrites=true&w=majority")
}

module.exports=connect