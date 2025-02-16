// 챌린지 생성 관련 api
import axios from "axios";

// 챌린지 모집글 생성 api
export const addNewChallenge = async (newChallengeData) => {
  try {
    const response = await axios.post(
      "https://moamoa.store/challenges/create",
      {
        title: newChallengeData.title,
        content: newChallengeData.content,
        headCount: newChallengeData.people,
        startDate: newChallengeData.startDate,
        endDate: newChallengeData.endDate,
        battleCoin: newChallengeData.coin,
        publicChallenge: newChallengeData.publicChallenge,
        goalAmount: newChallengeData.targetMoney,
        challengeCategory: newChallengeData.category,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log("챌린지 생성 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error create challenge :", error);
  }
};

// 그룹에서 챌린지 생성 api
export const addNewGroupChallenge = () => {};
