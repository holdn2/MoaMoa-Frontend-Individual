import React, { useEffect, useState } from "react";
import coin from "../../assets/Content/coin3.svg";
import styles from "./ChallengeCard.module.css";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";

const ChallengeCard = ({ allData, onClick, isDetailChallenge }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const endDate = new Date(allData.endDate);
  const successDate = endDate.getDate() - currentDate.getDate();
  const successTime = `${23 - currentDate.getHours()}:${
    59 - currentDate.getMinutes()
  }:${59 - currentDate.getSeconds()}`;
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
          챌린지 성공까지{" "}
          <span style={{ fontSize: "16px" }}>
            {successDate}일 {successTime}
          </span>
        </span>
      </div>
      {isDetailChallenge && (
        <>
          <Link
            to={"/challengemodal/challengestopmodal"}
            state={{
              successDate: successDate,
              coin: allData.coin,
              name: allData.challengeName,
            }}
            className={styles.stopChallengeLink}
          >
            챌린지 중단하기
          </Link>
          <div className={styles.progressBar}>
            <ProgressBar size="short" currentProgress={allData.percent} />
            <span>{allData.percent}% 사용</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ChallengeCard;
