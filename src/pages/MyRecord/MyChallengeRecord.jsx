import React from "react";
import styles from "./MyChallengeRecord.module.css";
import coinNavy from "../../assets/Content/coinNavy.svg";
import graySuccess from "../../assets/ChallengeResult/graySuccess.svg";
import grayFail from "../../assets/ChallengeResult/grayFail.svg";

const MyChallengeRecord = ({
  Title,
  startDate,
  endDate,
  coin,
  isSuccessed,
}) => {
  return (
    <div className={isSuccessed ? styles.successWrapper : styles.failWrapper}>
      <img src={isSuccessed ? graySuccess : grayFail} />
      <div className={styles.rightWrapper}>
        <p>{Title}</p>
        <div className={styles.challengeInfo}>
          <span className={styles.date}>
            {startDate}~{endDate}
          </span>
          <span className={styles.coin}>
            <img src={coinNavy} alt="챌린지 코인 아이콘" />
            {isSuccessed ? "+" : "-"}
            {coin}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyChallengeRecord;
