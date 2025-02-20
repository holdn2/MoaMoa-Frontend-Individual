// 출석체크 관련 api
import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getAttendanceApi = async (setAttendanceData) => {
  try {
    const response = await axiosInstance.get(
      "https://moamoa.store/attendances"
    );
    const rawData = response.data.result;

    // ✅ 날짜별로 중복 제거 후 날짜만 저장
    const uniqueDates = new Set();

    rawData.forEach((item) => {
      // 날짜 포맷 "YYYY-MM-DD"로 변환
      const date = new Date(item.attendanceTime).toISOString().split("T")[0];
      uniqueDates.add(date); // ✅ Set으로 중복 제거
    });

    // ✅ Set을 배열로 변환 후 setAttendanceData에 저장
    const attendanceDates = Array.from(uniqueDates);
    console.log("Attendance Dates:", attendanceDates);

    setAttendanceData(attendanceDates);
  } catch (error) {
    console.error("Error fetching attendance data:", error);
  }
};
