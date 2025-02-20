// 출석체크 관련 api
import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getAttendanceApi = async (setAttendanceData) => {
  try {
    const response = await axiosInstance.get("/attendances");
    const rawData = response.data.result;

    // ✅ 날짜별로 중복 제거 후 날짜만 저장
    const uniqueDates = new Set();

    rawData.forEach((item) => {
      console.log("원본 시간:", item.attendanceTime);
      const dateObj = new Date(item.attendanceTime);

      // ✅ 로컬 타임존 기준으로 날짜 추출
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작
      const day = String(dateObj.getDate()).padStart(2, "0");

      const localDate = `${year}-${month}-${day}`;
      console.log("로컬 기준 날짜:", localDate);

      uniqueDates.add(localDate);
    });

    // ✅ Set을 배열로 변환 후 setAttendanceData에 저장
    const attendanceDates = Array.from(uniqueDates);
    console.log("Attendance Dates:", attendanceDates);

    setAttendanceData(attendanceDates);
  } catch (error) {
    console.error("Error fetching attendance data:", error);
  }
};
