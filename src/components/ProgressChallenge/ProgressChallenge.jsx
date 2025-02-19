// 챌린지 진행 상황 컴포넌트 구현
import React from "react";
import styles from "./ProgressChallenge.module.css";
import ProgressChallengeCard from "../ProgressChallengeCard/ProgressChallengeCard";

const ProgressChallenge = ({ participatingChallenges }) => {
  return (
    <div className={styles.ProgressContainer}>
      <span className={styles.ProgressText}>챌린지 진행 상황</span>
      <div>
        {participatingChallenges.map((challenge) => (
          // 챌린지 카드도 따로 컴포넌트로 빼서 구현함
          <ProgressChallengeCard
            key={challenge.challengeId}
            challengeContent={challenge.title}
            currentProgress={challenge.usageRate}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressChallenge;
