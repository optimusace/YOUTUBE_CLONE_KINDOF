const Channel = require("../models/channel")
const mongoose = require("mongoose")

class ChannelService{

    //GET CHANNEL - get channel of the user using user id
    static getChannel = async (userId)=>{
        try{
            if(!mongoose.Types.ObjectId.isValid(userId)){
                return null
            }
            const channel = await Channel.findOne({userId:userId})
            if(!channel){
                return null
            }
            return channel
        }catch(err){
            throw err
        }
    }

    //CREATE CHANNEL - create channel for the user using userId, a user can only create a single channel
    static createChannel = async (userId,data)=>{
        try{
            if(!mongoose.Types.ObjectId.isValid(userId)){
                return null
            }
            const userAvailable = await Channel.findOne({userId:userId})
            if(userAvailable){
                return null
            }
            const newChannel = await Channel.create({
                userId,
                ...data
            })
        }catch(err){
            throw err
        }
    }

    //UPDATE CHANNEL - update channel of a user using userId
    static updateChannel = async(userId,data)=>{
        try{
            if(!mongoose.Types.ObjectId.isValid(userId)){
                return null
            }
            const update = await Channel.findOneAndUpdate({userId:userId})
            if(!update){
                return null
            }
            const updatedChannel = await Channel.findOne({userId:userId})
            return updatedChannel
        }catch(err){
            throw err
        }
    }

    //DELETE CHANNEL - delete channel of user using userId
    static deleteChannel = async(userId)=>{
        try{
            if(!mongoose.Types.ObjectId.isValid(userId)){
                return null 
            }
            const deletedChannel = await Channel.findOneAndDelete({userId:userId})
        }catch(err){
            throw err
        }
    }
}

module.exports = ChannelService