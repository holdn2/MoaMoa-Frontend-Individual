// 챌린지 참여 api
import axios from "axios";

export const joinChallenge = async (challengeId) => {
  try {
    const response = await axios.post(
      `https://moamoa.store/challenges/${challengeId}/join`,
      {},
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
  } catch (error) {
    console.error("Error join challenge :", error);
  }
};
