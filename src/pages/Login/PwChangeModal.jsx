import React, { useEffect } from "react";
import styles from "./PwChangeModal.module.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const PwChangeModal = ({ modalState, setModalState, setLoginStep, email }) => {
  const navigate = useNavigate();
  // 인증이 완료되었을 때 modalState를 2로 변경하는 로직.
  const confirmAuth = () => setModalState(2);

  useEffect(() => {
    if (modalState === 1) {
      // 3초 후 자동으로 꺼짐. 3초 이후 인증이 안되었을 때 재전송할 수 있도록
      // const timeout1 = setTimeout(() => setModalState(0), 2000);
      // 밑에 한 줄은 test용. 자동으로 2로 넘어가게 구현
      const timeout1 = setTimeout(() => setModalState(2), 2000);
      return () => {
        // clearTimeout(timeout1);
        clearTimeout(timeout1);
      };
    } else if (modalState === 2) {
      // modalState이 2가 되면 인증이 완료되었다는 뜻. joinprocess로 넘어감.
      const timeout2 = setTimeout(() => {
        setLoginStep(2);
        setModalState(0);
      }, 1000);
      return () => {
        clearTimeout(timeout2);
      };
    }
  }, [modalState, setModalState]);
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
            <span className={styles.Text}>인증이 완료되었어요!</span>
          </Modal>
        );
    }
  };
  return <>{renderJoinModal()}</>;
};

export default PwChangeModal;
