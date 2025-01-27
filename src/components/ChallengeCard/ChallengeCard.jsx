import React from "react";
import coin from "../../assets/Content/coin3.svg";
import styles from "./ChallengeCard.module.css";

const ChallengeCard = ({ allData, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.public}>
        <span>{allData.public ? "전체" : "친구"}</span>
      </div>
      <section className={styles.contentWrapper}>
        <p className={styles.challengeName}>{allData.challengeName}</p>
        <p className={styles.challengeDesc}>{allData.challengeInfo}</p>
        <p className={styles.challengeInfo}>
          <span>
            {allData.startDate} ~ {allData.endDate}
          </span>
          <span>|</span>
          <span className={styles.coin}>
            <img src={coin} alt="코인 아이콘" />
            {allData.coin}
          </span>
        </p>
        <p className={styles.people}>{allData.people}명 참여 중</p>
      </section>
      <div className={styles.deadline}>
        <span>
          챌린지 성공까지 <span style={{ fontSize: "16px" }}>3일 02:49:50</span>
        </span>
      </div>
    </div>
  );
};

export default ChallengeCard;
