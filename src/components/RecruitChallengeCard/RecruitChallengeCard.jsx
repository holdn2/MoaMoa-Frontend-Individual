// 모집 중인 챌린지 컴포넌트 구현 시 필요한 챌린지 카드 컴포넌트
import React from "react";
import styles from "./RecruitChallengeCard.module.css";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import { useNavigate } from "react-router-dom";
import people from "../../assets/Content/people.svg";
import arrowRight from "../../assets/Navigation/arrowRight.svg";

const RecruitChallengeCard = ({
  challengeContent,
  recruitDday,
  currentPeople,
  challenge,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.RecruitCardContainer}>
      <div className={styles.CardTextContainer}>
        <span className={styles.ChallengeTitle}>{challengeContent}</span>
        <div className={styles.DayPeopleText}>
          <span className={styles.DayText}>{recruitDday}</span>
          <img
            src={people}
            alt="사람들 이모티콘"
            className={styles.PeopleImg}
          />
          <span className={styles.CurrentPeople}>{currentPeople}</span>
        </div>
      </div>
      <button
        className={styles.ArrowContainer}
        onClick={() => {
          navigate("/challengemodal/challengcard", {
            state: { challenge: challenge },
          });
        }}
      >
        <img src={arrowRight} alt="오른쪽 화살표" className={styles.ArrowImg} />
      </button>
    </div>
  );
};

export default RecruitChallengeCard;
