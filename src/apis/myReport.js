// 나의 기록 관련 api
import axios from "axios";

// 나의기록 챌린지 api
export const getMyChallengeReport = async (setChallengeData) => {
  try {
    const response = await axios.get("https://moamoa.store/user/my-challenge", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
      },
    });
    setChallengeData(response.data.result);
  } catch (error) {
    console.error("Error fetching my report challenge data", error);
  }
};
