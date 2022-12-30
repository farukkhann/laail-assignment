

const mongoose=require("mongoose")


const contractSchema=new mongoose.Schema({
    principle:{type:String,required:true},
    lender_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"},
    borrower_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"},
    loanStart_date:{type:String,required:true},
    loanDue_data:{type:String,required:true},
    isRepaid:{type:Boolean,require:true}
},{
    timestamps:true,
    versionKey:false
})


const Contract=mongoose.model("contract",contractSchema)

module.exports=Contract