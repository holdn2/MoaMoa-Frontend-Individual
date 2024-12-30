// 모집 중인 챌린지 컴포넌트 구현 시 필요한 챌린지 카드 컴포넌트
import React from "react";
import styles from "./ProgressChallengeCard.module.css";

const ProgressChallengeCard = ({ challengeContent, currentProgress }) => {
  return (
    <div className={styles.ProgressCardContainer}>
      <div className={styles.CardTextContainer}>
        <span className={styles.ChallengeTitle}>{challengeContent}</span>
        <div className={styles.ProgressContainer}>
          <div className={styles.TotalProgressBar}>
            <div className={styles.CurrentProgressBar} />
          </div>
          <span className={styles.CurrentProgressText}>
            {currentProgress}/7
          </span>
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

export default ProgressChallengeCard;
