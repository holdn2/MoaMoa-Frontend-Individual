import React, { useState } from "react";
import styles from "./JoinChallenge.module.css";
import date from "../../../../assets/Content/date.svg";
import people from "../../../../assets/Content/people.svg";

// 날짜 형식 맞추기
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`; // "YYYY.MM.DD" 형식
};

const JoinChallenge = ({ item, onClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // 챌린지 성공까지 남은 기간
  const successDate = Math.floor(
    (new Date(item.endDate) - currentDate) / (1000 * 60 * 60 * 24)
  );
  return (
    <div onClick={onClick} className={styles.joinChallenge}>
      <p className={styles.joinChallengeName}>{item.title}</p>
      <p className={styles.joinChallengeDeadline}>성공까지 {successDate}일</p>
      <p className={styles.joinChallengeInfo}>
        <img src={date} alt="달력 아이콘" />
        {formatDate(item.startDate)}~{formatDate(item.endDate)}
      </p>
      <p className={styles.joinChallengeInfo}>
        <img src={people} alt="사람 모양 아이콘" />
        <span style={{ fontWeight: 600 }}>{item.participantCount}명</span> 참여
        중
      </p>
    </div>
  );
};

export default JoinChallenge;
