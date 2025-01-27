import React from "react";
import styles from "./ChallengeCardModal.module.css";
import ChallengeCard from "../../../components/ChallengeCard/ChallengeCard";
import closeModal from "../../../assets/Navigation/closeModal.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import BottomBar from "../../../components/BottomBar/BottomBar";

const ChallengeCardModal = () => {
  const pageName = "모으기";
  const navigate = useNavigate();
  const location = useLocation();
  const challengeData = location.state?.challenge;
  return (
    <>
      <div className={styles.backWrapper}>
        <Header pageName={pageName} />
        <BottomBar pageName={pageName} />
      </div>
      <div className={styles.modalOverlay}>
        <div className={styles.modalWrapper}>
          <ChallengeCard allData={challengeData} />
          <button type="button" onClick={() => navigate(-1)}>
            <img src={closeModal} alt="챌린지 참여 모달창을 닫는 버튼" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChallengeCardModal;
