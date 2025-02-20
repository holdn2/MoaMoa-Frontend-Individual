// 챌린지 생성 관련 api
import axios from "axios";
import axiosInstance from "../axiosInstance.js";

// 챌린지 모집글 생성 api
export const addNewChallenge = async (newChallengeData) => {
  try {
    const response = await axiosInstance.post(
      "/challenges/create",
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
    );
    console.log("챌린지 생성 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error create challenge :", error);
  }
};

// 그룹에서 챌린지 생성 api
export const addNewGroupChallenge = async (roomId, newGroupChallengeData) => {
  try {
    const response = await axiosInstance.post(
      `/challenges/groups/${roomId}/create`,
      {
        title: newGroupChallengeData.title,
        content: newGroupChallengeData.content,
        headCount: newGroupChallengeData.people,
        startDate: newGroupChallengeData.startDate,
        endDate: newGroupChallengeData.endDate,
        battleCoin: newGroupChallengeData.coin,
        publicChallenge: false,
        goalAmount: newGroupChallengeData.targetMoney,
        challengeCategory: newGroupChallengeData.category,
      },
    );
    console.log("그룹 챌린지 생성 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error create group challenge :", error);
  }
};
