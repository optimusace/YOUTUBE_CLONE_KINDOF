
const UserService = require("../services/userServices")

class UserController{

    static getAllUser = async (req,res)=>{
        try{
            const users = await UserService.getAllUsers()
            if(!users){
                return res.status(404).json({success:false,message:"sorry cannot find users"})
            }
            res.status(200).json({success:true,message:"Users available",data:users})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    static getSingleUser = async (req,res)=>{
        try{
            const id = req.params.id
            const user = await UserService.getSingleUser(id)
            if(!user){
                return res.status(404).json({success:false,message:"Cannot find user"})
            }
            res.status(200).json({success:true,message:"User found",data:user})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    static addUser = async (req,res)=>{
        try{
            const data = req.body
            const file = req.file
            const newUser = await UserService.addUser(data,file)
            res.status(200).json({success:true,message:"User created successfully",data:newUser})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    static updateUser = async(req,res)=>{
        try{
            const id = req.params.id 
            const data = req.body 
            const file = req.file
            const updatedUser = await UserService.updateUser(id,data,file)
            if(!updatedUser){
                return res.status(404).json({success:false,message:"Unable to update user"})
            }
            res.status(200).json({success:true,message:"User updated Successfully",data:updatedUser})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }

    static deleteUser = async (req,res)=>{
        try{
            const id = req.params.id 
            const deletedUser = await UserService.deleteUser(id)
            if(!deletedUser){
                return res.status(404).json({success:false,message:"Unable to delete user"})
            }
            res.status(200).json({success:true,message:"User deleted successfully",data:deletedUser})
        }catch(err){
            res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
        }
    }
}

module.exports = UserController