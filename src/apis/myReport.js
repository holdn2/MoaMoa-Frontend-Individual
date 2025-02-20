// 나의 기록 관련 api
import axios from "axios";
import axiosInstance from "./axiosInstance.js";

// 나의기록 나의소비 api
export const getMyConsumptionReport = async (
  int,
  setChallengeData,
  setChartData,
  setConsData
) => {
  try {
    const response = await axiosInstance.get(
      `/user/my-consumption?duration=${int}`,
    );
    console.log(response.data.result);
    setChallengeData(response.data.result);
    setChartData(response.data.result.stats);
    setConsData(response.data.result.totalSpent);
  } catch (error) {
    console.error("Error fetching my consumption report data", error);
  }
};

// 나의기록 나의소비 나의소비기록은? 부분 api
export const getMyConsumptionCheck = async (sortType, setSortChallenge) => {
  try {
    const response = await axiosInstance.get(
      `/user/my-consumption-record?sortType=${sortType}`,
    );
    setSortChallenge(response.data.result);
  } catch (error) {
    console.error("Error fetching my consumption report data", error);
  }
};

// 나의기록 챌린지 api
export const getMyChallengeReport = async (setChallengeData) => {
  try {
    const response = await axiosInstance.get("/user/my-challenge");
    setChallengeData(response.data.result);
  } catch (error) {
    console.error("Error fetching my challenge report data", error);
  }
};
