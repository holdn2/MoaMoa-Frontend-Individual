import React from "react";
import styles from "./DetailChallenge.module.css";
import Header from "../../../components/Header/Header";
import { useLocation } from "react-router-dom";
import ChallengeCard from "../../../components/ChallengeCard/ChallengeCard";
import ChallengeProgressBar from "../../../components/ChallengeProgressBar/ChallengeProgressBar";

const DetailChallenge = () => {
  const pageName = "모으기";
  const location = useLocation();
  const selectedChallenge = location.state?.selectedChallenge;

  return (
    <div className={styles.DetailPage}>
      <Header pageName={pageName} collectBack={true} />
      <div className={styles.wrapper}>
        <section>
          <h3>현재 진행중인 챌린지</h3>
          <ChallengeCard allData={selectedChallenge} isDetailChallenge={true} />
        </section>
        <section>
          <h3>함께하는 챌린저</h3>
          {selectedChallenge.with.map((user) => (
            <ChallengeProgressBar key={user.id} user={user} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default DetailChallenge;
