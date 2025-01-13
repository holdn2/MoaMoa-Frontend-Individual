import React, { useState } from "react";
import styles from "./MyRecord.module.css";
import Header from "../../components/Header/Header";
import MyConsumption from "./MyConsumption";
import MyChallenge from "./MyChallenge";

const MyRecord = () => {
  const pageName = "나의 기록";
  const [isClicked, setIsClicked] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header pageName={pageName} />
      <nav className={styles.navTab}>
        <button
          onClick={() => setIsClicked(0)}
          className={isClicked === 0 ? styles.activeTab : styles.inactiveTab}
        >
          나의 소비
        </button>
        <button
          onClick={() => setIsClicked(1)}
          className={isClicked === 1 ? styles.activeTab : styles.inactiveTab}
        >
          챌린지
        </button>
      </nav>
      {isClicked === 0 ? <MyConsumption /> : <MyChallenge />}
    </div>
  );
};

export default MyRecord;
