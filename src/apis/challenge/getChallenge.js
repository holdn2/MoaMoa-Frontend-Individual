// 챌린지 조회 관련 api
import axios from "axios";

// 챌린지 조회(공개) api. 모집 중인 상태이고 사용자가 아직 참여하지 않은 챌린지
export const getRecommendChallenge = async (
  sortType,
  setRecommendChallenges
) => {
  try {
    const response = await axios.get(
      `https://moamoa.store/challenges/public?sortType=${sortType}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setRecommendChallenges(response.data.result);
  } catch (error) {
    console.error("Error fetching get recommend challenge data:", error);
  }
};

//
