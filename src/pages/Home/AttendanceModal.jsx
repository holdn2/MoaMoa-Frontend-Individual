import React from "react";
import Modal from "react-modal";
import styles from "./AttendanceModal.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";

const AttendanceModal = ({
  isModalOpen,
  setIsModalOpen,
  modalState,
  setModalState,
}) => {
  const renderAttendanceModal = () => {
    switch (modalState) {
      case 1:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.AttendanceContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src="../src/assets/PigSub/pigHappy.svg"
              alt="행복 돼지"
              className={styles.HappyPigImg}
            />
            <div className={styles.AttendanceContent}>
              <span className={styles.AttendanceTitle}>오랜만에 오셨군요!</span>
              <span className={styles.AttendanceText}>
                앞으로도 계속해서 같이 모아봐요!
              </span>
              <button onClick={() => setModalState(2)}>
                <PrimaryButton size="lg">200코인 받기</PrimaryButton>
              </button>
            </div>
          </Modal>
        );
      case 2:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.AttendanceContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src="../src/assets/PigSub/pigHappy.svg"
              alt="행복 돼지"
              className={styles.HappyPigImg}
            />
            <div className={styles.LevelUpContent}>
              <span className={styles.AttendanceTitle}>Level UP !</span>
              <span className={styles.AttendanceText}>
                축하해요
                <br />
                철돼지로 레벨이 올랐어요 !!
              </span>
              <button onClick={() => setIsModalOpen(false)}>
                <PrimaryButton size="lg">확인</PrimaryButton>
              </button>
            </div>
          </Modal>
        );
    }
  };
  return <div>{renderAttendanceModal()}</div>;
};

export default AttendanceModal;
