import axiosInstance from "./axiosInstance.js";

export const postDiagnosisFinish = async () => {
  try {
    const response = await axiosInstance.post(
      "/home/over-consumption",
      {},
    );
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching postDiagnosisFinish", error);
  }
};
