// 캘린더 페이지 구현
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Callendar.module.css";
import dustLv6 from "../../assets/DustLevel/Lv6.svg";
import arrowLeft from "../../assets/Navigation/arrowLeft.svg";
import arrowRight from "../../assets/Navigation/arrowRight.svg";
import attendanceCheck from "../../assets/Content/attendanceCheck.svg";
import { getAttendanceApi } from "../../apis/attendance";

const attendanceData = [
  "2024-12-23",
  "2025-01-03",
  "2025-01-17",
  "2025-01-26",
  "2025-01-29",
  "2025-02-03",
  "2025-02-04",
  "2025-02-05",
  "2025-02-24",
];

const Callendar = () => {
  const pageName = "출석체크";
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  // console.log(date.toISOString());
  const [allAttendaceData, setAllAttendaceData] = useState([]);
  useEffect(() => {
    getAttendanceApi(setAllAttendaceData);
  }, []);

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  // 현재 월의 첫 날과 마지막 날
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  // 이전 달 마지막 날
  const prevLastDay = new Date(year, month - 1, 0).getDate();

  // 첫 날의 요일
  const startWeekDay = firstDay.getDay();

  // 달력의 날짜 목록 생성
  const calendarDays = [];

  // 이전 달 날짜 추가
  for (let i = startWeekDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevLastDay - i,
      isCurrentMonth: false, // 이전 달
      fullDate: `${year}-${(month - 1).toString().padStart(2, "0")}-${(
        prevLastDay - i
      )
        .toString()
        .padStart(2, "0")}`,
    });
  }

  // 현재 달 날짜 추가
  for (let day = 1; day <= lastDay.getDate(); day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true, // 현재 달
      fullDate: `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`,
    });
  }

  // 다음 달 날짜 추가 (빈 칸 채우기)
  let nextDay = 1;
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push({
      day: nextDay++,
      isCurrentMonth: false, // 다음 달
      fullDate: `${year}-${(month + 1).toString().padStart(2, "0")}-${nextDay
        .toString()
        .padStart(2, "0")}`,
    });
  }

  // 월 이동
  const handleMonth = (operator) => {
    if (operator === "-") {
      if (month > 1) {
        setMonth(month - 1);
      } else {
        setYear(year - 1);
        setMonth(12);
      }
    } else {
      if (month < 12) {
        setMonth(month + 1);
      } else {
        setYear(year + 1);
        setMonth(1);
      }
    }
  };

  return (
    <div className={styles.CallendarPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        {/* <div className={styles.CheerUpContainer}>
          <div className={styles.ContentWrapper}>
            <span className={styles.CheerUpText}>
              연속 출석 5일 째예요 !
              <br />
              7일 연속 출석하면
              <br />
              보상이 있어요 (멘트 수정)
            </span>
            <img style={{ width: "96px" }} src={dustLv6} alt="레벨 6" />
          </div>
        </div> */}
        <div className={styles.CalendarContainer}>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <img
              style={{ width: "22px" }}
              src={arrowLeft}
              alt="이전 달"
              onClick={() => handleMonth("-")}
            />
            <span
              className={styles.TextStyle}
              style={{ fontSize: "28px", fontWeight: "700", padding: 0 }}
            >
              {year % 100}년 {month}월
            </span>
            <img
              style={{ width: "22px" }}
              src={arrowRight}
              alt="이전 달"
              onClick={() => handleMonth("+")}
            />
          </div>

          <div className={styles.CalendarTileWrapper}>
            <div className={styles.WeekWrapper}>
              {daysOfWeek.map((day, idx) => (
                <div key={idx} className={styles.TextStyle}>
                  {day}
                </div>
              ))}
            </div>
            <div className={styles.Line} />
            <div className={styles.DaysWrapper}>
              {calendarDays.map(({ day, isCurrentMonth, fullDate }, idx) => {
                const isChecked = allAttendaceData.includes(fullDate);
                return (
                  <div key={idx}>
                    {isChecked ? (
                      <img
                        src={attendanceCheck}
                        alt="출석 체크"
                        className={styles.CheckImg}
                      />
                    ) : (
                      <div
                        className={styles.TextStyle}
                        style={{
                          color: isCurrentMonth ? "#004961" : "#DEDEDE", // 현재 달 색상 유지, 이전/다음 달 회색
                        }}
                      >
                        {day}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callendar;
