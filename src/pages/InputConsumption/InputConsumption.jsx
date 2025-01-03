// 나의 소비 입력하기 페이지 구현 예정
import React, { useState } from "react";
import styles from "./InputConsumption.module.css";
import Header from "../../components/Header/Header";
import question from "../../assets/Content/question.svg";
import Category from "./Category";
import MoneyInput from "../../components/moneyInput/MoneyInput";
import PrimaryButton from "../../components/Button/PrimaryButton";

const InputConsumption = () => {
  const pageName = "나의 소비 입력하기";
  const categoryName = [
    "고정비",
    "꾸밈비",
    "활동비",
    "생활비",
    "기여비",
    "기타",
  ];
  const challengeName = [
    "택시비",
    "배달음식",
    "커피",
    "충동구매",
    "술자리",
    "취미",
  ];
  const [isInputState, setIsInputState] = useState(false);
  const [categoryClicked, setCategoryClicked] = useState(0);
  const [challengeClicked, setChallengeClicked] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header pageName={pageName} />
      <div className={styles.contentWrapper}>
        <div className={styles.categoryWrapper}>
          <div className={styles.categoryDesc}>
            <span>카테고리</span>
            <img src={question} />
          </div>
          <div className={styles.category}>
            {categoryName.map((name, index) => (
              <Category
                key={name}
                children={name}
                checked={categoryClicked === index}
                onClick={() => setCategoryClicked(index)}
              />
            ))}
          </div>
          <p>*중복 선택이 불가능합니다.</p>
        </div>
        <div className={styles.categoryWrapper}>
          <span>챌린지 카테고리</span>
          <div className={styles.category}>
            {challengeName.map((name, index) => (
              <Category
                key={name}
                children={name}
                checked={challengeClicked === index}
                onClick={() => setChallengeClicked(index)}
              />
            ))}
          </div>
          <p>*중복 선택이 불가능합니다.</p>
        </div>
        <div className={styles.inputWrapper}>
          <p>금액</p>
          <MoneyInput
            children="사용한 금액을 입력해주세요."
            isInputState={isInputState}
            setIsInputState={setIsInputState}
          />
        </div>
        <div className={styles.inputWrapper}>
          <p>목표 금액까지 남은 금액</p>
          <div className={styles.priceWrapper}>
            <p className={styles.price}>20,000</p>
            <span className={styles.priceDesc}>원</span>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <PrimaryButton type="button" size="xl" disabled={!isInputState}>
            완료
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default InputConsumption;
