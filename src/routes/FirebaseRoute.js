const express = require("express");
const {
  sendFirebaseNotification,
  sendFirebaseNotificationByTopic,
} = require("../controllers/FirebaseController");
const router = express.Router();
const admin = require("../util/firebase");

router.post("/send-notification", async (req, res) => {
  const result = await sendFirebaseNotification(req, res);
  return res.send(result);
});

//subscribe
router.post("/subscribe-topic", async (req, res) => {
  const { deviceToken, topic } = req.body;
  try {
    await admin.messaging().subscribeToTopic(deviceToken, topic);
    res.status(200).json({ message: "Topic Subscribed", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error subscribing to topic", success: false });
  }
});
//unsubscribe
router.post("/unsubscribe-topic", async (req, res) => {
  const { deviceToken, topic } = req.body;
  try {
    await admin.messaging().unsubscribeFromTopic(deviceToken, topic);
    res.status(200).json({ message: "Topic Unsubscribed", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error subscribing to topic", success: false });
  }
});

router.post("/send-notification-by-topic", async (req, res) => {
  const result = await sendFirebaseNotificationByTopic(req, res);
  return res.send(result);
});

module.exports = router;
