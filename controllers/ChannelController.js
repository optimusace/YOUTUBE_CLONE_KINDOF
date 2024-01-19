const ChannelService = require("../services/channelServices")

class ChannelController{

    //GET A CHANNEL
    static getChannel = async ()=>{
        try{
            const userId = req.params.userId
            const channel = await ChannelService.getChannel(userId)
            if(!channel){
                res.status(404).json({success:false,message:"Cannot get channel for the user"})
            }
            res.status(200).json({success:true,message:"Channel available for the user",data:channel})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    //CREATE NEW CHANNEL
    static createChannel = async()=>{
        try{
            const userId = req.params.userId
            const data = req.body
            const newChannel = await ChannelService.createChannel(userId,data)
            if(!newChannel){
                res.status(404).json({success:false,message:"Sorry!!! Cannot create channel"})
            }
            res.status(200).json({success:true,message:"Successfully created new channel for the user",data:newChannel})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    //UPDATE CHANNEL
    static updateChannel = async()=>{
        try{
            const userId = req.params.userId 
            const data = req.body
            const updatedChannel = await ChannelService.updateChannel(userId,data)
            if(!updatedChannel){
                res.status(404).json({success:false,message:"Sorry!!! Cannot update channel"})
            }
            res.status(200).json({success:true,message:"Successfully updated the channel",data:updatedChannel})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    //DELETE CHANNEL
    static deleteChannel = async()=>{
        try{
            const userId = req.params.userId
            const deletedChannel = await ChannelService.deleteChannel(userId)
            if(!deletedChannel){
                res.status(404).json({success:false,message:"Cannot delete channel"})
            }
            res.status(200).json({success:true,message:"Successfully deleted the channel",data:deletedChannel})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }
}

module.exports = ChannelController