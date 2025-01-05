import React, { useEffect, useState } from "react";
import styles from "./MyProfileComponent.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import NicknameChangeModal from "../NicknameChangeModal/NicknameChangeModal";

const MyProfileComponent = () => {
  const navigate = useNavigate();
  const pigImg = "../src/assets/Pig/dirtpig.svg";
  const currentCoin = 100;
  const necessaryCoin = 200;
  const userLv = "흙돼지";
  const userJoinTime = 3;
  const userCoinCnt = 55;

  const [userName, setUserName] = useState("모아모아 030");

  // 닉네임 변경 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.MyProfileContainer}>
      <div className={styles.PigNameContainer}>
        <img src={pigImg} alt="흙돼지" className={styles.PigImg} />
        <button className={styles.NicknameContainer} onClick={openModal}>
          <div className={styles.ForFixContainer}>
            <span className={styles.FixText}>내 닉네임</span>
            <img
              src="../src/assets/Component1/modify.svg"
              alt="수정"
              className={styles.FixImg}
            />
          </div>
          <span className={styles.Username}>{userName}</span>
        </button>
      </div>
      <div className={styles.ToNextlevel}>
        <div className={styles.TotalProgressBar}>
          <div className={styles.CurrentProgressBar} />
          <span className={styles.CoinText}>
            {currentCoin}/{necessaryCoin}코인
          </span>
        </div>
      </div>
      <div className={styles.UserInfoContainer}>
        <div className={styles.InfoContentContainer}>
          <span className={styles.InfoContentText}>현재 단계</span>
          <span className={styles.UserInfoContent}>{userLv}</span>
        </div>
        <div className={styles.InfoContentContainer}>
          <span className={styles.InfoContentText}>함께한 지</span>
          <span className={styles.UserInfoContent}>{userJoinTime}일째</span>
        </div>
        <div className={styles.InfoContentContainer}>
          <span className={styles.InfoContentText}>보유 코인</span>
          <span className={styles.UserInfoContent}>{userCoinCnt}</span>
        </div>
      </div>
      <button onClick={() => navigate("/decoprofile")}>
        <PrimaryButton size="decoProfile">프로필 꾸미기</PrimaryButton>
      </button>

      {isModalOpen && (
        <NicknameChangeModal
          userName={userName}
          pigImg={pigImg}
          onClose={closeModal}
          setUserName={setUserName}
        />
      )}
    </div>
  );
};

export default MyProfileComponent;
