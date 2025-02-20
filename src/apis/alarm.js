import axios from "axios";

export const getNotifications = async (setNotification) => {
  try {
    const response = await axiosInstance.get("/notifications");
    setNotification(response.data.result);
    // console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching getNotifications", error);
  }
};

import axiosInstance from "./axiosInstance";

// export const getNotifications = async (setNotification) => {
//   try {
//     const response = await axiosInstance.get("/notifications");

//     if (response.data && response.data.result) {
//       setNotification(response.data.result);
//     } else {
//       console.warn("⚠️ 알림 데이터가 없습니다.");
//       setNotification([]);
//     }
//   } catch (error) {
//     console.error("❌ Error fetching getNotifications:", error);
//     if (error.response) {
//       console.error("📌 서버 응답:", error.response.data);
//     } else if (error.request) {
//       console.error("📌 요청이 서버에 도달하지 못함.");
//     } else {
//       console.error("📌 요청 설정 중 에러 발생:", error.message);
//     }
//   }
// };
