import React, { useEffect, useState } from "react";
import arrowRight from "../../../../assets/Navigation/arrowRight.svg";
import styles from "./PublicChallenge.module.css";
import chatPlusBtn from "../../../../assets/Btn/chatPlusBtn.svg";
import { Link, useNavigate } from "react-router-dom";
import JoinChallenge from "./JoinChallenge";
import ChallengeCard from "../../../../components/ChallengeCard/ChallengeCard";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { getRecommendChallenge } from "../../../../apis/challenge/getChallenge";

const userId = 1;

const PublicChallenge = ({ allData }) => {
  const navigate = useNavigate();
  const noJoinChallenge = allData.filter((data) => data.isJoined == false);
  const joinChallenge = allData.filter((data) => data.isJoined == true);
  const [sortChallenge, setSortChallenge] = useState(noJoinChallenge);

  // 챌린지 추천 상태
  const [recommendChallenges, setRecommendChallenges] = useState([]);

  // 정렬 type 관련
  const typeName = ["인기순", "최신순", "종료임박순", "코인순"];
  const [sortType, setSortType] = useState("POPULARITY");
  useEffect(() => {
    getRecommendChallenge(sortType, setRecommendChallenges);
  }, [sortType]);

  return (
    <>
      <SearchBar
        onClick={() =>
          navigate("/challengesearch", {
            state: {
              allData: allData,
            },
          })
        }
      />
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
        <Dropdown typeName={typeName} setSortType={setSortType} />
        <div className={styles.publicChallengeWrapper}>
          {recommendChallenges.map((item) => (
            <ChallengeCard
              key={item.id}
              allData={item}
              onClick={() =>
                navigate("/challengemodal/challengcard", {
                  state: { challenge: item },
                })
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
    </>
  );
};

export default PublicChallenge;
