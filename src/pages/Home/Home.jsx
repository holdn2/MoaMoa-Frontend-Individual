import React from "react";
import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";

const Home = () => {
  const pageName = "홈화면";
  return (
    <div className={styles.HomeContainer}>
      <Header pageName={pageName} />
      <BottomBar />
    </div>
  );
};

export default Home;
