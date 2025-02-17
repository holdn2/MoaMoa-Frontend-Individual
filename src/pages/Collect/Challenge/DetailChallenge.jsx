import React, { useEffect, useState } from "react";
import styles from "./DetailChallenge.module.css";
import Header from "../../../components/Header/Header";
import ChallengeCard from "../../../components/ChallengeCard/ChallengeCard";
import ChallengeProgressBar from "../../../components/ChallengeProgressBar/ChallengeProgressBar";
import { getOngoingChallengeDetailInfo } from "../../../apis/challenge/getChallenge";
import { useLocation, useParams } from "react-router-dom";

const DetailChallenge = () => {
  const pageName = "모으기";
  const location = useLocation();
  const { selectedChallenge } = location.state;

  // 사용자의 챌린지 진행정도
  const [usedRate, setUsedRate] = useState(0);
  // 다른 멤버 정보
  const [otherMembers, setOtherMembers] = useState([]);
  useEffect(() => {
    getOngoingChallengeDetailInfo(
      selectedChallenge.challengeId,
      setUsedRate,
      setOtherMembers
    );
  }, []);

  return (
    <div className={styles.DetailPage}>
      <Header pageName={pageName} collectBack={true} />

      <div className={styles.wrapper}>
        <section>
          <h3>현재 진행중인 챌린지</h3>
          <ChallengeCard
            allData={selectedChallenge}
            isDetailChallenge={true}
            usedRate={usedRate}
          />
        </section>
        {otherMembers.length > 0 && (
          <section>
            <h3>함께하는 챌린저</h3>
            {otherMembers.map((user, index) => (
              <ChallengeProgressBar key={index} user={user} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default DetailChallenge;
