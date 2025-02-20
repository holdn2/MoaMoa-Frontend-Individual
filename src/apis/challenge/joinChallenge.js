// 챌린지 참여 api
import axios from "axios";
import axiosInstance from "../axiosInstance.js";

export const joinChallenge = async (challengeId) => {
  try {
    const response = await axiosInstance.post(
      `/challenges/${challengeId}/join`,
      {},
    );
  } catch (error) {
    console.error("Error join challenge :", error);
  }
};

export const completeJoinChallenge = async (setCompleteChallenge) => {
  try {
    const response = await axiosInstance.get(
      "/challenges/completed/unclaimed",
    );
    setCompleteChallenge(response.data.result);
    console.log(response.data.result);
  } catch (error) {
    console.error("Error completed join challenge :", error);
  }
};

export const completedChallengeClame = async (challengeId) => {
  try {
    const response = await axiosInstance.post(
      `/challenges/completed/claim/${challengeId}`,
      {},
    );
    console.log(response.data.result);
  } catch (error) {
    console.error("Error completed join challenge clame :", error);
  }
};
