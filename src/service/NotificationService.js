const admin = require("../util/firebase");

class NotificationService {
  static async sendNotification(deviceToken, title, body) {
    const message = {
      notification: {
        title,
        body,
      },
      token: deviceToken,
    };

    try {
      const response = await admin.messaging().send(message);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

class NotificationByTopicService {
  static async sendNotification(topic, title, body) {
    const message = {
      notification: {
        title,
        body,
      },
      topic: topic,
    };

    try {
      const response = await admin.messaging().send(message);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = {NotificationService , NotificationByTopicService};
