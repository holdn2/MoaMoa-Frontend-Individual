// 하단 네비게이션 바 컴포넌트
import React from "react";
import styles from "./BottomBar.module.css";
import { useNavigate } from "react-router-dom";
import getUnclicked from "../../../src/assets/Tab/getUnclicked.svg";
import home from "../../../src/assets/Tab/home.svg";
import myUnclicked from "../../../src/assets/Tab/myUnclicked.svg";
import homeUnclicked from "../../../src/assets/Tab/homeUnclicked.svg";
import my from "../../../src/assets/Tab/my.svg";
import get from "../../../src/assets/Tab/get.svg";

const BottomBar = ({ pageName }) => {
  const navigate = useNavigate();
  let collectImg = "";
  let homeImg = "";
  let mypageImg = "";

  switch (pageName) {
    case "홈화면":
    case "레벨":
    case "알림 페이지":
      collectImg = { getUnclicked };
      homeImg = { home };
      mypageImg = { myUnclicked };
      break;
    case "내 프로필":
    case "프로필 꾸미기":
    case "나의 기록":
      collectImg = { getUnclicked };
      homeImg = { homeUnclicked };
      mypageImg = { my };
      break;
    default:
      collectImg = { get };
      homeImg = { homeUnclicked };
      mypageImg = { myUnclicked };
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
