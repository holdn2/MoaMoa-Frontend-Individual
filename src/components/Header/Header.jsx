// 상단 헤더 컴포넌트
import React from "react";
import styles from "./Header.module.css";

const Header = ({ pageName }) => {
  return (
    <div className={styles.HeaderContainer}>
      <span className={styles.HeaderText}>{pageName}</span>
      {pageName === "홈화면" ? (
        <div className={styles.HeaderButtonContainer}>
          <img src="../src/assets/Navigation/bell.svg" alt="알림" />
          <img src="../src/assets/Content/pig.svg" alt="돼지" />
          <img src="../src/assets/Content/coin3.svg" alt="동전" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
