// 나의 소비 시작하기 페이지 구현 예정
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./StartConsumption.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SelectPeriod from "./SelectPeriod";
import MoneyInput from "../../components/MoneyInput/MoneyInput";

const StartConsumption = () => {
  const pageName = "나의 소비 시작하기";
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="wrapper">
      <Header pageName={pageName} />
      <div className={styles.contentWrapper}>
        <div className={styles.descWrapper}>
          <h3>나의 소비 시작</h3>
          <p>일주일동안 사용하실 금액을 입력해주세요 !</p>
          <p>
            {/*span 부분 데이터 받아오기 */}
            지난주에는 <span>10만원</span>을 사용했어요 !
          </p>
        </div>
        <div className={styles.inputWrapper}>
          <p>나의 소비 기간</p>
          <button
            type="button"
            className={styles.dayButton}
            onClick={() => setModalOpen(true)}
          >
            <span>24.11.24 (월) ~ 24.11.31 (일)</span>
          </button>
        </div>
        <div className={styles.inputWrapper}>
          <p>목표 금액</p>
          <MoneyInput children="주소비 한도 금액을 입력해주세요" />
        </div>
      </div>
      {modalOpen && <SelectPeriod setModalOpen={setModalOpen} />}
      <div className={styles.buttonWrapper}>
        <PrimaryButton type="button" size="xl" disabled={true}>
          완료
        </PrimaryButton>
      </div>
    </div>
  );
};

export default StartConsumption;
