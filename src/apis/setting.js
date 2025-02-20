import axios from "axios";
import axiosInstance from "./axiosInstance.js";

export const postUserDelete = async () => {
  try {
    const response = await axiosInstance.post(
      "/user/delete",
      {},
    );
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching postUserDelete", error);
  }
};

export const getUserInvite = async (setUserInviteLink) => {
  try {
    const response = await axiosInstance.get("/user/invite");
    setUserInviteLink(response.data.result.url);
    console.log(response.data.result.url);
  } catch (error) {
    console.error("Error fetching postUserDelete", error);
  }
};
