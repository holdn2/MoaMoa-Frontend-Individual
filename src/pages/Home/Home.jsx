import React from "react";
import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";

const Home = () => {
  const pageName = "홈화면";
  return (
    <div className={styles.HomeContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <PrimaryButton>확인</PrimaryButton>
        <div>asdf</div>
        <SecondaryButton>버튼</SecondaryButton>
        <div>asdf</div>
        <PrimaryButton size="sp">나의 소비 시작하기</PrimaryButton>
      </div>
      <BottomBar />
    </div>
  );
};

export default Home;
