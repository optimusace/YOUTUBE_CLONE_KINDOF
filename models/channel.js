const mongoose = require("mongoose")
const validator = require("validator")

const channelSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    channelName:{
        type:String,
        required:[true,"Channel name must be provided"],
        unique:[true,"Channel name already exists"]
    },
    description:{
        type:String,
        trim:true
    }
},{timestamps:true})


channelSchema.pre("save",function(next){
    this.channelName = validator.escape(this.channelName)
    if(this.description){
        this.description = validator.escape(this.description)
    }
})

const Channel = mongoose.model("Channel",channelSchema)

module.exports = Channel