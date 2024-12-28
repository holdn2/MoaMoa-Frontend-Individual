import React from "react";
import styles from "./BottomBar.module.css";

const BottomBar = () => {
  return (
    <div className={styles.BottomBarContainer}>
      <div className={styles.NavButton}>
        <img src="../src/assets/Tab/getUnclicked.svg" alt="Collection" />
        <span className={styles.NavText}>모으기</span>
      </div>
      <div className={styles.NavButton}>
        <img src="../src/assets/Tab/home.svg" alt="Home" />
        <span className={styles.NavText}>홈</span>
      </div>
      <div className={styles.NavButton}>
        <img src="../src/assets/Tab/myUnclicked.svg" alt="MyPage" />
        <span className={styles.NavText}>마이페이지</span>
      </div>
    </div>
  );
};

export default BottomBar;
