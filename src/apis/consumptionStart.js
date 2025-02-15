// 나의 소비 시작하기 관련 api
import axios from "axios";

// 최근목표금액 api
export const getRecentTargetPrice = async () => {
  try {
    const response = await axios.get(
      "https://moamoa.store/consumption-challenge",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching recent target price data", error);
  }
};
