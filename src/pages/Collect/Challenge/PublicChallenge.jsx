import React, { useEffect, useState } from "react";
import arrowRight from "../../../assets/Navigation/arrowRight.svg";
import arrowUp from "../../../assets/Navigation/arrowUp.svg";
import arrowDown from "../../../assets/Navigation/arrowDown.svg";
import styles from "./PublicChallenge.module.css";
import ChallengeCard from "../../../components/ChallengeCard/ChallengeCard";
import chatPlusBtn from "../../../assets/Btn/chatPlusBtn.svg";
import { Link, useNavigate } from "react-router-dom";
import JoinChallenge from "./JoinChallenge";

const PublicChallenge = ({ allData }) => {
  const navigate = useNavigate();
  const joinChallenge = allData.filter((data) => data.isJoined == true);
  const [sortChallenge, setSortChallenge] = useState(allData);
  const [isDropDown, setIsDropDown] = useState(false);
  const sortType = [
    "인기순",
    "최신순",
    "종료임박순",
    "코인많은순",
    "코인적은순",
  ];
  const [sortName, setSortName] = useState(sortType[0]);

  const handleSortChallenge = (name) => {
    setSortName(name);
    const compare = (a, b) => {
      let date1, date2;
      switch (name) {
        case "인기순":
          return b.people - a.people;
        case "최신순":
          date1 = new Date(a.startDate);
          date2 = new Date(b.startDate);
          return date1 > date2 ? 1 : -1;
        case "종료임박순":
          date1 = new Date(a.endDate);
          date2 = new Date(b.endDate);
          return date1 > date2 ? 1 : -1;
        case "코인많은순":
          return b.coin - a.coin;
        case "코인적은순":
          return a.coin - b.coin;
        default:
          break;
      }
    };
    setSortChallenge([...allData].sort(compare));
  };

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
              <JoinChallenge
                key={item.id}
                item={item}
                onClick={() =>
                  navigate("/challenge/detail", {
                    state: { selectedChallenge: item },
                  })
                }
              />
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
        <button type="button" onClick={() => setIsDropDown(!isDropDown)}>
          <p>{sortName}</p>
          <img src={isDropDown ? arrowUp : arrowDown} alt="정렬 버튼 아이콘" />
          {isDropDown && (
            <ul>
              {sortType
                .filter((name) => name !== sortName)
                .map((name) => (
                  <li key={name} onClick={() => handleSortChallenge(name)}>
                    {name}
                  </li>
                ))}
            </ul>
          )}
        </button>
      </div>
      <div className={styles.publicChallengeWrapper}>
        {sortChallenge.map((item) => (
          <ChallengeCard
            key={item.id}
            allData={item}
            onClick={() =>
              navigate("/challengecard", { state: { challenge: item } })
            }
          />
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
