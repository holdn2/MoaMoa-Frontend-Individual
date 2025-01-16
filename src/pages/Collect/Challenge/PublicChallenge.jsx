import React from "react";
import arrowRight from "../../../assets/Navigation/arrowRight.svg";
import date from "../../../assets/Content/date.svg";
import people from "../../../assets/Content/people.svg";
import styles from "./PublicChallenge.module.css";

const PublicChallenge = ({ allData }) => {
  const joinChallenge = allData.filter((data) => data.isJoined == true);
  return (
    <div className={styles.wrapper}>
      <h3>현재 진행중인 챌린지</h3>
      <div className={styles.joinChallengeMore}>
        <p>
          더보기
          <img src={arrowRight} alt="현재 진행중인 챌린지 더보기로 가는 버튼" />
        </p>
      </div>
      <div className={styles.joinChallengeWrapper}>
        {joinChallenge.map((item) => (
          <div className={styles.joinChallenge}>
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
        ))}
      </div>
      <h3>이런 챌린지는 어떠세요?</h3>
    </div>
  );
};

export default PublicChallenge;
