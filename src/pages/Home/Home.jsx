// 홈 페이지 제작 중
import React, { useState } from "react";
import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import StartConsComponent from "../../components/StartConsComponent/StartConsComponent";
import InputConsComponent from "../../components/InputConsComponent/InputConsComponent";
import MiniCallendar from "../../components/MiniCallendar/MiniCallendar";
import RecruitChallenge from "../../components/RecruitChallenge/RecruitChallenge";
import ProgressChallenge from "../../components/ProgressChallenge/ProgressChallenge";

const Home = () => {
  const pageName = "홈화면";
  // 여기다가 소비 시작했는지, 이미 시작했으면 정보 저장.
  // 이 전에 시작했는지 여부에 따라 보이는 화면이 달라짐
  const [consumption, setConsumption] = useState(true);

  return (
    <div className={styles.HomeContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        {/* 나의 소비 입력하기 or 시작하기 */}
        {consumption ? <InputConsComponent /> : <StartConsComponent />}
        {/* 캘린더 */}
        <MiniCallendar />
        {/* 모집 중인 챌린지 */}
        <RecruitChallenge />
        {/* 챌린지 진행 상황 */}
        {/* <ProgressChallenge /> */}
      </div>
      <BottomBar />
    </div>
  );
};

export default Home;
