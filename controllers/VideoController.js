const VideoService = require("../services/videoServices")

class VideoController{

    //get all videos
    static getAllVideos = async(req,res)=>{
        try{
            const videos = await VideoService.getAllVideos()
            if(!videos){
                return res.status(404).json({success:false,message:"Cannot find videos"})
            }
            res.status(200).json({success:true,message:"Videos Found",data:videos})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    //get information related to video using id
    static getVideoById = async(req,res)=>{{
        try{
            const id = req.params.id 
            const video = await VideoService.getVideoById(id)
            if(!video){
                return res.status(404).json({success:false,message:"Unable to find video"})
            }
            res.status(200).json({success:true,message:"Video Found",data:video})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }}

    //add or create new video
    static addVideo = async (req,res)=>{
        try{
            const data = req.body 
            const addedVideo = await VideoService.addVideo(data)
            res.status(200).json({success:true,message:"New Video created successfully",data:addedVideo})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    //update video
    static updateVideo = async (req,res)=>{
        try{
            const id = req.params.id 
            const data = req.body
            const updatedVideo = await VideoService.updateVideo(id,data)
            if(!updatedVideo){
                return res.status(404).json({success:false,message:"Cannot update video"})
            }
            res.status(200).json({success:true,message:"Video Updated successfully",data:updatedVideo})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    //delete video 
    static deleteVideo = async(req,res)=>{
        try{   
            const id = req.params.id 
            const deletedVideo = await VideoService.deleteVideo(id)
            if(!deletedVideo){
                return res.status(404).json({success:false,message:"Cannot delete video"})
            }
            res.status(200).json({success:true,message:"Video deleted successfully",data:deletedVideo})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

}

module.exports = VideoController