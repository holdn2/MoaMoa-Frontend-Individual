import React from "react";
import { deleteChallenge } from "../../../../apis/challenge/deleteChallenge";
import { useLocation, useNavigate } from "react-router-dom";
import dustSad from "../../../../assets/CharacterImgs/dustSad.svg";
import styles from "./ChallengeContentModal.module.css";

const ChallengeStopModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { successDate, challengeId, coin, name } = location.state;
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.imgContainer}>
        <img src={dustSad} alt="울고 있는 먼지 캐릭터" />
      </div>
      <p className={styles.coinInfo}>
        지금 챌린지를 중단하면
        <br /> {coin}코인이 소멸 돼요!
      </p>
      <p className={styles.dateInfo}>
        챌린지 성공까지 {successDate}일 남았어요!
      </p>
      <div className={styles.btnWrapper}>
        <button
          type="button"
          className={styles.stopBtn}
          onClick={() => {
            console.log("삭제할 챌린지 아이디 : ", challengeId);
            deleteChallenge(challengeId);
            navigate("/challengemodal/fail", {
              state: { coin: coin, name: name },
            });
          }}
        >
          중단할래요
        </button>
        <button
          type="button"
          className={styles.continueBtn}
          onClick={() => navigate(-1)}
        >
          계속할래요
        </button>
      </div>
    </div>
  );
};

export default ChallengeStopModal;
