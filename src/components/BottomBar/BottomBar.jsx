// 하단 네비게이션 바 컴포넌트
import React, { useEffect, useState } from "react";
import styles from "./BottomBar.module.css";
import { useNavigate } from "react-router-dom";
import getUnclicked from "../../assets/Tab/getUnclicked.svg";
import home from "../../assets/Tab/home.svg";
import myUnclicked from "../../assets/Tab/myUnclicked.svg";
import homeUnclicked from "../../assets/Tab/homeUnclicked.svg";
import my from "../../assets/Tab/my.svg";
import get from "../../assets/Tab/get.svg";

const BottomBar = ({ pageName }) => {
  const navigate = useNavigate();
  const [collectImg, setCollectImg] = useState("");
  const [homeImg, setHomeImg] = useState("");
  const [mypageImg, setMypageImg] = useState("");

  useEffect(() => {
    switch (pageName) {
      case "홈화면":
      case "레벨":
      case "알림 페이지":
        setCollectImg(getUnclicked);
        setHomeImg(home);
        setMypageImg(myUnclicked);
        break;
      case "내 프로필":
      case "프로필 꾸미기":
      case "나의 기록":
        setCollectImg(getUnclicked);
        setHomeImg(homeUnclicked);
        setMypageImg(my);
        break;
      default:
        setCollectImg(get);
        setHomeImg(homeUnclicked);
        setMypageImg(myUnclicked);
        break;
    }
  }, [pageName]);

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
