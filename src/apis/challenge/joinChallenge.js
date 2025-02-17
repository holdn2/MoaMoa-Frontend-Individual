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

export const completeJoinChallenge = async (setCompleteChallenge) => {
  try {
    const response = await axios.get(
      "https://moamoa.store/challenges/completed/unclaimed",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setCompleteChallenge(response.data.result);
  } catch (error) {
    console.error("Error completed join challenge :", error);
  }
};

export const completedChallengeClame = async (challengeId) => {
  try {
    const response = await axios.post(
      `https://moamoa.store/challenges/completed/claim/${challengeId}`,
      {},
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log(response.data.result);
  } catch (error) {
    console.error("Error completed join challenge clame :", error);
  }
};
