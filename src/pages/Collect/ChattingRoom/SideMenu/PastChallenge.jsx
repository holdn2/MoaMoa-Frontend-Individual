import React, { useState } from "react";
import styles from "./PastChallenge.module.css";
import Header from "../../../../components/Header/Header";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import { useNavigate, useParams } from "react-router-dom";
import BottomBar from "../../../../components/BottomBar/BottomBar";
import success from "../../src/assets/ChallengeResult/success.svg";
import fail from "../../src/assets/ChallengeResult/fail.svg";
import coin3 from "../../src/assets/Content/coin3.svg";

const PastChallenge = () => {
  const pageName = "지난챌린지";
  const params = useParams();
  // console.log("채팅방 ID : ", params.chatroomId);
  const navigate = useNavigate();

  // 챌린지 검색
  const [isInputText, setIsInputText] = useState("");
  const [filteredChallenge, setFilteredChallenge] = useState([]);

  return (
    <div className={styles.PageWrapper}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <SearchBar
          setIsInputText={setIsInputText}
          setFiltered={setFilteredChallenge}
          allData={pastChallengeData}
        />
        {isInputText ? (
          <>
            {filteredChallenge.map((item) => (
              <button
                key={item.id}
                className={styles.ChallengeContainer}
                onClick={() =>
                  navigate(
                    `/chatroom/${params.chatroomId}/pastchallenge/detailpastchallenge`
                  )
                }
              >
                {item.isSuccess ? (
                  <img
                    src={success}
                    alt="성공"
                    className={styles.ChallengeResultImg}
                  />
                ) : (
                  <img
                    src={fail}
                    alt="실패"
                    className={styles.ChallengeResultImg}
                  />
                )}
                <span className={styles.ChallengeTitle}>{item.userName}</span>
                <span className={styles.ChallengeText}>{item.text}</span>
                <div className={styles.DateCoinWrapper}>
                  <span>{item.date}</span> <span>|</span>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <img src={coin3} alt="코인" />
                    <span>{item.coin}</span>
                  </div>
                </div>
                <span className={styles.PeopleText}>{item.people}명 참여</span>
              </button>
            ))}
          </>
        ) : (
          <>
            <div style={{ marginTop: "60px" }} />
            {pastChallengeData.map((item) => (
              <button
                key={item.id}
                className={styles.ChallengeContainer}
                onClick={() =>
                  navigate(
                    `/chatroom/${params.chatroomId}/pastchallenge/detailpastchallenge`
                  )
                }
              >
                {item.isSuccess ? (
                  <img
                    src={success}
                    alt="성공"
                    className={styles.ChallengeResultImg}
                  />
                ) : (
                  <img
                    src={fail}
                    alt="실패"
                    className={styles.ChallengeResultImg}
                  />
                )}
                <span className={styles.ChallengeTitle}>{item.userName}</span>
                <span className={styles.ChallengeText}>{item.text}</span>
                <div className={styles.DateCoinWrapper}>
                  <span>{item.date}</span> <span>|</span>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <img src={coin3} alt="코인" />
                    <span>{item.coin}</span>
                  </div>
                </div>
                <span className={styles.PeopleText}>{item.people}명 참여</span>
              </button>
            ))}
          </>
        )}
      </div>
      <BottomBar />
    </div>
  );
};

export default PastChallenge;

const pastChallengeData = [
  {
    id: 1,
    userName: "1주일 10만원으로 살아남기",
    text: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    date: "2024.11.15 ~ 11.22",
    coin: 300,
    people: 127,
    isSuccess: true,
  },
  {
    id: 2,
    userName: "1주일 5만원으로 살아남기",
    text: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    date: "2024.11.15 ~ 11.22",
    coin: 500,
    people: 87,
    isSuccess: false,
  },
  {
    id: 3,
    userName: "1주일 3만원으로 살아남기",
    text: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
    date: "2024.11.15 ~ 11.22",
    coin: 700,
    people: 65,
    isSuccess: false,
  },
];
