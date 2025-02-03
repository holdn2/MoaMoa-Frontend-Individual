// 챌린지 진행 상황 컴포넌트 구현 시 필요한 챌린지 카드 컴포넌트
import React from "react";
import styles from "./ProgressChallengeCard.module.css";
import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/Navigation/arrowRight.svg";
import ProgressBar from "../ProgressBar/ProgressBar";

const ProgressChallengeCard = ({ challengeContent, currentProgress }) => {
  const navigate = useNavigate();
  const currentPercent = (100 * currentProgress) / 7;
  return (
    <div className={styles.ProgressCardContainer}>
      <div className={styles.CardTextContainer}>
        <span className={styles.ChallengeTitle}>{challengeContent}</span>
        <div className={styles.ProgressContainer}>
          <ProgressBar size="challengeCard" currentProgress={currentPercent} />
          <span className={styles.CurrentProgressText}>
            {currentProgress}/7
          </span>
        </div>
      </div>

      <button
        className={styles.ArrowContainer}
        onClick={() =>
          navigate("/challenge/detail", {
            state: { selectedChallenge: dummy },
          })
        }
      >
        <img src={arrowRight} alt="오른쪽 화살표" className={styles.ArrowImg} />
      </button>
    </div>
  );
};

export default ProgressChallengeCard;

const dummy = {
  id: 1,
  challengeName: "1주일 5만원으로 살아남기",
  challengeInfo: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
  startDate: "2024-11-15",
  endDate: "2024-11-22",
  coin: 300,
  people: 127,
  public: true,
  category: "taxi",
  isJoined: true,
  percent: 50,
  with: [
    {
      id: 1,
      userName: "황금돼지될래",
      userImg: "http://placehold.co/49",
      percent: 40,
    },
    {
      id: 2,
      userName: "김모아모아",
      userImg: "http://placehold.co/49",
      percent: 80,
    },
    {
      id: 3,
      userName: "햎피그",
      userImg: "http://placehold.co/49",
      percent: 50,
    },
    {
      id: 4,
      userName: "도니도니",
      userImg: "http://placehold.co/49",
      percent: 70,
    },
    {
      id: 5,
      userName: "짱모아",
      userImg: "http://placehold.co/49",
      percent: 20,
    },
  ],
};
