import React from "react";
import MyChallengeBar from "./MyChallengeBar";
import MyChallengeRecord from "./MyChallengeRecord";
import styles from "./MyChallenge.module.css";

const dummyData = [
  {
    id: 1,
    challengeTitle: "1주일에 5만원 쓰기",
    startDate: "11/01",
    endDate: "11/08",
    coin: 100,
    isSuccessed: true,
  },
  {
    id: 2,
    challengeTitle: "1주일에 5만원 쓰기",
    startDate: "11/01",
    endDate: "11/08",
    coin: 100,
    isSuccessed: true,
  },
  {
    id: 3,
    challengeTitle: "1주일에 5만원 쓰기",
    startDate: "11/01",
    endDate: "11/08",
    coin: 200,
    isSuccessed: false,
  },
  {
    id: 4,
    challengeTitle: "카페 줄이기 챌린지",
    startDate: "11/01",
    endDate: "11/08",
    coin: 200,
    isSuccessed: false,
  },
  {
    id: 5,
    challengeTitle: "식비 절약 챌린지",
    startDate: "10/22",
    endDate: "10/29",
    coin: 100,
    isSuccessed: true,
  },
  {
    id: 6,
    challengeTitle: "배달음식 NO! 챌린지",
    startDate: "10/20",
    endDate: "10/27",
    coin: 200,
    isSuccessed: false,
  },
  {
    id: 7,
    challengeTitle: "택시 안타기 챌린지",
    startDate: "09/01",
    endDate: "09/08",
    coin: 100,
    isSuccessed: true,
  },
];

const MyChallenge = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.totalPricewrapper}>
        <p>내가 지금까지 얻은 코인은 ?</p>
        <div className={styles.totalPrice}>
          <span>총</span>
          <span style={{ fontSize: "32px" }}>350</span>
          <span>코인</span>
        </div>
      </section>
      <MyChallengeBar children="내 챌린지 성공 확률은?" isConsumption={false} />
      <section className={styles.challengeRecordWrapper}>
        <p>내 챌린지 기록은 ?</p>
        <div className={styles.challengeRecord}>
          {dummyData.map((item) => (
            <MyChallengeRecord
              key={item.id}
              challengeTitle={item.challengeTitle}
              startDate={item.startDate}
              endDate={item.endDate}
              coin={item.coin}
              isSuccessed={item.isSuccessed}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyChallenge;
