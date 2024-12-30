// 모집 중인 챌린지 컴포넌트 구현 시 필요한 챌린지 카드 컴포넌트
import React from "react";
import styles from "./RecruitChallengeCard.module.css";

const RecruitChallengeCard = ({
  challengeContent,
  recruitDday,
  currentPeople,
}) => {
  return (
    <div className={styles.RecruitCardContainer}>
      <div className={styles.CardTextContainer}>
        <span className={styles.ChallengeTitle}>{challengeContent}</span>
        <div className={styles.DayPeopleText}>
          <span className={styles.DayText}>D-{recruitDday}</span>
          <img
            src="../src/assets/Content/people.svg"
            alt="사람들 이모티콘"
            className={styles.PeopleImg}
          />
          <span className={styles.CurrentPeople}>{currentPeople}/10</span>
        </div>
      </div>
      <button className={styles.ArrowContainer}>
        <img
          src="../src/assets/Navigation/arrowRight.svg"
          alt="오른쪽 화살표"
          className={styles.ArrowImg}
        />
      </button>
    </div>
  );
};

export default RecruitChallengeCard;
