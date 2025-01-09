// 과소비 진단 페이지 구현
import React, { useEffect, useState } from "react";
import styles from "./Diagnosis.module.css";
import Header from "../../components/Header/Header";
import PrimaryButton from "../../components/Button/PrimaryButton";
import MoneyInput from "../../components/MoneyInput/MoneyInput";
import SelectButtonContainer from "./SelectButtonContainer";
import { useNavigate } from "react-router-dom";

const Diagnosis = () => {
  const pageName = "과소비 진단하기";
  const navigate = useNavigate();
  // 각 단계별 상태(0~9)
  const [diagnosisStage, setDiagnosisStage] = useState(0);
  // 단계별 입력할 것이 있을 때 입력했는지 여부
  const [isInputState, setIsInputState] = useState(false);
  // 단계마다 MoneyInput의 text 값을 reset하기 위한 것.
  const [resetInput, setResetInput] = useState(0);
  // MoneyInput의 text값을 reset해야하는 부분에 필요한 함수
  const handleNextStep = () => {
    setIsInputState(false);
    setResetInput((prev) => prev + 1);
    setDiagnosisStage((prev) => prev + 1);
  };

  // 닉네임
  const userName = "모아모아 030";
  // 계산결과 과소비하고 있는지
  const [isOverconsumption, setIsOverconsumption] = useState(false);
  // user가 입력한 내용을 바탕으로 과소비 진단 시 필요한 값들
  const [incomeCost, setIncomeCost] = useState(0); // 소득액
  const [consumeCost, setConsumeCost] = useState(0); // 소비액
  const [savingCost, setSavingCost] = useState(0); // 저축액
  // 연령대 별 버튼 선택 여부 및 어떤 연령 선택했는지
  const [selectedAge, setSelectedAge] = useState(0);
  // 평균 소비, 적정 소비 알려주기
  const [averageConsumption, setAverageConsumption] = useState(0);
  const [goodConsumption, setGoodConsumption] = useState(0);

  // 5단계에서 2초 후 6단계 혹은 7단계로 자동 전환
  useEffect(() => {
    if (diagnosisStage === 5) {
      const timer = setTimeout(() => {
        const calculateResult = (incomeCost - savingCost) / incomeCost;
        console.log(
          `소득액: ${incomeCost} 소비액: ${consumeCost} 저축액: ${savingCost} 연령대: ${selectedAge} 과소비 지수: ${calculateResult}`
        );
        switch (selectedAge) {
          case 1:
            calculateResult >= 0.5
              ? (setGoodConsumption(70000), setDiagnosisStage(6))
              : (setAverageConsumption(120000), setDiagnosisStage(7));
            break;
          case 2:
            calculateResult >= 0.7
              ? (setGoodConsumption(100000), setDiagnosisStage(6))
              : (setAverageConsumption(150000), setDiagnosisStage(7));
            break;

          case 3:
            calculateResult >= 0.8
              ? (setGoodConsumption(120000), setDiagnosisStage(6))
              : (setAverageConsumption(170000), setDiagnosisStage(7));
            break;

          case 4:
            calculateResult >= 0.9
              ? (setGoodConsumption(150000), setDiagnosisStage(6))
              : (setAverageConsumption(200000), setDiagnosisStage(7));
            break;
        }

        if (isOverconsumption) {
        } else {
        }
      }, 2000); // 2초 후 실행

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }
  }, [diagnosisStage]);

  const renderDiagnosisPage = () => {
    switch (diagnosisStage) {
      case 0:
        return (
          <div className={styles.MainArea}>
            <div className={styles.StartContentContainer}>
              <div className={styles.TextContainer}>
                <span className={styles.TextBold}>
                  나, 지금
                  <br />
                  과소비 하고 있나?
                </span>
                <span className={styles.TextContent}>
                  소득 수준과 소비액을 비교해
                  <br />
                  간단하게 과소비 여부를
                  <br />
                  진단해 드려요!
                </span>
              </div>
              <img
                className={styles.DustImg}
                src="../src/assets/CharacterImgs/dustQuestion.svg"
                alt="캐릭터 물음표"
              />
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={() => setDiagnosisStage(1)}
            >
              <PrimaryButton>시작하기</PrimaryButton>
            </div>
          </div>
        );
      case 1:
        return (
          <div className={styles.MainArea}>
            <div className={styles.StartContentContainer}>
              <img
                className={styles.StageImg}
                src="../src/assets/StageExpression/firstStage.svg"
                alt="첫 번째 단계"
              />
              <div className={styles.TextContainer}>
                <span className={styles.TextBold}>
                  월 소득 금액을
                  <br />
                  입력해주세요
                </span>
                <span className={styles.TextContent}>
                  현재 소득이 없는 분들은
                  <br />
                  희망하는 최대 소비 금액을
                  <br />
                  입력해주세요 !
                </span>
              </div>
              <div className={styles.InputWrapper}>
                <MoneyInput
                  children="월 소득 입력하기"
                  isInputState={isInputState}
                  setIsInputState={setIsInputState}
                  setValue={setIncomeCost}
                  reset={resetInput}
                />
              </div>
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={handleNextStep}
              style={{ pointerEvents: isInputState ? "auto" : "none" }}
            >
              <PrimaryButton disabled={!isInputState}>다음</PrimaryButton>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.MainArea}>
            <div className={styles.StartContentContainer}>
              <img
                className={styles.StageImg}
                src="../src/assets/StageExpression/secondStage.svg"
                alt="두 번째 단계"
              />
              <div className={styles.TextContainer}>
                <span className={styles.TextBold}>
                  지난 달 소비액을
                  <br />
                  입력해주세요
                </span>
              </div>
              <div className={styles.InputWrapper}>
                <MoneyInput
                  children="지난 달 소비액 입력하기"
                  isInputState={isInputState}
                  setIsInputState={setIsInputState}
                  setValue={setConsumeCost}
                  reset={resetInput}
                />
              </div>
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={handleNextStep}
              style={{ pointerEvents: isInputState ? "auto" : "none" }}
            >
              <PrimaryButton disabled={!isInputState}>다음</PrimaryButton>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.MainArea}>
            <div className={styles.StartContentContainer}>
              <img
                className={styles.StageImg}
                src="../src/assets/StageExpression/thirdStage.svg"
                alt="세 번째 단계"
              />
              <div className={styles.TextContainer}>
                <span className={styles.TextBold}>
                  월 평균 저축액을
                  <br />
                  입력해주세요
                </span>
              </div>
              <div className={styles.InputWrapper}>
                <MoneyInput
                  children="월 평균 저축액 입력하기"
                  isInputState={isInputState}
                  setIsInputState={setIsInputState}
                  setValue={setSavingCost}
                  reset={resetInput}
                />
              </div>
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={() => {
                setDiagnosisStage(4);
              }}
              style={{ pointerEvents: isInputState ? "auto" : "none" }}
            >
              <PrimaryButton disabled={!isInputState}>다음</PrimaryButton>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={styles.MainArea}>
            <div className={styles.StartContentContainer}>
              <img
                className={styles.StageImg}
                src="../src/assets/StageExpression/forthStage.svg"
                alt="네 번째 단계"
              />
              <div className={styles.TextContainer}>
                <span className={styles.TextBold}>
                  연령대를
                  <br />
                  선택해주세요
                </span>
              </div>
            </div>
            <div className={styles.SelectButtonContainer}>
              <SelectButtonContainer
                selectedAge={selectedAge}
                setSelectedAge={setSelectedAge}
              />
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={() => {
                setDiagnosisStage(5);
              }}
              style={{ pointerEvents: selectedAge ? "auto" : "none" }}
            >
              <PrimaryButton disabled={!selectedAge}>완료하기</PrimaryButton>
            </div>
          </div>
        );
      case 5:
        return (
          <div className={styles.MainArea}>
            <div className={styles.StartContentContainer}>
              <img
                className={styles.StageImg}
                src="../src/assets/StageExpression/completeStage.svg"
                alt="네 번째 단계"
              />
              <div className={styles.TextContainer}>
                <span className={styles.TextBold}>
                  {userName}님의
                  <br />
                  과소비를
                  <br />
                  진단하고 있어요 !
                </span>
              </div>
              <img
                className={styles.TimeCircle}
                src="../src/assets/StageExpression/timeCircle.svg"
                alt="시간 돌아가는 중"
              />
            </div>
          </div>
        );
      case 6:
        return (
          <div className={styles.MainArea}>
            <div className={styles.ResultDiagnoseContainer}>
              <div className={styles.ResultContentContainer}>
                <span className={styles.ResultTitle}>진단 완료 !</span>
                <img
                  src="../src/assets/CharacterImgs/dustSad.svg"
                  alt="슬픈 먼지"
                />
                <span className={styles.ResultText}>
                  모아모아 030님은
                  <br />
                  과소비 중이에요 😥
                </span>
              </div>
              <div
                className={styles.ButtonContainer}
                onClick={() => setDiagnosisStage(8)}
              >
                <PrimaryButton>다음</PrimaryButton>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className={styles.MainArea}>
            <div className={styles.ResultDiagnoseContainer}>
              <div className={styles.ResultContentContainer}>
                <span className={styles.ResultTitle}>진단 완료 !</span>
                <img
                  src="../src/assets/CharacterImgs/dustSunglass.svg"
                  alt="행복한 먼지"
                />
                <span className={styles.ResultText}>
                  모아모아 030님은
                  <br />
                  적정소비에 해당돼요 !
                </span>
              </div>
              <div
                className={styles.ButtonContainer}
                onClick={() => setDiagnosisStage(9)}
              >
                <PrimaryButton>다음</PrimaryButton>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className={styles.MainArea}>
            <div className={styles.StartContentContainer}>
              <div className={styles.TextContainer}>
                <span className={styles.TextBold}>
                  {userName}님의
                  <br />
                  적정 소비 금액은?
                </span>
              </div>
            </div>
            <div className={styles.AverageContainer}>
              <span className={styles.CostContainer}>
                주 {goodConsumption.toLocaleString()}
              </span>
              <span className={styles.WonText}>원</span>
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={() => navigate(-1)}
            >
              <PrimaryButton>확인</PrimaryButton>
            </div>
          </div>
        );
      case 9:
        return (
          <div className={styles.MainArea}>
            <div className={styles.StartContentContainer}>
              <div className={styles.TextContainer}>
                <span className={styles.TextBold}>
                  {userName}님의
                  <br />
                  또래 평균 소비액은?
                </span>
              </div>
            </div>
            <div className={styles.AverageContainer}>
              <span className={styles.CostContainer}>
                주 {averageConsumption.toLocaleString()}
              </span>
              <span className={styles.WonText}>원</span>
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={() => navigate(-1)}
            >
              <PrimaryButton>확인</PrimaryButton>
            </div>
          </div>
        );
    }
  };
  return (
    <div className={styles.DiagnosisPageContainer}>
      <Header
        pageName={pageName}
        diagnosisStage={diagnosisStage}
        setDiagnosisStage={setDiagnosisStage}
      />
      <div className={styles.MainArea}>{renderDiagnosisPage()}</div>
    </div>
  );
};

export default Diagnosis;
