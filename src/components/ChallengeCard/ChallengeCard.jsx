import React, { useEffect, useState } from "react";
import coin from "../../assets/Content/coin3.svg";
import styles from "./ChallengeCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import PrimaryButton from "../Button/PrimaryButton";

// 날짜 형식 맞추기
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`; // "YYYY.MM.DD" 형식
};
const formatDate2 = (isoDate) => {
  const date = new Date(isoDate);
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  return `${month}.${day}`; // "YYYY.MM.DD" 형식
};

const ChallengeCard = ({
  isPublic,
  isRecruit,
  allData,
  onClick,
  isDetailChallenge,
  isButton,
  usedRate,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();
  const startDatetest = formatDate(allData.startDate);
  const endDatetest = formatDate2(allData.endDate);
  //Math.ceil로 소수점 내림처리
  // 챌린지 모집 마감 기한
  const recruitDeadline =
    Math.floor(
      (new Date(allData.recruitmentDeadline) - currentDate) /
        (1000 * 60 * 60 * 24)
    ) + 1;
  // 챌린지 성공까지 남은 기간
  const successDate = Math.floor(
    (new Date(allData.endDate) - currentDate) / (1000 * 60 * 60 * 24)
  );
  const detailTime = `${23 - currentDate.getHours()}:${
    59 - currentDate.getMinutes()
  }:${59 - currentDate.getSeconds()}`;
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.public}>
        <span>{isPublic ? "전체" : "친구"}</span>
      </div>
      <section className={styles.contentWrapper}>
        <p className={styles.challengeName}>{allData.title}</p>
        <p className={styles.challengeDesc}>{allData.content}</p>
        <p className={styles.challengeInfo}>
          <span>
            {startDatetest} ~ {endDatetest}
          </span>
          <span>|</span>
          <span className={styles.coin}>
            <img src={coin} alt="코인 아이콘" />
            {allData.battleCoin}
          </span>
        </p>
        <p className={styles.people}>{allData.participantCount}명 참여 중</p>
      </section>
      {isButton ? (
        <PrimaryButton
          size="challengeCard"
          children="챌린지 참여하기"
          type="button"
          onClick={() =>
            navigate("/challengemodal/challengemodalContent", {
              state: {
                successDate: successDate,
                coin: allData.coin,
                name: allData.challengeName,
                type: "join",
              },
            })
          }
        />
      ) : isRecruit ? (
        <div className={styles.deadline}>
          <span>
            챌린지 모집마감까지{" "}
            <span style={{ fontSize: "16px" }}>
              {recruitDeadline}일 {detailTime}
            </span>
          </span>
        </div>
      ) : (
        <div className={styles.deadline}>
          <span>
            챌린지 성공까지{" "}
            <span style={{ fontSize: "16px" }}>
              {successDate}일 {detailTime}
            </span>
          </span>
        </div>
      )}
      {isDetailChallenge && (
        <>
          <Link
            to={"/challengemodal/challengemodalContent"}
            state={{
              successDate: successDate,
              coin: allData.coin,
              name: allData.challengeName,
              type: "stop",
            }}
            className={styles.stopChallengeLink}
          >
            챌린지 중단하기
          </Link>
          <div className={styles.progressBar}>
            <ProgressBar size="short" currentProgress={usedRate} />
            <span>{usedRate}% 사용</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ChallengeCard;
