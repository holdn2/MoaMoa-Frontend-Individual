// react-modal 라이브러리 사용해서 로그아웃, 회원 탈퇴 모달창 구현
import React from "react";
import styles from "./SettingModal.module.css";
import Modal from "react-modal";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";

const SettingModal = ({
  isModalOpen,
  setIsModalOpen,
  modalState,
  setModalState,
}) => {
  const renderSettingModal = () => {
    if (!isModalOpen) return null; // 모달이 닫혀 있으면 렌더링하지 않음
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
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                <PrimaryButton size="sm">네</PrimaryButton>
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                <SecondaryButton size="sm">아니요</SecondaryButton>
              </button>
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
              src="../src/assets/PigSub/pigSad.svg"
              alt="슬픈 돼지"
              className={styles.SadPigImg}
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
                <button
                  onClick={() => {
                    setModalState(3);
                  }}
                >
                  <PrimaryButton size="sm">계속할래요</PrimaryButton>
                </button>
                <button
                  onClick={() => {
                    setModalState(4);
                  }}
                >
                  <SecondaryButton size="sm">중단할래요</SecondaryButton>
                </button>
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
            <img
              src="../src/assets/PigSub/pigSad.svg"
              alt="슬픈 돼지"
              className={styles.SadPigImg}
            />
            <div className={styles.UnsubChoiceContent}>
              <span className={styles.ConfirmText}>그동안 즐거웠어요 !</span>
              <span className={styles.ConfirmInfoText}>
                앞으로의 절약생활도 응원할게요!
              </span>
              <button onClick={() => setIsModalOpen(false)}>
                <PrimaryButton size="unsubscribeConfirm">확인</PrimaryButton>
              </button>
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
              src="../src/assets/PigSub/pigSad.svg"
              alt="슬픈 돼지"
              className={styles.SadPigImg}
            />
            <div className={styles.UnsubChoiceContent}>
              <span className={styles.ConfirmText}>좋은 결정이예요!</span>
              <span className={styles.ConfirmInfoText}>
                앞으로도 함께 절약해봐요!
              </span>
              <button onClick={() => setIsModalOpen(false)}>
                <PrimaryButton size="unsubscribeConfirm">확인</PrimaryButton>
              </button>
            </div>
          </Modal>
        );
    }
  };
  return <div>{renderSettingModal()}</div>;
};

export default SettingModal;
