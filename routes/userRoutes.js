const express = require("express")
const upload = require("../config/multer")
const UserController = require("../controllers/UserController")

const router = express.Router()

router.get("/",UserController.getAllUser)
router.get("/:id",UserController.getSingleUser)
router.post("/",upload.single("profile"),UserController.addUser)
router.put("/:id",upload.single("profile"),UserController.updateUser)
router.delete("/:id",UserController.deleteUser)

module.exports = router



/* 


app.get("/users",UserController.getAllUser)
app.get("/users/:id",UserController.getSingleUser)
app.post("/users",upload.single("profile"),UserController.addUser)
app.put("/users/:id",upload.single("profile"),UserController.updateUser)
app.delete("/users/:id",UserController.deleteUser)

*/