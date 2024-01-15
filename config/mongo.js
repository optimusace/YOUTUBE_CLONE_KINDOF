const mongoose = require("mongoose")

const connectToMongoDB = async (url)=>{
    try{
        const mongooseInstance = await mongoose.connect(url)
        return mongooseInstance
    }catch(err){
        throw err
    }
}

module.exports = connectToMongoDB