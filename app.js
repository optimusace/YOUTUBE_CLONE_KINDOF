require("dotenv").config()
const express = require("express")
const connectToMongoDB = require("./config/mongo")

const app = express()

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use((req,res)=>{
    res.status(404).send("Unable to find the requested resource")
})

const startServer = async()=>{
    try{
        await connectToMongoDB()
        app.listen(process.env.PORT,()=>{
            console.log("Server started on port : ",process.env.PORT)
        })
    }catch(err){
        console.log("Unable to start the server : ",err)
    }
}
startServer()