const express = require("express")
const VideoController = require("../controllers/VideoController")

const router = express.Router()

router.get("/",VideoController.getAllVideos)
router.get("/:videoId",VideoController.getVideoById)
router.post("/",VideoController.addVideo)
router.put("/:videoId",VideoController.updateVideo)
router.delete("/:videoId",VideoController.deleteVideo)

module.exports = router