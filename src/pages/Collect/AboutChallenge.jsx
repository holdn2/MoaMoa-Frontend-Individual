import React, { useState } from "react";
import PublicChallenge from "./Challenge/PublicChallenge/PublicChallenge";
import FriendChallenge from "./Challenge/FriendChallenge/FriendChallenge";
import styles from "./AboutChallenge.module.css";

const dummyData = [
  {
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
  },
  {
    id: 2,
    challengeName: "배달 음식 NO!! 챌린지",
    challengeInfo: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    startDate: "2024-11-01",
    endDate: "2024-11-08",
    coin: 500,
    people: 4,
    public: true,
    category: "delivery",
    isJoined: true,
    percent: 70,
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
  },
  {
    id: 3,
    challengeName: "1주일 5만원으로 살아남기",
    challengeInfo: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    startDate: "2024-11-15",
    endDate: "2024-11-22",
    coin: 300,
    people: 127,
    public: false,
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
        userName: "피그핑",
        img: "http://placehold.co/49",
        toInvite: false,
      },
      {
        id: 5,
        userName: "짱모아",
        userImg: "http://placehold.co/49",
        percent: 20,
      },
    ],
  },
  {
    id: 4,
    challengeName: "배달 음식 NO!! 챌린지",
    challengeInfo: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    startDate: "2024-11-01",
    endDate: "2024-11-08",
    coin: 500,
    people: 4,
    public: false,
    category: "delivery",
    isJoined: true,
    percent: 70,
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
  },
  {
    id: 5,
    challengeName: "1주일 5만원으로 살아남기",
    challengeInfo: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    startDate: "2024-11-15",
    endDate: "2024-11-22",
    coin: 300,
    people: 127,
    public: true,
    category: "taxi",
    isJoined: false,
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
  },
  {
    id: 2,
    challengeName: "배달 음식 NO!! 챌린지",
    challengeInfo: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    startDate: "2024-11-01",
    endDate: "2024-11-08",
    coin: 500,
    people: 4,
    public: true,
    category: "delivery",
    isJoined: false,
    percent: 70,
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
  },
];

const AboutChallenge = () => {
  const [isClicked, setIsClicked] = useState(0);
  const publicChallenge = dummyData.filter((data) => data.public == true);
  const friendChallenge = dummyData.filter((data) => data.public == false);

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
      {isClicked === 0 ? (
        <PublicChallenge />
      ) : (
        <FriendChallenge friendChallenge={friendChallenge} />
      )}
    </div>
  );
};

export default AboutChallenge;
