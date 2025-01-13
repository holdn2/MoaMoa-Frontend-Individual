import React, { useState } from "react";
import styles from "./MyRecord.module.css";
import Header from "../../components/Header/Header";
import MyConsumption from "./MyConsumption";
import MyChallenge from "./MyChallenge";

const MyRecord = () => {
  const pageName = "나의 기록";
  // 탭바 boolean으로 수정
  const [isChallenge, setIsChallenge] = useState(false);

  return (
    <div className={styles.MyRecordePageContainer}>
      <Header pageName={pageName} />
      <nav className={styles.navTab}>
        <button
          onClick={() => setIsChallenge(false)}
          className={!isChallenge ? styles.activeTab : styles.inactiveTab}
        >
          나의 소비
        </button>
        <button
          onClick={() => setIsChallenge(true)}
          className={isChallenge ? styles.activeTab : styles.inactiveTab}
        >
          챌린지
        </button>
      </nav>
      <div className={styles.wrapper}>
        {!isChallenge ? <MyConsumption /> : <MyChallenge />}
      </div>
    </div>
  );
};

export default MyRecord;
