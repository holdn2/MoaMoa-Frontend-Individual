import React, { useEffect, useState } from "react";
import styles from "./MyProfileComponent.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import NicknameChangeModal from "../NicknameChangeModal/NicknameChangeModal";
import DustLevel from "../../assets/DustLevel/Lv0.svg";
import modify from "../../assets/Component1/modify.svg";
import { getUserInfo } from "../../apis/mypage";
import ProgressBar from "../ProgressBar/ProgressBar";

const MyProfileComponent = () => {
  const navigate = useNavigate();

  // 유저 정보
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

  // 닉네임 변경 시 즉시 반영되도록
  const handleNicknameChange = (newNickname) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      nickname: newNickname,
    }));
  };

  // 다음 레벨로 갈 때 필요한 코인
  const [needCoin, setNeedCoin] = useState(0);
  const [levelPercent, setLevelPercent] = useState(0);

  useEffect(() => {
    if (userInfo.coin < 200) {
      setNeedCoin(200);
      setLevelPercent(100 - (100 * (200 - userInfo.coin)) / 200);
    } else if (userInfo.coin < 500) {
      setNeedCoin(500);
      setLevelPercent(100 - (100 * (500 - userInfo.coin)) / 500);
    } else if (userInfo.coin < 1000) {
      setNeedCoin(1000);
      setLevelPercent(100 - (100 * (1000 - userInfo.coin)) / 1000);
    } else if (userInfo.coin < 1700) {
      setNeedCoin(1700);
      setLevelPercent(100 - (100 * (1700 - userInfo.coin)) / 1700);
    } else if (userInfo.coin < 2600) {
      setNeedCoin(2600);
      setLevelPercent(100 - (100 * (2600 - userInfo.coin)) / 2600);
    } else if (userInfo.coin < 3600) {
      setNeedCoin(3600);
      setLevelPercent(100 - (100 * (3600 - userInfo.coin)) / 3600);
    }
  }, [userInfo.coin]);

  // 닉네임 변경 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.MyProfileContainer}>
      <div className={styles.DustNameContainer}>
        <img src={userInfo.dustImage} alt="먼지" className={styles.DustImg} />
        <button className={styles.NicknameContainer} onClick={openModal}>
          <div className={styles.ForFixContainer}>
            <span className={styles.FixText}>내 닉네임</span>
            <img src={modify} alt="수정" className={styles.FixImg} />
          </div>
          <span className={styles.Username}>{userInfo.nickname}</span>
        </button>
      </div>
      <div className={styles.ToNextlevel}>
        <div className={styles.TotalProgressBar}>
          <ProgressBar size="large" currentProgress={levelPercent} />
          <span className={styles.CoinText}>
            {userInfo.coin}/{needCoin}코인
          </span>
        </div>
      </div>
      <div className={styles.UserInfoContainer}>
        <div className={styles.InfoContentContainer}>
          <span className={styles.InfoContentText}>현재 단계</span>
          <span className={styles.UserInfoContent}>Lv.{userInfo.level}</span>
        </div>
        <div className={styles.InfoContentContainer}>
          <span className={styles.InfoContentText}>함께한 지</span>
          <span className={styles.UserInfoContent}>
            {userInfo.beenWith}일째
          </span>
        </div>
        <div className={styles.InfoContentContainer}>
          <span className={styles.InfoContentText}>보유 코인</span>
          <span className={styles.UserInfoContent}>{userInfo.coin}</span>
        </div>
      </div>
      <div onClick={() => navigate("/decoprofile")}>
        <PrimaryButton size="decoProfile">프로필 꾸미기</PrimaryButton>
      </div>

      {/* 닉네임 변경 api 필요 */}
      {isModalOpen && (
        <NicknameChangeModal
          userName={userInfo.nickname}
          dustImg={userInfo.dustImage}
          onClose={closeModal}
          onNicknameChange={handleNicknameChange}
        />
      )}
    </div>
  );
};

export default MyProfileComponent;
