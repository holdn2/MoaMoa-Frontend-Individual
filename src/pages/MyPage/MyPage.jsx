// 마이페이지 구현 예정
import React from "react";
import styles from "./MyPage.module.css";
import Header from "../../components/Header/Header";
import BottomBar from "../../components/BottomBar/BottomBar";
import MyProfileComponent from "../../components/MyProfileComponent/MyProfileComponent";
import ProfileToPageComponent from "../../components/ProfileToPageComponent/ProfileToPageComponent";

const MyPage = () => {
  const pageName = "내 프로필";
  return (
    <div className={styles.MyPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <MyProfileComponent />
        <ProfileToPageComponent dstName="나의 기록" />
        <ProfileToPageComponent dstName="과소비 재진단" />
      </div>
      <BottomBar pageName={pageName} />
    </div>
  );
};

export default MyPage;
