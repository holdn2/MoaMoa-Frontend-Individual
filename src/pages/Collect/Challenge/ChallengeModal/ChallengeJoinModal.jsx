import React from "react";
import { joinChallenge } from "../../../../apis/challenge/joinChallenge";
import { useLocation, useNavigate } from "react-router-dom";
import dustCrownMoney from "../../../../assets/CharacterImgs/dustCrownMoney.svg";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import styles from "./ChallengeContentModal.module.css";

const ChallengeJoinModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, challengeId } = location.state;
  return (
    <div>
      <div className={styles.imgContainer}>
        <img src={dustCrownMoney} alt="왕관 쓴 먼지 캐릭터" />
      </div>
      <p className={styles.coinInfo}>{name}</p>
      <p className={styles.dateInfo}>챌린지 참여 완료!</p>
      <div
        onClick={() => {
          console.log(challengeId, " 참여하기!");
          joinChallenge(challengeId);
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

export default ChallengeJoinModal;
