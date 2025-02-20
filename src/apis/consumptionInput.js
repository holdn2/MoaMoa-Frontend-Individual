import axios from "axios";
import axiosInstance from "./axiosInstance.js";

export const postConsInput = async (
  consCategoryClicked,
  challengeClicked,
  myConsumption
) => {
  try {
    const response = await axiosInstance.post(
      "/consumption-challenge/my-consumption",
      {
        consumptionCategory: consCategoryClicked,
        challengeCategory: challengeClicked,
        amount: myConsumption,
      },
    );
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching postConsInput data", error);
    console.log({
      consumption_category: consCategoryClicked,
      challenge_category: challengeClicked,
      amount: myConsumption,
    });
  }
};

export const getConsInput = async (setTargetAmount) => {
  try {
    const response = await axiosInstance.get(
      "/consumption-challenge/my-consumption",
    );
    console.log(response.data.result.amountLeft);
    setTargetAmount(response.data.result.amountLeft);
  } catch (error) {
    console.error("Error fetching getConsInput data", error);
  }
};
