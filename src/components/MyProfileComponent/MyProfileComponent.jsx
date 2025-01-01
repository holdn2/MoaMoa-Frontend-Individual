import React, { useEffect, useState } from "react";
import styles from "./MyProfileComponent.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../Button/SecondaryButton";

// 닉네임 변경 모달 컴포넌트
const NicknameChangeModal = ({ userName, pigImg, onClose, setUserName }) => {
  const [newNickname, setNewNickname] = useState(userName);
  const [toConfirmModal, setToConfirmModal] = useState(false);
  const handleUserName = () => {
    setUserName(newNickname);
    onClose();
  };
  return (
    // 모달창 외부 클릭 시 모달 닫기
    <div className={styles.ModalOverlay} onClick={onClose}>
      {toConfirmModal ? (
        <div
          className={styles.ModalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={pigImg} alt="돼지" className={styles.ConfirmModalPigImg} />
          <span className={styles.ConfirmNewNickname}>{newNickname}</span>
          <span className={styles.ConfirmText}>
            위와 같이 닉네임이 <br />
            변경됩니다.
          </span>
          <div className={styles.ConfirmButtonContainer}>
            <button onClick={handleUserName}>
              <PrimaryButton size="sm">네</PrimaryButton>
            </button>
            <button onClick={onClose}>
              <SecondaryButton size="sm">아니요</SecondaryButton>
            </button>
          </div>
        </div>
      ) : (
        <div
          className={styles.ModalContent}
          onClick={(e) => e.stopPropagation()} // 모달창 내부 클릭 시 모달 닫히지 않게
        >
          <img src={pigImg} alt="돼지" className={styles.ModalPigImg} />
          <input
            className={styles.InputNewNickname}
            type="text"
            placeholder={userName}
            onChange={(e) => setNewNickname(e.target.value)}
          />
          {userName === newNickname ? (
            <button onClick={onClose}>
              <PrimaryButton size="lg">확인</PrimaryButton>
            </button>
          ) : (
            <button
              onClick={() => {
                setToConfirmModal(true);
              }}
            >
              <PrimaryButton size="lg">확인</PrimaryButton>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

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
      <button onClick={() => navigate(-1)}>
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
