// 나의 기록 관련 api
import axios from "axios";

// 나의기록 나의소비 api
export const getMyConsumptionReport = async (
  setChallengeData,
  setChartData,
  setConsData
) => {
  try {
    const response = await axios.get(
      "https://moamoa.store/user/my-consumption",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
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
    const response = await axios.get(
      `https://moamoa.store/user/my-consumption-record?sortType=${sortType}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setSortChallenge(response.data.result);
  } catch (error) {
    console.error("Error fetching my consumption report data", error);
  }
};

// 나의기록 챌린지 api
export const getMyChallengeReport = async (setChallengeData) => {
  try {
    const response = await axios.get("https://moamoa.store/user/my-challenge", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
      },
    });
    setChallengeData(response.data.result);
  } catch (error) {
    console.error("Error fetching my challenge report data", error);
  }
};
