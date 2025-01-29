import React, { useState } from "react";
import styles from "./AcceptChallengeModal.module.css";
import Modal from "react-modal";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const AcceptChallengeModal = ({
  isModalOpen,
  setIsModalOpen,
  challengeData,
  setChallengeData,
}) => {
  const [modalStage, setModalStage] = useState(1);

  const acceptChallenge = () => {
    console.log("챌린지 수락!");
    setChallengeData((prevData) => ({
      ...prevData,
      isAccept: true,
    }));
    setModalStage(2);
  };

  const renderAcceptModal = () => {
    switch (modalStage) {
      case 1:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.AcceptModalWrapper}
            overlayClassName={styles.Overlay}
          >
            <div className={styles.ContentContainer}>
              <div className={styles.AllorFriend}>
                <span
                  style={{
                    color: "#00BEFC",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  친구
                </span>
              </div>
              <div className={styles.ChallengeInfoContainer}>
                <span
                  style={{
                    color: "#2b2b2b",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  {challengeInfo.title}
                </span>
                <span className={styles.TextContainer}>
                  {challengeInfo.text}
                </span>
                <div className={styles.DateCoinWrapper}>
                  <span>{challengeInfo.date}</span> <span>|</span>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "-4px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "18px", height: "18px", padding: "3px" }}
                      src="../src/assets/Content/coin3.svg"
                      alt="코인"
                    />
                    <span style={{ fontSize: "14px" }}>
                      {challengeInfo.coin}
                    </span>
                  </div>
                </div>
              </div>
              <span
                style={{
                  color: "#5e5e5e",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "3px",
                }}
              >
                함께하는 친구들 : 절약왕 외 {challengeInfo.with - 1}명
              </span>
              <div style={{ marginTop: "3px" }} onClick={acceptChallenge}>
                <PrimaryButton size="lg">챌린지 수락하기</PrimaryButton>
              </div>
            </div>
            <div
              className={styles.CloseModal}
              onClick={() => setIsModalOpen(false)}
            >
              <img
                src="../src/assets/Navigation/closeBig.svg"
                alt="모달창 닫기"
              />
            </div>
          </Modal>
        );
      case 2:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.CompleteModalWrapper}
            overlayClassName={styles.Overlay}
          >
            <img
              src="../src/assets/CharacterImgs/dustCrownMoney.svg"
              alt="왕관 먼지"
              style={{ width: "112px" }}
            />
            <span
              style={{ color: "#2b2b2b", fontSize: "20px", fontWeight: "700" }}
            >
              {challengeInfo.title}
            </span>
            <span
              style={{ color: "#5e5e5e", fontSize: "16px", fontWeight: "600" }}
            >
              챌린지 참여 완료!
            </span>
            <div
              onClick={() => {
                setIsModalOpen(false);
                setModalStage(0);
              }}
            >
              <PrimaryButton size="lg">챌린지로 이동하기</PrimaryButton>
            </div>
          </Modal>
        );
    }
  };
  return <div>{renderAcceptModal()}</div>;
};

export default AcceptChallengeModal;

const challengeInfo = {
  title: "1주일 10만원으로 살아남기",
  text: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
  date: "2024.11.15 ~ 11.22",
  coin: 300,
  with: 4,
};
