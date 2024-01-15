const User = require("../models/users")
const mongoose = require("mongoose")

class UserService{

    //get all users
    static getAllUsers = async()=>{
        try{
            const users = await User.find()
            if(users.length > 0){
                return users
            }else{
                return null
            }
        }catch(err){
            throw err
        }
    }

    //get single user using id
    static getSingleUser = async(id)=>{
        try{
            if(!mongoose.Types.ObjectId.isValid(id)){
                return null
            }
            const user = await User.findById(id)
            if(!user){
                return null
            }
            return user 
        }catch(err){
            throw err
        }
    }

    //create new user
    static addUser = async(data,file)=>{
        try{
            let newUser = null
            if(file){
                newUser = await User.create({
                    ...data,
                    profilePictureUrl : file.path
                }) 
            }else{
                newUser = await User.create({
                    ...data
                })
            }
            return newUser
        }catch(err){
            throw err
        }
    }

    //update user with new data using id of user
    static updateUser = async(id,data,file)=>{
        try{
            if(!mongoose.Types.ObjectId.isValid(id)){
                return null
            }

            let update = null
            if(file){
                update = await User.findByIdAndUpdate(id,{
                    ...data,
                    profilePictureUrl:file.path
                })
            }else{
                update = await User.findByIdAndUpdate(id,{
                    ...data
                })
            }
            if(!update){
                return null
            }
            const updatedData = await User.findById(id)
            return updatedData
        }catch(err){
            throw err
        }
    }

    //delete user using id
    static deleteUser = async(id)=>{
        try{
            const deletedUser = await User.findByIdAndDelete(id)
            if(!deletedUser){
                return null
            }
            return deletedUser
        }catch{
            throw err
        }
    }
}

module.exports = UserService


