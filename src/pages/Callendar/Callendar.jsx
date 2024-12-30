// 캘린더 페이지 구현
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Callendar.module.css";
import BottomBar from "../../components/BottomBar/BottomBar";

const Callendar = () => {
  const pageName = "홈화면";
  const [month, setMonth] = useState(11); // 기본 11월
  const [showDropdown, setShowDropdown] = useState(false);
  const friendRank = 1;
  const totalRank = 45;
  const attendanceRate = 90;
  const week = ["월", "화", "수", "목", "금", "토", "일"];
  const day = [
    ...Array.from({ length: 30 }, (_, i) => i + 1),
    ...Array.from({ length: 5 }, (_, i) => i + 1),
  ];
  let cnt = 0;

  // 월 선택할 수 있는 드롭다운 추가 구현
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const selectMonth = (selectedMonth) => {
    setMonth(selectedMonth);
    setShowDropdown(false); // 선택 후 드롭다운 닫기
  };

  return (
    <div className={styles.CallendarPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <div className={styles.TotalCallendarContainer}>
          <button className={styles.MonthContainer} onClick={toggleDropdown}>
            <span className={styles.Month}>{month}</span>
            <img
              src="../src/assets/Navigation/polygon.svg"
              alt="작은 arrowDown(polygon)"
              className={styles.MonthArrow}
            />
          </button>
          {/* 바로 아래 부분이 토글 */}
          {showDropdown && (
            <div className={styles.MonthDropdown}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <div
                  key={m}
                  className={`${styles.MonthItem} ${
                    m === month ? styles.Selected : ""
                  }`}
                  onClick={() => selectMonth(m)}
                >
                  {m}월
                </div>
              ))}
            </div>
          )}
          <div className={styles.BigCallendarContainer}>
            <div className={styles.WeekTextContainer}>
              {week.map((item) => (
                <div key={item} className={styles.WeekText}>
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.Line} />
            <div className={styles.DayTextContainer}>
              {day.map(
                (item) => (
                  (cnt += 1),
                  (
                    <div key={cnt} className={styles.DayText}>
                      {item}
                    </div>
                  )
                )
              )}
            </div>
          </div>
          <div className={styles.RankRateContainer}>
            <div className={styles.RankContainer}>
              <span className={styles.Rank}>{friendRank}</span>
              <span className={styles.RankType}>친구 등수</span>
            </div>
            <div className={styles.RateContainer}>
              <span className={styles.Rate}>{attendanceRate}%</span>
              <span className={styles.AttendanceRate}>출석률</span>
            </div>
            <div className={styles.RankContainer}>
              <span className={styles.Rank}>{totalRank}</span>
              <span className={styles.RankType}>전체 등수</span>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Callendar;
