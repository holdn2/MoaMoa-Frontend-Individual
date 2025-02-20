import axios from "axios";
import axiosInstance from "./axiosInstance.js";

export const getUserNameHome = async (setUserName) => {
  try {
    const response = await axiosInstance.get("/home");
    setUserName(response.data.result.nickName);
    console.log(response.data.result.nickName);
  } catch (error) {
    console.error("Error fetching getUserNameHome", error);
  }
};

// 과소비 진단 여부 확인 api
export const getDiagnosisFinish = async (setIsDiagnosis) => {
  try {
    const response = await axiosInstance.get("/home");
    setIsDiagnosis(response.data.result.needOverConsumptionTest);
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching getDiagnosisFinish", error);
  }
};

// 나의 소비 입력하기 컴포넌트에 뜨는 정보
export const getConsChallengeSummary = async (setConsChallengeSum) => {
  try {
    const response = await axiosInstance.get("/home");
    setConsChallengeSum(response.data.result.consumptionChallengeSummary);
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching getConsChallengeSummary", error);
  }
};

// 홈화면에 뜨는 챌린지 api
export const getChallengeHome = async (setChallengeHome) => {
  try {
    const response = await axiosInstance.get("/home");
    setChallengeHome(response.data.result.challengeHomeResponse);
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching getChallengeHome", error);
  }
};

// 코인 가져오는 api
export const getLevelHome = async (setLevel) => {
  try {
    const response = await axiosInstance.get("/home");
    setLevel(response.data.result.coinSummary);
    console.log(response.data.result.coinSummary);
  } catch (error) {
    console.error("Error fetching getCoinHome", error);
  }
};

// 출석한 날짜 가져오는 api
export const getAttendanceDates = async (setAtendance) => {
  try {
    const response = await axios.get("https://moamoa.store/home", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
      },
    });
    setAtendance(response.data.result.attendanceDates);
    console.log(response.data.result.attendanceDates);
  } catch (error) {
    console.error("Error fetching getAttendanceDates", error);
  }
};
