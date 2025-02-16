import React from "react";
import styles from "./FinishStartCons.module.css";
import dustSunglass from "../../assets/CharacterImgs/dustSunglass.svg";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const FinishConsComp = ({ title, content }) => {
  return (
    <div className={styles.EachInfoContainer}>
      <span className={styles.InfoTitle}>{title}</span>
      {title === "설정 기간" ? (
        <span className={styles.InfoText} style={{ fontSize: "15px" }}>
          {content}
        </span>
      ) : (
        <span className={styles.InfoText}>{content}</span>
      )}
    </div>
  );
};

const FinishStartCons = ({
  prize,
  startFormatDate,
  endFormatDate,
  targetAmount,
}) => {
  const formatDateWithDots = (dateString) => {
    if (!dateString) return ""; // 값이 없을 경우 빈 문자열 반환
    return dateString.replace(/-/g, ".");
  };
  const FinishConsCompArr = ["획득 가능 코인", "설정 기간", "설정 금액"];
  const FinishConsContent = [
    `${prize}코인`,
    `${formatDateWithDots(startFormatDate)}~${formatDateWithDots(
      endFormatDate
    )}`,
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
