import React from "react";
import styles from "./MyChallengeRecord.module.css";
import coinYellow from "../../assets/Content/coinYellow.svg";
import success from "../../assets/ChallengeResult/success.svg";
import fail from "../../assets/ChallengeResult/fail.svg";

const MyChallengeRecord = ({
  challengeTitle,
  startDate,
  endDate,
  coin,
  isSuccessed,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <p>{challengeTitle}</p>
        <div className={styles.challengeInfo}>
          <span className={styles.date}>
            {startDate}~{endDate}
          </span>
          <span className={styles.coin}>
            <img src={coinYellow} alt="챌린지 코인 아이콘" />
            {coin > 0 ? "+" : "-"}
            {coin}
          </span>
        </div>
      </div>
      <img src={isSuccessed ? success : fail} />
    </div>
  );
};

export default MyChallengeRecord;
