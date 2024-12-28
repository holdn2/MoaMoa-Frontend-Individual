import React, { useState } from "react";
import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import StartConsComponent from "../../components/StartConsComponent/StartConsComponent";

const Home = () => {
  const pageName = "홈화면";
  // 여기다가 소비 시작했는지, 이미 시작했으면 정보 저장.
  const [consumption, setConsumption] = useState(false);
  return (
    <div className={styles.HomeContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        {consumption ? <></> : <StartConsComponent />}
      </div>
      <BottomBar />
    </div>
  );
};

export default Home;
