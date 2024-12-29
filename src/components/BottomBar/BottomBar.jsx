// 하단 네비게이션 바 컴포넌트
import React from "react";
import styles from "./BottomBar.module.css";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.BottomBarContainer}>
      <button className={styles.NavButton} onClick={() => navigate("/collect")}>
        <img src="../src/assets/Tab/getUnclicked.svg" alt="Collection" />
        <span className={styles.NavText}>모으기</span>
      </button>
      <button className={styles.NavButton} onClick={() => navigate("/")}>
        <img src="../src/assets/Tab/home.svg" alt="Home" />
        <span className={styles.NavText}>홈</span>
      </button>
      <button className={styles.NavButton} onClick={() => navigate("/mypage")}>
        <img src="../src/assets/Tab/myUnclicked.svg" alt="MyPage" />
        <span className={styles.NavText}>마이페이지</span>
      </button>
    </div>
  );
};

export default BottomBar;
