import React, { useEffect, useState } from "react";
import coin from "../../assets/Content/coin3.svg";
import styles from "./ChallengeCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import PrimaryButton from "../Button/PrimaryButton";
import { getUserInfo } from "../../apis/mypage";

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
  isRecruit,
  allData,
  onClick,
  isDetailChallenge,
  isButton,
  usedRate,
}) => {
  // 보유 코인과 챌린지 참여에 필요한 코인 비교를 위해 회원정보 조회
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

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
        <span>{allData.publicChallenge ? "전체" : "친구"}</span>
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
        allData.battleCoin > userInfo.coin ? (
          <PrimaryButton
            size="challengeCard"
            children="보유코인 부족"
            disabled={true}
          />
        ) : (
          <PrimaryButton
            size="challengeCard"
            children="챌린지 참여하기"
            type="button"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() =>
              navigate("/challengemodal/join", {
                state: {
                  challengeId: allData.challengeId,
                  name: allData.title,
                  selectedChallenge: allData,
                },
              })
            }
          />
        )
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
            to={"/challengemodal/stop"}
            state={{
              successDate: successDate,
              challengeId: allData.challengeId,
              coin: allData.battleCoin,
              name: allData.title,
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
