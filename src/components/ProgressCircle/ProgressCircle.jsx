import React from "react";
import styles from "./ProgressCircle.module.css";
import progressCircle from "../../assets/ProgressBar/progressCircle.svg";

const ProgressCircle = ({ progressPercent, width, height }) => {
  return (
    <div
      className={styles.ProgressCircleContainer}
      style={{ width: width, height: height }}
    >
      <img
        src={progressCircle}
        alt="현재 사용 소비 금액 비율"
        className={styles.ProgressCircle}
      />
      <span className={styles.ProgressPercent}>{progressPercent}%</span>
    </div>
  );
};

export default ProgressCircle;
