import React, { useEffect, useState } from "react";
import styles from "./Setting.module.css";
import Header from "../../components/Header/Header";
import SecondaryButton from "../../components/Button/SecondaryButton";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SettingModal from "./SettingModal";
import link from "../../assets/Navigation/link.svg";
import selectedButton from "../../assets/SelectButton/selectedButton.svg";
import unSelectedButton from "../../assets/SelectButton/unselectedButton.svg";
import { getUserInvite } from "../../apis/setting";

const Setting = () => {
  const pageName = "설정";
  const version = "5.8.25";
  const [alarm, setAlarm] = useState(false);
  const [marketingAgree, setMarketingAgree] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState(0);
  const [userInviteLink, setUserInviteLink] = useState("");

  const handleCopyClick = () => {
    getUserInvite(setUserInviteLink);
    if (userInviteLink) {
      navigator.clipboard
        .writeText(userInviteLink)
        .then(() => alert("초대 링크가 복사되었습니다!"))
        .catch((err) => console.error("클립보드 복사 실패:", err));
    }
  };

  return (
    <div className={styles.SettingContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <div className={styles.InviteFriendContainer}>
          <span className={styles.Title}>친구 초대</span>
          <button className={styles.ContentContainer}>
            <span className={styles.ContentText}>친구 초대하기</span>
            <img
              src={link}
              alt="링크 복사"
              className={styles.Imgs}
              onClick={() => handleCopyClick()}
            />
          </button>
        </div>
        <div className={styles.ServiceSettingContainer}>
          <span className={styles.Title}>서비스 설정</span>
          <div className={styles.ContentContainer}>
            <span className={styles.ContentText}>알림</span>
            <button className={styles.Imgs} onClick={() => setAlarm(!alarm)}>
              {alarm ? (
                <img src={selectedButton} alt="알림 여부 버튼" />
              ) : (
                <img src={unSelectedButton} alt="알림 여부 버튼" />
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
                <img src={selectedButton} alt="동의 버튼" />
              ) : (
                <img src={unSelectedButton} alt="동의 버튼" />
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
          <div
            onClick={() => {
              setModalState(1);
              setIsModalOpen(true);
            }}
          >
            <PrimaryButton>로그아웃</PrimaryButton>
          </div>
          <div
            onClick={() => {
              setModalState(2);
              setIsModalOpen(true);
            }}
          >
            <SecondaryButton>회원 탈퇴</SecondaryButton>
          </div>
        </div>
      </div>

      <SettingModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalState={modalState}
        setModalState={setModalState}
      />
    </div>
  );
};

export default Setting;
