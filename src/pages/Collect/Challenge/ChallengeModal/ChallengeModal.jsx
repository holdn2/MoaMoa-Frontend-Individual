import React from "react";
import styles from "./ChallengeModal.module.css";
import { Outlet } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import BottomBar from "../../../../components/BottomBar/BottomBar";

const ChallengeModal = () => {
  const pageName = "모으기";
  return (
    <>
      <div className={styles.backWrapper}>
        <Header pageName={pageName} collectBack={true} />
        <BottomBar pageName={pageName} />
      </div>
      <div className={styles.modalOverlay}>
        <div className={styles.modalWrapper}>
          <Outlet /> {/*자식 컴포넌트가 렌더링될 위치*/}
        </div>
      </div>
    </>
  );
};

export default ChallengeModal;
