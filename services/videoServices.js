const Video = require("../models/videos")
const mongoose = require("mongoose")

class VideoService{
    //get all vidoes 
    static getAllVideos = async ()=>{
        try{
            const videos = await Video.find()
            if(videos.length > 0){
                return videos
            }else{
                return null
            }
        }catch(err){
            throw err
        }
    }

    //get specific videos by id
    static getVideoById = async(id)=>{
        try{
            if(!mongoose.Types.ObjectId.isValid(id)){
                return null
            }
            const video = await Video.findById(id)
            if(!video){
                return null
            }
            return video
        }catch(err){
            throw err
        }
    }

    //add video 
    static addVideo = async(data)=>{
        try{
            const newVideo = await Video.create({})
            return newVideo
        }catch(err){
            throw err
        }
    }

    //update video 
    static updateVideo = async(id,data)=>{
        try{
            if(!mongoose.Types.ObjectId.isValid(id)){
                return null
            }
            const update = await Video.findByIdAndUpdate(id,{})
            if(!update){
                return null
            }
            const updatedVideo = await Video.findById(id)
            return updatedVideo
        }catch(err){
            throw err
        }
    }

    //delete video 
    static deleteVideo = async(id)=>{
        try{
            const deletedVideo = await Video.findByIdAndDelete(id)
            if(!deletedVideo){
                return null
            }
            return deletedVideo
        }catch(err){
            throw err
        }
    }
}

module.exports = VideoService