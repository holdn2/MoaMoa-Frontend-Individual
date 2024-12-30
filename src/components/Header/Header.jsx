// 상단 헤더 컴포넌트
import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = ({ pageName }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.HeaderContainer}>
      <span className={styles.HeaderText}>{pageName}</span>
      {pageName === "홈화면" ? (
        <div className={styles.HeaderButtonContainer}>
          <button>
            <img src="../src/assets/Navigation/bell.svg" alt="알림" />
          </button>
          <button onClick={() => navigate("/level")}>
            <img src="../src/assets/Content/pig.svg" alt="돼지" />
          </button>
          <button>
            <img src="../src/assets/Content/coin3.svg" alt="동전" />
          </button>
        </div>
      ) : (
        // navigate(-1) : 클릭 시 바로 직전 페이지로 이동
        <button className={styles.GoBackButton} onClick={() => navigate(-1)}>
          <img src="../src/assets/Navigation/arrowLeftBig.svg" alt="뒤로가기" />
        </button>
      )}
    </div>
  );
};

export default Header;
