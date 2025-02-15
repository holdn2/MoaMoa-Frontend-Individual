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

// 챌린지 조회(친구). 모집상태
export const getRecommendFriendChallenge = async (
  setRecommendFriendChallenges
) => {
  try {
    const response = await axios.get(
      `https://moamoa.store/challenges/friends`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setRecommendFriendChallenges(response.data.result);
  } catch (error) {
    console.error("Error fetching get recommend friend challenge data:", error);
  }
};

// 현재 진행중인 챌린지 조회 api
export const getOngoingChallenge = async (setOngoingChallenge) => {
  try {
    const response = await axios.get(
      "https://moamoa.store/challenges/ongoing",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setOngoingChallenge(response.data.result);
  } catch (error) {
    console.error("Error fetching get recommend friend challenge data:", error);
  }
};

// 현재 진행중인 챌린지, 디테일하게 조회, 함께하는 챌린저 조회 api
export const getOngoingChallengeDetialInfo = async (
  challengeId,
  setUsedRate,
  setOtherMembers
) => {
  try {
    const response = await axios.get(
      `https://moamoa.store/challenges/${challengeId}/members/progress`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setUsedRate(response.data.result.userProgress.usedRate);
    setOtherMembers(response.data.result.otherMembersProgress);
    console.log(response.data.result.userProgress.usedRate);
  } catch (error) {
    console.error("Error fetching get recommend friend challenge data:", error);
  }
};
