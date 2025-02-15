// 나의 소비 시작하기 페이지 구현 예정
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./StartConsumption.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import MoneyInput from "../../components/MoneyInput/MoneyInput";
import { useNavigate } from "react-router-dom";
import SelectPeriod from "../../components/SelectPeriod/SelectPeriod";
import {
  getRecentTargetPrice,
  postConsStart,
} from "../../apis/consumptionStart";
import FinishStartCons from "./FinishStartCons";

const StartConsumption = () => {
  const pageName = "나의 소비 시작하기";
  const [isInputState, setIsInputState] = useState(false);
  const [isCompleteInput, setIsCompleteInput] = useState(false);
  const [startFormatDate, setStartFormatDate] = useState(null);
  const [endFormatDate, setEndFormatDate] = useState(null);
  const [targetAmount, setTargetAmount] = useState(0);
  const [recentTarget, setRecentTarget] = useState(0);
  const prize =
    ((new Date(endFormatDate) - new Date(startFormatDate)) /
      (1000 * 60 * 60 * 24)) *
    10;
  useEffect(() => {
    getRecentTargetPrice(setRecentTarget);
  }, []);
  const handleStartConsumption = () => {
    setIsCompleteInput(true);
    postConsStart(prize, startFormatDate, endFormatDate, targetAmount);
  };

  return (
    <div className={styles.wrapper}>
      <Header pageName={pageName} />
      {!isCompleteInput ? (
        <>
          <div className={styles.contentWrapper}>
            <div className={styles.descWrapper}>
              <h3>나의 소비 시작</h3>
              <p>소비 기간 동안 사용하실 금액을 입력해주세요 !</p>
              <p>
                {/*span 부분 데이터 받아오기 */}
                지난 회차에는 <span>{recentTarget.recentTargetPrice}원</span>을
                사용했어요 !
              </p>
            </div>
            <SelectPeriod
              setStartFormatDate={setStartFormatDate}
              setEndFormatDate={setEndFormatDate}
            />
            <p className={styles.selectPeriodInfo}>
              *내가 원하는 시작일/종료일을 직접 선택해 보세요!
            </p>
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
          <div
            className={styles.buttonWrapper}
            onClick={handleStartConsumption}
            style={{ pointerEvents: isInputState ? "auto" : "none" }}
          >
            <PrimaryButton type="button" size="xl" disabled={!isInputState}>
              완료
            </PrimaryButton>
          </div>
        </>
      ) : (
        <FinishStartCons
          prize={prize}
          startFormatDate={startFormatDate}
          endFormatDate={endFormatDate}
          targetAmount={targetAmount}
        />
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
