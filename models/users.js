const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trime:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:(value)=>{
                return validator.isEmail(value)
            },
            message:"Invalid e-mail address"
        }
    },
    password:{
        type:String,
        required:true,
    },
    profile:{
        type:String
    },
    bio:{
        type:String,
        trim:true
    },
    dob:{
        type:Date
    }
},{timestamps:true})

userSchema.pre("save", async function(next){

    //sanitize the user inputs
    this.username = validator.escape(this.username)
    this.email = validator.escape(this.email)
    this.password = validator.escape(this.password)
    if(this.bio){
        this.bio = validator.escape(this.bio)
    }

    //hash user password before saving to the database
    const saltRounds = 10 
    const salt = await bcrypt.genSalt(saltRounds)
    this.password = await bcrypt.hash(this.password,salt)

    next()
})

const User = mongoose.model("User",userSchema)

module.exports = User