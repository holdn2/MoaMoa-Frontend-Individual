import React from "react";
import { joinChallenge } from "../../../../apis/challenge/joinChallenge";
import { Link, useLocation, useNavigate } from "react-router-dom";
import dustCrownMoney from "../../../../assets/CharacterImgs/dustCrownMoney.svg";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import styles from "./ChallengeContentModal.module.css";

const ChallengeJoinModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { challengeId, name, selectedChallenge } = location.state;
  console.log(name, challengeId);
  console.log(location.state); // 확인용 콘솔 출력

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.imgContainer}>
        <img src={dustCrownMoney} alt="왕관 쓴 먼지 캐릭터" />
      </div>
      <p className={styles.coinInfo}>{name}</p>
      <p className={styles.dateInfo}>챌린지 참여 완료!</p>
      <div
        onClick={() => {
          console.log(challengeId, " 참여하기!");
          joinChallenge(challengeId);
        }}
      >
        <PrimaryButton
          type="button"
          size="lg"
          onClick={() =>
            navigate("/challenge/detail", {
              state: { selectedChallenge: selectedChallenge },
            })
          }
        >
          챌린지로 이동하기
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ChallengeJoinModal;
