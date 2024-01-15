require("dotenv").config()
const express = require("express")
const upload = require("./config/multer")
const connectToMongoDB = require("./config/mongo")
const UserController = require("./controllers/UserController")

const app = express()

app.set("view engine","ejs")
app.set("views","./views")

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//USER RELATED ROUTES
app.get("/users",UserController.getAllUser)
app.get("/users/:id",UserController.getSingleUser)
app.post("/users",upload.single("profile"),UserController.addUser)
app.put("/users/:id",upload.single("profile"),UserController.updateUser)
app.delete("/users/:id",UserController.deleteUser)

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