// 나의 소비 시작하기 관련 api
import axios from "axios";
import axiosInstance from "./axiosInstance.js";

// 최근목표금액 api
export const getRecentTargetPrice = async (setRecentTarget) => {
  try {
    const response = await axiosInstance.get(
      "/consumption-challenge",
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
    const response = await axiosInstance.post(
      "/consumption-challenge",
      {
        prize: prize,
        startDate: startFormatDate,
        endDate: endFormatDate,
        targetAmount: targetAmount,
      },
    );
    console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("Error fetching postConsStart", error);
  }
};
