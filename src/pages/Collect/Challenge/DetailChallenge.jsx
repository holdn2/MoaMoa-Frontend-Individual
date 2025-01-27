import React from "react";
import styles from "./DetailChallenge.module.css";
import Header from "../../../components/Header/Header";

const DetailChallenge = ({ selectedChallenge }) => {
  const pageName = "모으기";
  return (
    <div className={styles.wrapper}>
      <Header pageName={pageName} />
      <section>
        <h3>현재 진행중인 챌린지</h3>
        <ChallengeCard allData={challengeData} />
      </section>
      <section>
        <h3>함께하는 챌린저</h3>
        {selectedChallenge.with.map((user) => (
          <ChallengeProgressBar key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
};

export default DetailChallenge;
