// 나의 소비 입력하기 페이지 구현 예정
import React, { useEffect, useState } from "react";
import styles from "./InputConsumption.module.css";
import Header from "../../components/Header/Header";
import question from "../../assets/Content/question.svg";
import MoneyInput from "../../components/MoneyInput/MoneyInput";
import PrimaryButton from "../../components/Button/PrimaryButton";
import DescModal from "./DescModal";
import { useNavigate } from "react-router-dom";
import ChallengeCategory from "../../components/ChallengeCategory/ChallengeCategory";
import ConsCategory from "../../components/ChallengeCategory/ConsCategory";
import { getConsInput, postConsInput } from "../../apis/consumptionInput";

const InputConsumption = () => {
  const pageName = "나의 소비 입력하기";
  const navigate = useNavigate();
  const [isInputState, setIsInputState] = useState(false);
  const [consCategoryClicked, setConsCategoryClicked] = useState("");
  const [challengeClicked, setChallengeClicked] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [myConsumption, setMyConsumption] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  useEffect(() => {
    getConsInput(setTargetAmount);
  }, []);
  const handlePostConsInput = () => {
    postConsInput(consCategoryClicked, challengeClicked, myConsumption);
  };

  return (
    <div className={styles.wrapper}>
      <Header pageName={pageName} />
      <div className={styles.contentWrapper}>
        {/*카테고리 버튼 부분 */}
        <div className={styles.categoryWrapper}>
          <div className={styles.categoryDesc}>
            <span>카테고리</span>
            <img
              src={question}
              alt="카테고리 설명을 볼 수 있는 아이콘"
              onClick={() => setModalOpen(true)}
            />
          </div>
          <ConsCategory
            consCategoryClicked={consCategoryClicked}
            setConsCategoryClicked={setConsCategoryClicked}
          />
        </div>
        {modalOpen && (
          <DescModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
        <ChallengeCategory
          challengeClicked={challengeClicked}
          setChallengeClicked={setChallengeClicked}
        />
        {/*input 부분*/}
        <div className={styles.inputWrapper}>
          <p>금액</p>
          <MoneyInput
            children="사용한 금액을 입력해주세요."
            isInputState={isInputState}
            setIsInputState={setIsInputState}
            setValue={setMyConsumption}
          />
        </div>
        {/*목표 금액까지 남은 금액 표시*/}
        <div className={styles.inputWrapper}>
          <p>목표 금액까지 남은 금액</p>
          <div className={styles.priceWrapper}>
            <p className={styles.price}>{targetAmount - myConsumption}</p>
            <span className={styles.priceDesc}>원</span>
          </div>
        </div>
        {!modalOpen && (
          <div
            className={styles.buttonWrapper}
            onClick={() => {
              navigate("/");
              console.log(myConsumption);
            }}
            style={{ pointerEvents: isInputState ? "auto" : "none" }}
          >
            <PrimaryButton
              type="button"
              size="xl"
              disabled={!isInputState}
              onClick={handlePostConsInput}
            >
              완료
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputConsumption;
