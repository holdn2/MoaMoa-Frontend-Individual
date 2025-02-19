// 회원조회 api
import axiosInstance from "./axiosInstance";
import axios from "axios";

// 마이페이지에 나오는 user정보를 받아오는 api
export const getUserInfo = async (setUserInfo) => {
  try {
    const response = await axiosInstance.get("/user"); // ✅ 자동으로 JWT 포함됨
    setUserInfo(response.data.result);
  } catch (error) {
    console.error("❌ Error fetching mypage data:", error);
  }
};

// 닉네임 변경을 위한 api. 중복 여부도 체크 가능
export const checkAndChangeNickname = async (
  newNickname,
  setNicknameDuplicated
) => {
  try {
    const response = await axios.post(
      "https://moamoa.store/user/nickname",
      {
        newNickname: newNickname,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    const isDuplicated = response.data.result.duplicated;
    setNicknameDuplicated(isDuplicated);
  } catch (error) {
    console.error("Error change nickname", error);
  }
};
