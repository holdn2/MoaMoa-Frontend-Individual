import React from "react";
import styles from "./ChallengeProgressBar.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const ChallengeProgressBar = ({ user }) => {
  return (
    <div className={styles.EachChallengerContainer}>
      <div className={styles.ChallengerInfoContainer}>
        <img
          src={user.profileImageUrl}
          alt="유저 프로필 사진"
          style={{ borderRadius: "50%" }}
        />
        <span className={styles.ChallengeTitle}>{user.userName}</span>
      </div>
      <div className={styles.ChallengerProgressContainer}>
        <ProgressBar size="medium" currentProgress={user.usedRate} />
        <span className={styles.ProgressText}>{user.usedRate}% 사용</span>
      </div>
    </div>
  );
};

export default ChallengeProgressBar;
