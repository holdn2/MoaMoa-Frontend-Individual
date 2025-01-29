import React, { useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import dustSad from "../../../../assets/CharacterImgs/dustSad.svg";
import dustSunglass from "../../../../assets/CharacterImgs/dustSunglass.svg/";
import dustCrownMoney from "../../../../assets/CharacterImgs/dustCrownMoney.svg";
import styles from "./ChallengeStopModal.module.css";
import PrimaryButton from "../../../../components/Button/PrimaryButton";

const ChallengeModalContent = () => {
  const location = useLocation();
  const { successDate, coin, name, type } = location.state;
  const { stage, setStage } = useOutletContext() || {};
  useEffect(() => {
    if (type) {
      setStage(type);
    }
  }, [type, setStage]); // ✅ 최신 상태 유지 + 변경 감지
  const ModalType = {
    stop: {
      img: dustSad,
      desc: `지금 챌린지를 중단하면\n ${coin}코인이 소멸 돼요!`,
      subDesc: `챌린지 성공까지 ${successDate}일 남았어요!`,
      btnText: "중단할래요",
      secondBtnText: "계속할래요",
    },
    success: {
      img: dustSunglass,
      desc: name,
      subDesc: "챌린지 성공!! \n배팅한 코인의 2배를 드릴게요",
      btnText: `${coin * 2}코인 받기`,
    },
    fail: {
      img: dustSad,
      desc: name,
      subDesc: `챌린지 실패..\n배팅한 ${coin}코인을 잃게 돼요`,
      btnText: "확인",
    },
    join: {
      img: dustCrownMoney,
      desc: name,
      subDesc: "챌린지참여 완료!",
      btnText: "챌린지로 이동하기",
    },
  };

  const { img, desc, subDesc, btnText, secondBtnText } = ModalType[stage] || {};

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.imgContainer}>
        <img src={img} alt="먼지 캐릭터" />
      </div>
      <p className={styles.coinInfo}>{desc}</p>
      <p className={styles.dateInfo}>{subDesc}</p>
      {stage === "stop" && (
        <div className={styles.btnWrapper}>
          <button
            type="button"
            className={styles.stopBtn}
            onClick={() => setStage("fail")}
          >
            {btnText}
          </button>
          <button
            type="button"
            className={styles.continueBtn}
            onClick={() => setStage("success")}
          >
            {secondBtnText}
          </button>
        </div>
      )}
      {stage !== "stop" && (
        <PrimaryButton type="button" size="lg" children={btnText} />
      )}
    </div>
  );
};

export default ChallengeModalContent;
