// 나의 소비 시작하기 관련 api
import axios from "axios";

// 최근목표금액 api
export const getRecentTargetPrice = async (setRecentTarget) => {
  try {
    const response = await axios.get(
      "https://moamoa.store/consumption-challenge",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    if (response.data?.result) {
      setRecentTarget(response.data.result);
    } else {
      console.warn("No recent target price data found");
      setRecentTarget(0);
    }
  } catch (error) {
    console.error("Error fetching recent target price data", error);
  }
};

export const postConsStart = async (
  prize,
  startFormatDate,
  endFormatDate,
  targetAmount
) => {
  try {
    const response = await axios.post(
      "https://moamoa.store/consumption-challenge",
      {
        prize: prize,
        startDate: startFormatDate,
        endDate: endFormatDate,
        targetAmount: targetAmount,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("Error fetching postConsStart", error);
  }
};
