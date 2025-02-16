import React from "react";
import dustSunglass from "../../../../assets/CharacterImgs/dustSunglass.svg/";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import styles from "./ChallengeContentModal.module.css";

const ChallengeCreateModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.imgContainer}>
        <img src={dustSunglass} alt="선글라스 낀 먼지 캐릭터" />
      </div>
      <p className={styles.coinInfo}>{name}</p>
      <p className={styles.dateInfo}>챌린지 생성 완료!</p>
      <div
        onClick={() => {
          navigate("/collect");
        }}
      >
        <PrimaryButton type="button" size="lg">
          챌린지로 이동하기
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ChallengeCreateModal;
