// react-modal 라이브러리 사용해서 로그아웃, 회원 탈퇴 모달창 구현
import React from "react";
import styles from "./SettingModal.module.css";
import Modal from "react-modal";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import dustSweat from "../../assets/CharacterImgs/dustSweat.svg";
import dustSad from "../../assets/CharacterImgs/dustSad.svg";
import dustHappy from "../../assets/CharacterImgs/dustHappy.svg";

import { postUserDelete } from "../../apis/setting";

import { useNavigate } from "react-router-dom";

const SettingModal = ({
  isModalOpen,
  setIsModalOpen,
  modalState,
  setModalState,
}) => {
  const navigate = useNavigate();
  const renderSettingModal = () => {
    const navigate = useNavigate();
    switch (modalState) {
      case 1:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.LogoutContent}
            overlayClassName={styles.Overlay}
          >
            <span className={styles.LogoutText}>정말 로그아웃 하시나요?</span>
            <div className={styles.ConfirmContainer}>
              <div
                onClick={() => {
                  localStorage.removeItem("jwt"); // JWT 토큰 삭제
                  console.log("✅ 로그아웃: JWT 토큰 삭제됨");
                  setIsModalOpen(false);
                  navigate("/");
                }}
              >
                <PrimaryButton size="sm">네</PrimaryButton>
              </div>
              <div
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                <SecondaryButton size="sm">아니요</SecondaryButton>
              </div>
            </div>
          </Modal>
        );
      case 2:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.UnsubscribeContentContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src={dustSweat}
              alt="땀나는 먼지"
              className={styles.SweatDustImg}
            />
            <div className={styles.UnsubscribeContent}>
              <span className={styles.ConfirmText}>정말 탈퇴하실 건가요?</span>
              <span className={styles.ConfirmInfoText}>
                탈퇴하시게 되면
                <br />
                지금까지 열심히 모은
                <br />
                코인이 영구적으로 소멸돼요 !
              </span>
              <div className={styles.ConfirmContainer}>
                <div
                  onClick={() => {
                    setModalState(4);
                  }}
                >
                  <PrimaryButton size="sm">계속할래요</PrimaryButton>
                </div>
                <div
                  onClick={() => {
                    localStorage.removeItem("jwt"); // JWT 토큰 삭제
                    console.log("✅ 로그아웃: JWT 토큰 삭제됨");
                    postUserDelete();
                    setModalState(3);
                  }}
                >
                  <SecondaryButton size="sm">중단할래요</SecondaryButton>
                </div>
              </div>
            </div>
          </Modal>
        );

      case 3:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.UnsubChoiceContentContainer}
            overlayClassName={styles.Overlay}
          >
            <img src={dustSad} alt="슬픈 먼지" className={styles.SadDustImg} />
            <div className={styles.UnsubChoiceContent}>
              <span className={styles.ConfirmText}>그동안 즐거웠어요 !</span>
              <span className={styles.ConfirmInfoText}>
                앞으로의 절약생활도 응원할게요!
              </span>
              <div
                onClick={() => {
                  setIsModalOpen(false);
                  navigate("/");
                }}
              >
                <PrimaryButton size="unsubscribeConfirm">확인</PrimaryButton>
              </div>
            </div>
          </Modal>
        );

      case 4:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.UnsubChoiceContentContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src={dustHappy}
              alt="행복한 먼지"
              className={styles.HappyDustImg}
            />
            <div className={styles.UnsubChoiceContent}>
              <span className={styles.ConfirmText}>좋은 결정이예요!</span>
              <span className={styles.ConfirmInfoText}>
                앞으로도 함께 절약해봐요!
              </span>
              <div onClick={() => setIsModalOpen(false)}>
                <PrimaryButton size="unsubscribeConfirm">확인</PrimaryButton>
              </div>
            </div>
          </Modal>
        );
    }
  };
  return <div>{renderSettingModal()}</div>;
};

export default SettingModal;
