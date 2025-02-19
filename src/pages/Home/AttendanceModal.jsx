import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import styles from "./AttendanceModal.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import dustHappy from "../../assets/CharacterImgs/dustHappy.svg";
import dustSunglass from "../../assets/CharacterImgs/dustSunglass.svg";
import dustSad from "../../assets/CharacterImgs/dustSad.svg";
import {
  completedChallengeClame,
  completeJoinChallenge,
} from "../../apis/challenge/joinChallenge";
import { getLevelHome } from "../../apis/home";

const AttendanceModal = ({
  isModalOpen,
  setIsModalOpen,
  modalState,
  setModalState,
}) => {
  const [currentCoin, setCurrentCoin] = useState(300);
  const [level, setLevel] = useState(1);
  const prevLevel = useRef(1);

  const [completeChallenge, setCompleteChallenge] = useState([]);
  const successChallenge = completeChallenge.filter(
    (challenge) => challenge.goalAchieved === true
  );
  const failChallenge = completeChallenge.filter(
    (challenge) => challenge.goalAchieved === false
  );

  // 200코인 받기 클릭 시 현재 코인 update
  const addCoin = () => {
    setCurrentCoin((prev) => prev + 200);
  };

  useEffect(() => {
    completeJoinChallenge(setCompleteChallenge);
    getLevelHome(setLevel);
  }, []);

  // 코인 변경 시 실행. 레벨업 가능 코인 수 도달 시 레벨업 아니면 그냥 닫기
  useEffect(() => {
    console.log(currentCoin);
    if (level > prevLevel.current) {
      prevLevel.current = newLevel;
      setModalState(2);
    }
    if (successChallenge?.length > 0) {
      setModalState(3);
    }
    if (failChallenge?.length > 0) {
      setModalState(4);
    } else {
      setIsModalOpen(false);
    }
  }, [currentCoin]);

  const renderAttendanceModal = () => {
    switch (modalState) {
      case 1:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.AttendanceContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src={dustHappy}
              alt="행복 먼지"
              className={styles.HappyDustImg}
            />
            <div className={styles.AttendanceContent}>
              <span className={styles.AttendanceTitle}>오랜만에 오셨군요!</span>
              <span className={styles.AttendanceText}>
                앞으로도 계속해서 같이 모아봐요!
              </span>
              <div onClick={addCoin}>
                <PrimaryButton size="lg">200코인 받기</PrimaryButton>
              </div>
            </div>
          </Modal>
        );
      case 2:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.AttendanceContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src={dustHappy}
              alt="행복 먼지"
              className={styles.HappyDustImg}
            />
            <div className={styles.AttendanceContent}>
              <span className={styles.AttendanceTitle}>Level UP !</span>
              <span className={styles.AttendanceText}>
                Lv.2로 레벨이 올랐어요 !!
              </span>
              <div
                onClick={() =>
                  completeChallenge.length > 0
                    ? setModalState(3)
                    : setIsModalOpen(false)
                }
              >
                <PrimaryButton size="lg">확인</PrimaryButton>
              </div>
            </div>
          </Modal>
        );
      case 3:
        return (
          <>
            {successChallenge.map((challenge) => (
              <Modal
                isOpen={isModalOpen}
                className={styles.AttendanceContainer}
                overlayClassName={styles.Overlay}
                key={challenge.challengeId}
              >
                <img
                  src={dustSunglass}
                  alt="행복 먼지"
                  className={styles.HappyDustImg}
                />
                <div className={styles.AttendanceContent}>
                  <span className={styles.AttendanceTitle}>
                    {challenge.title}
                  </span>
                  <span className={styles.AttendanceText}>
                    챌린지 성공!! <br />
                    배팅한 코인의 2배를 드릴게요
                  </span>
                  <div
                    onClick={() => {
                      setIsModalOpen(false);
                      completedChallengeClame(challenge.challengeId);
                    }}
                  >
                    <PrimaryButton size="lg">
                      {challenge.battleCoin * 2}코인 받기
                    </PrimaryButton>
                  </div>
                </div>
              </Modal>
            ))}
          </>
        );
      case 4:
        return (
          <>
            {failChallenge.map((challenge) => (
              <Modal
                isOpen={isModalOpen}
                className={styles.AttendanceContainer}
                overlayClassName={styles.Overlay}
                key={challenge.challengeId}
              >
                <img
                  src={dustSad}
                  alt="울고 있는 먼지 캐릭터"
                  className={styles.HappyDustImg}
                />
                <div className={styles.AttendanceContent}>
                  <span className={styles.AttendanceTitle}>
                    {challenge.title}
                  </span>
                  <span className={styles.AttendanceText}>
                    챌린지 실패..
                    <br />
                    배팅한 {challenge.battleCoin}코인을 잃게 돼요
                  </span>
                  <div
                    onClick={() => {
                      setIsModalOpen(false);
                      completedChallengeClame(challenge.challengeId);
                    }}
                  >
                    <PrimaryButton type="button" size="lg">
                      확인
                    </PrimaryButton>
                  </div>
                </div>
              </Modal>
            ))}
          </>
        );
    }
  };
  return <div>{renderAttendanceModal()}</div>;
};

export default AttendanceModal;
