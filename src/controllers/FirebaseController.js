const NotificationService = require("../service/notificationService");

const sendFirebaseNotification = async (req, res) => {
  const { deviceToken, title, body } = req.body;

  try {
    const response = await NotificationService.sendNotification(
      deviceToken,
      title,
      body
    );
    res
      .status(200)
      .json({ message: "Notification sent successfully", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending notification", success: false });
  }
};

module.exports = sendFirebaseNotification;
