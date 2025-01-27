import React, { useState } from "react";
import styles from "./DetailPastChallenge.module.css";
import Header from "../../../../components/Header/Header";
import BottomBar from "../../../../components/BottomBar/BottomBar";
import ProgressBar from "../../../../components/ProgressBar/ProgressBar";
import ChallengeProgressBar from "../../../../components/ChallengeProgressBar/ChallengeProgressBar";

const DetailPastChallenge = () => {
  const pageName = "챌린지";
  const [challengeData, setChallengeData] = useState(dummyData[0]);
  return (
    <div className={styles.PageWrapper}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <div className={styles.ChallengeContainer}>
          {challengeData.isSuccess ? (
            <img
              src="../../../src/assets/ChallengeResult/success.svg"
              alt="성공"
              className={styles.ChallengeResultImg}
            />
          ) : (
            <img
              src="../../../src/assets/ChallengeResult/fail.svg"
              alt="실패"
              className={styles.ChallengeResultImg}
            />
          )}
          <span className={styles.ChallengeTitle}>
            {challengeData.userName}
          </span>
          <span className={styles.ChallengeText}>{challengeData.text}</span>
          <div className={styles.DateCoinWrapper}>
            <span>{challengeData.date}</span> <span>|</span>
            <div style={{ display: "flex", gap: "2px" }}>
              <img src="../../../src/assets/Content/coin3.svg" alt="코인" />
              <span>{challengeData.coin}</span>
            </div>
          </div>
          <span className={styles.PeopleText}>
            {challengeData.people}명 참여
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "6px",
              alignItems: "center",
            }}
          >
            <ProgressBar size="short" currentProgress={challengeData.percent} />
            <span className={styles.ProgressText}>
              {challengeData.percent}% 사용
            </span>
          </div>
        </div>
        <div className={styles.WithChallengerWrapper}>
          <span
            className={styles.ChallengeTitle}
            style={{
              textAlign: "start",
              fontSize: "18px",
              marginBottom: "16px",
            }}
          >
            함께한 챌린저
          </span>
          {challengeData.with.map((user) => (
            <ChallengeProgressBar key={user.id} user={user} />
          ))}
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default DetailPastChallenge;

const dummyData = [
  {
    id: 1,
    userName: "1주일 10만원으로 살아남기",
    text: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    date: "2024.11.15 ~ 11.22",
    coin: 300,
    people: 127,
    isSuccess: true,
    percent: 60,
    with: [
      {
        id: 1,
        userName: "황금돼지될래",
        userImg: "http://placehold.co/49",
        percent: 40,
      },
      {
        id: 2,
        userName: "김모아모아",
        userImg: "http://placehold.co/49",
        percent: 80,
      },
      {
        id: 3,
        userName: "햎피그",
        userImg: "http://placehold.co/49",
        percent: 50,
      },
      {
        id: 4,
        userName: "도니도니",
        userImg: "http://placehold.co/49",
        percent: 70,
      },
      {
        id: 5,
        userName: "짱모아",
        userImg: "http://placehold.co/49",
        percent: 20,
      },
    ],
  },
];
