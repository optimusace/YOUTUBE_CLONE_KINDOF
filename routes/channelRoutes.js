const express = require("express")
const ChannelController = require("../controllers/ChannelController")

const router = express.Router()

router.get("/:userId",ChannelController.getChannel)
router.post("/:userId",ChannelController.createChannel)
router.put("/:userId",ChannelController.updateChannel)
router.delete("/:userId",ChannelController.deleteChannel)

module.exports = router