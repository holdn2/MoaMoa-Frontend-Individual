import React, { useState } from "react";
import styles from "./Setting.module.css";
import Header from "../../components/Header/Header";
import SecondaryButton from "../../components/Button/SecondaryButton";
import PrimaryButton from "../../components/Button/PrimaryButton";

const Setting = () => {
  const pageName = "설정";
  const version = "5.8.25";
  const [alarm, setAlarm] = useState(false);
  const [marketingAgree, setMarketingAgree] = useState(false);

  return (
    <div className={styles.SettingContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <div className={styles.InviteFriendContainer}>
          <span className={styles.Title}>친구 초대</span>
          <button className={styles.ContentContainer}>
            <span className={styles.ContentText}>친구 초대하기</span>
            <img
              src="../src/assets/Navigation/link.svg"
              alt="링크 복사"
              className={styles.Imgs}
            />
          </button>
        </div>
        <div className={styles.ServiceSettingContainer}>
          <span className={styles.Title}>서비스 설정</span>
          <div className={styles.ContentContainer}>
            <span className={styles.ContentText}>알림</span>
            <button className={styles.Imgs} onClick={() => setAlarm(!alarm)}>
              {alarm ? (
                <img
                  src="../src/assets/SelectButton/selectedButton.svg"
                  alt="알림 여부 버튼"
                />
              ) : (
                <img
                  src="../src/assets/SelectButton/unSelectedButton.svg"
                  alt="알림 여부 버튼"
                />
              )}
            </button>
          </div>
          <div className={styles.ContentContainer}>
            <span className={styles.ContentText}>마케팅 수신 동의</span>
            <button
              className={styles.Imgs}
              onClick={() => setMarketingAgree(!marketingAgree)}
            >
              {marketingAgree ? (
                <img
                  src="../src/assets/SelectButton/selectedButton.svg"
                  alt="동의 버튼"
                />
              ) : (
                <img
                  src="../src/assets/SelectButton/unSelectedButton.svg"
                  alt="동의 버튼"
                />
              )}
            </button>
          </div>
        </div>
        <div className={styles.CustomerSupportContainer}>
          <span className={styles.Title}>고객지원</span>
          <div className={styles.ContentContainer}>
            <span className={styles.ContentText}>버전 정보</span>
            <span className={styles.VersionInfo}>{version}</span>
          </div>
        </div>
        <div className={styles.ButtonContainer}>
          <PrimaryButton>로그아웃</PrimaryButton>
          <SecondaryButton>회원 탈퇴</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Setting;
