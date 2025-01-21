import React from "react";
import arrowRight from "../../../assets/Navigation/arrowRight.svg";
import date from "../../../assets/Content/date.svg";
import people from "../../../assets/Content/people.svg";
import arrowDown from "../../../assets/Navigation/arrowDown.svg";
import styles from "./PublicChallenge.module.css";
import ChallengeCard from "../../../components/ChallengeCard/ChallengeCard";
import chatPlusBtn from "../../../assets/Btn/chatPlusBtn.svg";
import { Link, useNavigate } from "react-router-dom";

const PublicChallenge = ({ allData }) => {
  const joinChallenge = allData.filter((data) => data.isJoined == true);
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h3>현재 진행중인 챌린지</h3>
      {joinChallenge.length != 0 ? (
        <div className={styles.joinChallengeWrapper}>
          <div className={styles.joinChallengeMore}>
            <p>
              더보기
              <img
                src={arrowRight}
                alt="현재 진행중인 챌린지 더보기로 가는 버튼"
              />
            </p>
          </div>
          <div className={styles.joinChallengeContainer}>
            {joinChallenge.map((item) => (
              <div key={item.id} className={styles.joinChallenge}>
                <p className={styles.joinChallengeName}>{item.challengeName}</p>
                <p className={styles.joinChallengeDeadline}>성공까지 </p>
                <p className={styles.joinChallengeInfo}>
                  <img src={date} alt="달력 아이콘" />
                  {item.startDate}~{item.endDate}
                </p>
                <p className={styles.joinChallengeInfo}>
                  <img src={people} alt="사람 모양 아이콘" />
                  <span style={{ fontWeight: 600 }}>{item.people}명</span> 참여
                  중
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.joinChallengeWrapper}>
          <p className={styles.noJoinChallenge}>
            현재 진행중인 챌린지가 없어요
            <br />
            직접 챌린지를 만들고 시작해보세요!
          </p>
          <Link to={"/challenge"} className={styles.noJoinChallengeLink}>
            챌린지 만들러 가기
          </Link>
        </div>
      )}

      <h3>이런 챌린지는 어떠세요?</h3>
      <div className={styles.dropDown}>
        <button>
          <span>인기순</span>
          <img src={arrowDown} alt="정렬 버튼 아이콘" />
        </button>
      </div>
      <div className={styles.publicChallengeWrapper}>
        {allData.map((item) => (
          <ChallengeCard key={item.id} allData={item} />
        ))}
      </div>
      <img
        onClick={() => navigate("/challenge")}
        src={chatPlusBtn}
        alt="챌린지 만들기로 가는 버튼"
        style={{ position: "fixed", right: "20px", bottom: "80px" }}
      />
    </div>
  );
};

export default PublicChallenge;
