import React, { useEffect, useState } from "react";
import MyChallengeBar from "./MyChallengeBar";
import MyChallengeRecord from "./MyChallengeRecord";
import styles from "./MyChallenge.module.css";
import { getMyChallengeReport } from "../../apis/myReport";

const MyChallenge = () => {
  const [challengeData, setChallengeData] = useState({
    totalEarned: 0,
    successRate: 0,
    top: 0,
    totalTries: 0,
    totalSucceed: 0,
    challengeRecords: [], // 초기값을 빈 배열로 설정
  });
  useEffect(() => {
    getMyChallengeReport(setChallengeData);
  }, []);

  return (
    <div className={styles.wrapper}>
      <section className={styles.totalPricewrapper}>
        <p>내가 지금까지 얻은 코인은 ?</p>
        <div className={styles.totalPrice}>
          <span>총</span>
          <span style={{ fontSize: "32px" }}>{challengeData.totalEarned}</span>
          <span>코인</span>
        </div>
      </section>
      <MyChallengeBar
        children="내 챌린지 성공 확률은?"
        isConsumption={false}
        successRate={challengeData.successRate * 100}
        top={challengeData.top}
        totalTries={challengeData.totalTries}
        totalSucceed={challengeData.totalSucceed}
      />
      <section className={styles.challengeRecordWrapper}>
        {challengeData.challengeRecords.length > 0 ? (
          <p>내 챌린지 기록은 ?</p>
        ) : (
          <></>
        )}
        <div className={styles.challengeRecord}>
          {challengeData.challengeRecords.map((item) => (
            <MyChallengeRecord key={item.challengeId} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyChallenge;
