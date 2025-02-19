// 챌린지 나가기 api
import axios from "axios";

export const deleteChallenge = async (challengeId) => {
  try {
    const response = await axios.post(
      `https://moamoa.store/challenges/${challengeId}/leave`,
      {},
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log(response.data.result);
    console.log(challengeId, "번 챌린지 아이디를 삭제했습니다.");
  } catch (error) {
    console.error("Error delete challenge data:", error);
  }
};
