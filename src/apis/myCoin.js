import axios from "axios";
import axiosInstance from "./axiosInstance.js";

export const getMyCoinReport = async (setCoinReport) => {
  try {
    const response = await axiosInstance.get("/user/coin", {
    });
    setCoinReport(response.data.result);
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching getMyCoinReport", error);
  }
};
