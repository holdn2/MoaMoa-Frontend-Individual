// 모집 중인 챌린지 컴포넌트 구현
import React from "react";
import styles from "./RecruitChallenge.module.css";
import RecruitChallengeCard from "../RecruitChallengeCard/RecruitChallengeCard";

const RecruitChallenge = ({ recruitingChallenges }) => {
  return (
    <div className={styles.RecruitContainer}>
      <span className={styles.RecruitText}>모집 중인 챌린지</span>
      <div>
        {recruitingChallenges.map((challenge) => (
          // 챌린지 카드도 따로 컴포넌트로 빼서 구현함
          <RecruitChallengeCard
            key={challenge.challengeId}
            challengeContent={challenge.title}
            recruitDday={challenge.remainingDays}
            currentPeople={challenge.participantCountRate}
            challenge={challenge}
          />
        ))}
      </div>
    </div>
  );
};

export default RecruitChallenge;
