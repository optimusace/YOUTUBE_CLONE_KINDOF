const mongoose = require("mongoose")
const validator = require("validator")

const videoSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,   //mongoose.Schema.Types.ObjectId
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    videoUrl:{
        type:String,
        required:true 
    },
    thumbnailUrl:{
        type:String,
        required:true
    },
    viewsCount:{
        type:Number
    },
    likesCount:{
        type:Number
    },
    dislikesCount:{
        type:Number
    }
},{timestamps:true})

videoSchema.pre("save",function(next){
    this.userId = validator.escape(this.userId)
    this.title = validator.escape(this.title)
    if(this.description){
        this.description = validator.escape(this.description)
    }
})

const Video = mongoose.model("Video",videoSchema)

module.exports = Video