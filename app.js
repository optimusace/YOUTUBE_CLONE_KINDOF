require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectToMongoDB = require("./config/mongo")
const userRoutes = require("./routes/userRoutes")
const channelRoutes = require("./routes/channelRoutes")
const videoRoutes = require("./routes/videoRoutes")

const app = express()

app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//SET VIEW ENGINE - EJS
app.set("view engine","ejs")
app.set("views","./views")

//ROUTES 
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/channels",channelRoutes)
app.use("/api/v1/videos",videoRoutes)

app.use((req,res)=>{
    res.status(404).send("Unable to find the requested resource")
})

const startServer = async()=>{
    try{
        const connectionString = process.env.MONGO_URL + process.env.DB_NAME
        await connectToMongoDB(connectionString)
        console.log("Successfully connected to database")
        app.listen(process.env.PORT,()=>{
            console.log("Server started on port : ",process.env.PORT)
        })
    }catch(err){
        console.log("Unable to start the server : ",err)
    }
}
startServer()