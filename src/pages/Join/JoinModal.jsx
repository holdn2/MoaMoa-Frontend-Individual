import React, { useEffect } from "react";
import styles from "./JoinModal.module.css";
import Modal from "react-modal";

const JoinModal = ({ modalState, setModalState }) => {
  useEffect(() => {
    const timeout = setTimeout(() => setModalState(0), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [modalState]);
  const renderJoinModal = () => {
    switch (modalState) {
      case 0:
        break;
      case 1:
        return (
          <Modal
            isOpen={true}
            className={styles.AuthLinkContainer}
            overlayClassName={styles.Overlay}
          >
            <span className={styles.Text}>인증링크가 전송되었어요!</span>
          </Modal>
        );

      case 2:
        return (
          <Modal
            isOpen={true}
            className={styles.AuthLinkContainer}
            overlayClassName={styles.Overlay}
          >
            <span className={styles.Text}>인증이 아직 안되었어요!</span>
          </Modal>
        );
      case 3:
        return (
          <Modal
            isOpen={true}
            className={styles.AuthLinkContainer}
            overlayClassName={styles.Overlay}
          >
            <span className={styles.Text}>로그인에 실패했어요!</span>
          </Modal>
        );
      case 4:
        return (
          <Modal
            isOpen={true}
            className={styles.AuthLinkContainer}
            overlayClassName={styles.Overlay}
          >
            <span className={styles.Text}>친구 요청을 보냈어요!</span>
          </Modal>
        );
    }
  };
  return <>{renderJoinModal()}</>;
};

export default JoinModal;
