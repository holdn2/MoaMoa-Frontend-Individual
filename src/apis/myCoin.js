import axios from "axios";

export const getMyCoinReport = async (setCoinReport) => {
  try {
    const response = await axios.get("https://moamoa.store/user/coin", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
      },
    });
    setCoinReport(response.data.result);
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching getMyCoinReport", error);
  }
};
