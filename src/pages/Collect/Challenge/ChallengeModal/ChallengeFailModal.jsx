import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import dustSad from "../../../../assets/CharacterImgs/dustSad.svg";
import styles from "./ChallengeContentModal.module.css";

const ChallengeFailModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, coin } = location.state;
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.imgContainer}>
        <img src={dustSad} alt="울고 있는 먼지 캐릭터" />
      </div>
      <p className={styles.coinInfo}>{name}</p>
      <p className={styles.dateInfo}>
        챌린지 실패..
        <br />
        배팅한 {coin}코인을 잃게 돼요
      </p>
      <div onClick={() => navigate("/collect")}>
        <PrimaryButton type="button" size="lg">
          확인
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ChallengeFailModal;
