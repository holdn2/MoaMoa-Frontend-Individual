import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import PublicChallenge from "./Challenge/PublicChallenge";
import FriendChallenge from "./Challenge/FriendChallenge";
import styles from "./AboutChallenge.module.css";

const dummyData = [
  {
    challengeName: "1주일 5만원으로 살아남기",
    challengeInfo: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    startDate: "2024.11.15",
    endDate: "2024.11.22",
    coin: 300,
    people: 127,
    public: true,
    category: "taxi",
    isJoined: false,
  },
  {
    challengeName: "배달 음식 NO!! 챌린지",
    challengeInfo: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    startDate: "2024.11.01",
    endDate: "2024.11.08",
    coin: 500,
    people: 4,
    public: true,
    category: "delivery",
    isJoined: true,
  },
];

const AboutChallenge = () => {
  const [isClicked, setIsClicked] = useState(0);
  const [isInputText, setIsInputText] = useState(false);
  const [filtered, setFiltered] = useState([]);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.btnWrapper}>
        <button
          type="button"
          onClick={() => setIsClicked(0)}
          className={isClicked === 0 ? styles.activeBtn : styles.inactiveBtn}
        >
          전체
        </button>
        <button
          type="button"
          onClick={() => setIsClicked(1)}
          className={isClicked === 1 ? styles.activeBtn : styles.inactiveBtn}
        >
          친구
        </button>
      </nav>
      <SearchBar
        setIsInputText={setIsInputText}
        setFiltered={setFiltered}
        allData={dummyData}
      />
      {isClicked === 0 ? <PublicChallenge /> : <FriendChallenge />}
    </div>
  );
};

export default AboutChallenge;
