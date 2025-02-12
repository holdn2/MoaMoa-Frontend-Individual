// 회원조회 api
import axios from "axios";

export const getUserInfo = async (setUserInfo) => {
  try {
    const response = await axios.get("https://moamoa.store/user", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
      },
    });
    setUserInfo(response.data.result);
  } catch (error) {
    console.error("Error fetching mypage data", error);
  }
};
