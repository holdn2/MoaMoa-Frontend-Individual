import React from "react";
import styles from "./FinishStartCons.module.css";
import dustSunglass from "../../assets/CharacterImgs/dustSunglass.svg";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const FinishConsComp = ({ title, content }) => {
  return (
    <div className={styles.EachInfoContainer}>
      <span className={styles.InfoTitle}>{title}</span>
      <span className={styles.InfoText}>{content}</span>
    </div>
  );
};

const FinishStartCons = ({
  prize,
  startFormatDate,
  endFormatDate,
  targetAmount,
}) => {
  const startDate = new Date(startFormatDate);
  const endDate = new Date(endFormatDate);
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const showStartDate = `${startDate.getFullYear()}.${startDate.getMonth()}.${startDate.getDate()}(${
    weekDays[startDate.getDay()]
  })`;
  const showEndDate = `${endDate.getMonth()}.${endDate.getDate()}(${
    weekDays[endDate.getDay()]
  })`;
  const FinishConsCompArr = ["획득 가능 코인", "설정 기간", "설정 금액"];
  const FinishConsContent = [
    `${prize}코인`,
    `${showStartDate}~${showEndDate}`,
    `주 ${targetAmount}원`,
  ];
  const navigate = useNavigate();

  return (
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
          {FinishConsCompArr.map((title, index) => (
            <FinishConsComp
              key={title}
              title={title}
              content={FinishConsContent[index]}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonWrapper} onClick={() => navigate("/")}>
        <PrimaryButton type="button" size="xl">
          나의 소비 시작하기
        </PrimaryButton>
      </div>
    </>
  );
};

export default FinishStartCons;
