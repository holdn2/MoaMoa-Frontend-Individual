import React, { useEffect, useState } from "react";
import styles from "./PastChallenge.module.css";
import Header from "../../../../components/Header/Header";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BottomBar from "../../../../components/BottomBar/BottomBar";
import success from "../../../../assets/ChallengeResult/success.svg";
import fail from "../../../../assets/ChallengeResult/fail.svg";
import coin3 from "../../../../assets/Content/coin3.svg";
import { getRoomPastChallenge } from "../../../../apis/chatroom";

const PastChallenge = () => {
  const pageName = "지난챌린지";
  const navigate = useNavigate();

  // roomId 가져오기
  const location = useLocation();
  const roomId = location.state?.roomId;

  // 채팅방 지난챌린지 조회 api
  const [pastChallengeData, setPastChallengeData] = useState([]);
  useEffect(() => {
    getRoomPastChallenge(roomId, setPastChallengeData);
  }, []);

  // 챌린지 검색
  const [isInputText, setIsInputText] = useState("");
  const [filteredChallenge, setFilteredChallenge] = useState([]);

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
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${month}.${day}`; // "YYYY.MM.DD" 형식
  };

  return (
    <div className={styles.PageWrapper}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <SearchBar
          setIsInputText={setIsInputText}
          setFiltered={setFilteredChallenge}
          allData={pastChallengeData}
          isChallenge={true}
        />
        {isInputText ? (
          <>
            {filteredChallenge.map((item) => (
              <button
                key={item.challengeId}
                className={styles.ChallengeContainer}
                onClick={() =>
                  navigate(
                    `/chatroom/${params.chatroomId}/pastchallenge/detailpastchallenge`
                  )
                }
              >
                {item.isSuccessful ? (
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
                <span className={styles.ChallengeTitle}>{item.title}</span>
                <span className={styles.ChallengeText}>{item.content}</span>
                <div className={styles.DateCoinWrapper}>
                  <span>
                    {formatDate(item.startDate)}~{formatDate2(item.endDate)}
                  </span>{" "}
                  <span>|</span>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <img src={coin3} alt="코인" />
                    <span>{item.battleCoin}</span>
                  </div>
                </div>
                <span className={styles.PeopleText}>
                  {item.participantCount}명 참여
                </span>
              </button>
            ))}
          </>
        ) : (
          <>
            <div style={{ marginTop: "60px" }} />
            {pastChallengeData.map((item) => (
              <button
                key={item.challengeId}
                className={styles.ChallengeContainer}
                onClick={() =>
                  navigate(
                    `/chatroom/${params.chatroomId}/pastchallenge/detailpastchallenge`
                  )
                }
              >
                {item.isSuccessful ? (
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
                <span className={styles.ChallengeTitle}>{item.title}</span>
                <span className={styles.ChallengeText}>{item.content}</span>
                <div className={styles.DateCoinWrapper}>
                  <span>
                    {formatDate(item.startDate)}~{formatDate2(item.endDate)}
                  </span>{" "}
                  <span>|</span>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <img src={coin3} alt="코인" />
                    <span>{item.battleCoin}</span>
                  </div>
                </div>
                <span className={styles.PeopleText}>
                  {item.participantCount}명 참여
                </span>
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
