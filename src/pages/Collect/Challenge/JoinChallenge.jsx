import React from "react";
import styles from "./JoinChallenge.module.css";
import date from "../../../assets/Content/date.svg";
import people from "../../../assets/Content/people.svg";

const JoinChallenge = ({ item, onClick }) => {
  return (
    <div onClick={onClick} className={styles.joinChallenge}>
      <p className={styles.joinChallengeName}>{item.challengeName}</p>
      <p className={styles.joinChallengeDeadline}>성공까지 </p>
      <p className={styles.joinChallengeInfo}>
        <img src={date} alt="달력 아이콘" />
        {item.startDate}~{item.endDate}
      </p>
      <p className={styles.joinChallengeInfo}>
        <img src={people} alt="사람 모양 아이콘" />
        <span style={{ fontWeight: 600 }}>{item.people}명</span> 참여 중
      </p>
    </div>
  );
};

export default JoinChallenge;
