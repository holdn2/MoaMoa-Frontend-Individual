import React, { useState } from "react";
import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import StartConsComponent from "../../components/StartConsComponent/StartConsComponent";
import InputConsComponent from "../../components/InputConsComponent/InputConsComponent";

const Home = () => {
  const pageName = "홈화면";
  // 여기다가 소비 시작했는지, 이미 시작했으면 정보 저장.
  const [consumption, setConsumption] = useState(true);
  return (
    <div className={styles.HomeContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        {/* 나의 소비 입력하기 or 시작하기 */}
        {consumption ? <InputConsComponent /> : <StartConsComponent />}
      </div>
      <BottomBar />
    </div>
  );
};

export default Home;
