import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import dustSad from "../../../../assets/CharacterImgs/dustSad.svg";
import dustSunglass from "../../../../assets/CharacterImgs/dustSunglass.svg/";
import styles from "./ChallengeStopModal.module.css";
import PrimaryButton from "../../../../components/Button/PrimaryButton";

const ChallengeStopModal = () => {
  const location = useLocation();
  const { successDate, coin, name } = location.state;
  const [modalChange, setModalChange] = useState(0);
  console.log(location.state);

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.imgContainer}>
        <img
          src={modalChange === 2 ? dustSunglass : dustSad}
          alt="먼지 캐릭터가 우는 모습"
        />
      </div>
      <p className={styles.coinInfo}>
        {modalChange === 0 ? (
          <>
            지금 챌린지를 중단하면
            <br /> {coin}코인이 소멸 돼요!
          </>
        ) : (
          name
        )}
      </p>
      <p className={styles.dateInfo}>
        {modalChange === 0 && <>챌린지 성공까지 {successDate}일 남았어요!</>}
        {modalChange === 1 && (
          <>
            챌린지 성공!!
            <br />
            배팅한 코인의 2배를 드릴게요
          </>
        )}
        {modalChange === 2 && (
          <>
            챌린지 실패..
            <br />
            배팅한 {coin}코인을 잃게 돼요
          </>
        )}
      </p>
      {modalChange === 0 && (
        <div className={styles.btnWrapper}>
          <button
            type="button"
            className={styles.stopBtn}
            onClick={() => setModalChange(2)}
          >
            중단할래요
          </button>
          <button
            type="button"
            className={styles.continueBtn}
            onClick={() => setModalChange(1)}
          >
            계속할래요
          </button>
        </div>
      )}
      {modalChange !== 0 && (
        <PrimaryButton
          type="button"
          size="lg"
          children={modalChange === 1 ? `${coin * 2}코인 받기` : "확인"}
        />
      )}
    </div>
  );
};

export default ChallengeStopModal;
