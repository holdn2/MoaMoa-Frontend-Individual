import axios from "axios";

export const getNotifications = async (setNotification) => {
  try {
    const response = await axios.get("https://moamoa.store/notifications", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
      },
    });
    setNotification(response.data.result);
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching getNotifications", error);
  }
};
