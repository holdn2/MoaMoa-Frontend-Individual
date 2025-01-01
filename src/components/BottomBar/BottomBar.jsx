// 하단 네비게이션 바 컴포넌트
import React from "react";
import styles from "./BottomBar.module.css";
import { useNavigate } from "react-router-dom";

const BottomBar = ({ pageName }) => {
  const navigate = useNavigate();
  let collectImg = "";
  let homeImg = "";
  let mypageImg = "";

  switch (pageName) {
    case "홈화면":
    case "레벨":
      collectImg = "../src/assets/Tab/getUnclicked.svg";
      homeImg = "../src/assets/Tab/home.svg";
      mypageImg = "../src/assets/Tab/myUnclicked.svg";
      break;
    case "내 프로필":
    case "프로필 꾸미기":
    case "나의 기록":
      collectImg = "../src/assets/Tab/getUnclicked.svg";
      homeImg = "../src/assets/Tab/homeUnclicked.svg";
      mypageImg = "../src/assets/Tab/my.svg";
      break;
    default:
      collectImg = "../src/assets/Tab/get.svg";
      homeImg = "../src/assets/Tab/homeUnclicked.svg";
      mypageImg = "../src/assets/Tab/myUnclicked.svg";
      break;
  }

  return (
    <div className={styles.BottomBarContainer}>
      <button className={styles.NavButton} onClick={() => navigate("/collect")}>
        <img src={collectImg} alt="Collection" />
        <span className={styles.NavText}>모으기</span>
      </button>
      <button className={styles.NavButton} onClick={() => navigate("/")}>
        <img src={homeImg} alt="Home" />
        <span className={styles.NavText}>홈</span>
      </button>
      <button className={styles.NavButton} onClick={() => navigate("/mypage")}>
        <img src={mypageImg} alt="MyPage" />
        <span className={styles.NavText}>마이페이지</span>
      </button>
    </div>
  );
};

export default BottomBar;
