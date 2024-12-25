import React from "react";
import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import Button from "../../components/Button/Button";

const Home = () => {
  const pageName = "홈화면";
  return (
    <div className={styles.HomeContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <Button>확인</Button>
      </div>
      <BottomBar />
    </div>
  );
};

export default Home;
