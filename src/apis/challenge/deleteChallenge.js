// 챌린지 나가기 api
import axios from "axios";
import axiosInstance from "../axiosInstance.js";

export const deleteChallenge = async (challengeId) => {
  try {
    const response = await axiosInstance.post(
      `https://moamoa.store/challenges/${challengeId}/leave`,
      {},
    );
    console.log(response.data.result);
    console.log(challengeId, "번 챌린지 아이디를 삭제했습니다.");
  } catch (error) {
    console.error("Error delete challenge data:", error);
  }
};
