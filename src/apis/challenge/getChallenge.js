// 챌린지 조회 관련 api
import axios from "axios";
import axiosInstance from "../axiosInstance.js";

// 챌린지 조회(공개) api. 모집 중인 상태이고 사용자가 아직 참여하지 않은 챌린지
export const getRecommendChallenge = async (
  sortType,
  setRecommendChallenges
) => {
  try {
    const response = await axiosInstance.get(
      `/challenges/public?sortType=${sortType}`
    );
    setRecommendChallenges(response.data.result);
  } catch (error) {
    console.error("Error fetching get recommend challenge data:", error);
  }
};

// 현재 진행 중인 챌린지 조회(친구).
export const getInProgressFriendChallenge = async (
  setInProgressFriendChallenge
) => {
  try {
    const response = await axiosInstance.get(
      `/challenges/friends`
    );
    setInProgressFriendChallenge(response.data.result);
  } catch (error) {
    console.error("Error fetching get recommend friend challenge data:", error);
  }
};

// 현재 진행중인 챌린지 조회 api
export const getOngoingChallenge = async (
  setOngoingChallenge,
  setWaitForStartChallenge
) => {
  try {
    const response = await axiosInstance.get(
      "/challenges/ongoing",
    );
    // 응답 데이터 분류를 위한 배열. 현재 진행중인지, 참여했으나 시작 대기중인지(아직 모집중)
    const ongoingChallenges = [];
    const waitingChallenges = [];

    response.data.result.forEach((challenge) => {
      if (challenge.status === "ONGOING") {
        ongoingChallenges.push(challenge);
      } else if (challenge.status === "RECRUITING") {
        waitingChallenges.push(challenge);
      }
    });

    // 상태 업데이트
    setOngoingChallenge(ongoingChallenges);
    setWaitForStartChallenge(waitingChallenges);
  } catch (error) {
    console.error("Error fetching get recommend friend challenge data:", error);
  }
};

// 현재 진행중인 챌린지, 디테일하게 조회, 함께하는 챌린저 조회 api
export const getOngoingChallengeDetailInfo = async (
  challengeId,
  setUsedRate,
  setOtherMembers
) => {
  try {
    const response = await axiosInstance.get(
      `/challenges/${challengeId}/members/progress`,
    );
    setUsedRate(response.data.result.userProgress.usedRate);
    setOtherMembers(response.data.result.otherMembersProgress);
    console.log(response.data.result.userProgress.usedRate);
  } catch (error) {
    console.error("Error fetching get recommend friend challenge data:", error);
  }
};

// 카테고리 클릭 시 검색 결과 챌린지 조회 api
export const getCategoryChallenge = async (
  challengeClicked,
  setCategoryChallenges
) => {
  try {
    const response = await axiosInstance.get(
      `/challenges/search/category?category=${challengeClicked}`,
    );
    setCategoryChallenges(response.data.result);
  } catch (error) {
    console.error("Error fetching get recommend friend challenge data:", error);
  }
};
