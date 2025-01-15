// 모으기 페이지 제작 예정
import React, { useState } from "react";
import styles from "./Collect.module.css";
import Header from "../../components/Header/Header";
import BottomBar from "../../components/BottomBar/BottomBar";
import AboutChallenge from "./AboutChallenge";
import Chatting from "./Chatting";

const Collect = () => {
  const pageName = "모으기";
  const [isChatting, setIsChatting] = useState(false);

  return (
    <div className={styles.CollectPageContainer}>
      <Header pageName={pageName} />

      <nav className={styles.navTab}>
        <button
          onClick={() => setIsChatting(false)}
          className={!isChatting ? styles.activeTab : styles.inactiveTab}
        >
          챌린지
        </button>
        <button
          onClick={() => setIsChatting(true)}
          className={isChatting ? styles.activeTab : styles.inactiveTab}
        >
          채팅
        </button>
      </nav>
      <div className={styles.MainArea}>
        {isChatting ? <Chatting /> : <AboutChallenge />}
      </div>
      {isChatting ? <></> : <BottomBar pageName={pageName} />}
    </div>
  );
};

export default Collect;
