// 나의 소비 시작하기 페이지 구현 예정
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./StartConsumption.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import MoneyInput from "../../components/MoneyInput/MoneyInput";
import { useNavigate } from "react-router-dom";
import dustSunglass from "../../assets/CharacterImgs/dustSunglass.svg";
import SelectPeriod from "../../components/SelectPeriod/SelectPeriod";

const StartConsumption = () => {
  const pageName = "나의 소비 시작하기";
  const [modalOpen, setModalOpen] = useState(false);
  const [isInputState, setIsInputState] = useState(false);
  const navigate = useNavigate();
  const [isCompleteInput, setIsCompleteInput] = useState(false);
  // 목표 금액
  const [targetAmount, setTargetAmount] = useState(0);

  const handleStartComsumption = () => {
    // 입력한 데이터 전송 로직 추가 예정
    setIsCompleteInput(true);
    console.log(targetAmount);
  };

  return (
    <div className={styles.wrapper}>
      <Header pageName={pageName} />
      {!isCompleteInput ? (
        <>
          <div className={styles.contentWrapper}>
            <div className={styles.descWrapper}>
              <h3>나의 소비 시작</h3>
              <p>일주일동안 사용하실 금액을 입력해주세요 !</p>
              <p>
                {/*span 부분 데이터 받아오기 */}
                지난주에는 <span>10만원</span>을 사용했어요 !
              </p>
            </div>
            <SelectPeriod />
            <div className={styles.inputWrapper}>
              <p>목표 금액</p>
              <MoneyInput
                children="주소비 한도 금액을 입력해주세요"
                isInputState={isInputState}
                setIsInputState={setIsInputState}
                setValue={setTargetAmount}
              />
            </div>
          </div>
          {modalOpen && <SelectPeriod setModalOpen={setModalOpen} />}
          <div
            className={styles.buttonWrapper}
            onClick={handleStartComsumption}
            style={{ pointerEvents: isInputState ? "auto" : "none" }}
          >
            <PrimaryButton type="button" size="xl" disabled={!isInputState}>
              완료
            </PrimaryButton>
          </div>
        </>
      ) : (
        <>
          <div className={styles.contentWrapper}>
            <div className={styles.descWrapper}>
              <h3>나의 소비 설정 완료 !</h3>
              <p>
                나의 소비 설정이 완료되었어요
                <br />
                이번에도 모아모아와 함께 열심히 절약해봐요 !!
              </p>
            </div>
            <img
              src={dustSunglass}
              alt="먼지 이미지"
              style={{ marginTop: "40px" }}
            />
            <div className={styles.GoalInfoContainer}>
              {data.map((item) => (
                <div key={item.id} className={styles.EachInfoContainer}>
                  <span className={styles.InfoTitle}>{item.title}</span>
                  <span className={styles.InfoText}>{item.content}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={styles.buttonWrapper}
            onClick={() => navigate("/")}
            style={{ pointerEvents: isInputState ? "auto" : "none" }}
          >
            <PrimaryButton type="button" size="xl" disabled={!isInputState}>
              나의 소비 시작하기
            </PrimaryButton>
          </div>
        </>
      )}
    </div>
  );
};

export default StartConsumption;

const data = [
  {
    id: 1,
    title: "난이도",
    content: "상",
  },
  {
    id: 2,
    title: "획득 가능 코인",
    content: "50코인",
  },
  {
    id: 3,
    title: "설정 기간",
    content: "24.11.24(월)~11.31(일)",
  },
  {
    id: 4,
    title: "설정 금액",
    content: "주 70,000원",
  },
];
