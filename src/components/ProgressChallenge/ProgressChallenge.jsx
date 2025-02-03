// 챌린지 진행 상황 컴포넌트 구현
import React from "react";
import styles from "./ProgressChallenge.module.css";
import ProgressChallengeCard from "../ProgressChallengeCard/ProgressChallengeCard";

const dummyData = [
  {
    id: 1,
    challengeContent: "일주일 5만원 챌린지",
    currentProgress: 5,
  },
  {
    id: 2,
    challengeContent: "모집 중인 챌린지",
    currentProgress: 3,
  },
  {
    id: 3,
    challengeContent: "예시 데이터",
    currentProgress: 2,
  },
];

const ProgressChallenge = () => {
  return (
    <div className={styles.ProgressContainer}>
      <span className={styles.ProgressText}>챌린지 진행 상황</span>
      <div>
        {dummyData.map((item) => (
          // 챌린지 카드도 따로 컴포넌트로 빼서 구현함
          <ProgressChallengeCard
            key={item.id}
            challengeContent={item.challengeContent}
            currentProgress={item.currentProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressChallenge;
