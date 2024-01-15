const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePictureUrl:{
        type:String
    },
    bio:{
        type:String
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

    //hash user password before saving to the database
    const saltRounds = 10 
    const salt = await bcrypt.genSalt(saltRounds)
    this.password = await bcrypt.hash(this.password,salt)

    next()
})

const User = mongoose.model("User",userSchema)

module.exports = User