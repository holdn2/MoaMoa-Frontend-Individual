import React, { useEffect, useState } from "react";
import styles from "./FriendChallenge.module.css";
import arrowRight from "../../../../assets/Navigation/arrowRight.svg";
import { Link, useNavigate } from "react-router-dom";
import ChallengeCard from "../../../../components/ChallengeCard/ChallengeCard";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import { getInProgressFriendChallenge } from "../../../../apis/challenge/getChallenge";
import { getAllFriendsInfo } from "../../../../apis/friend";

const FriendChallenge = () => {
  const navigate = useNavigate();
  const [inProgressFriendChallenge, setInProgressFriendChallenge] = useState(
    []
  );
  useState(() => {
    getInProgressFriendChallenge(setInProgressFriendChallenge);
  }, []);

  // 친구 목록 전체 불러오기
  const [allFriendsData, setAllFriendsData] = useState([]);
  useEffect(() => {
    getAllFriendsInfo(setAllFriendsData);
  }, []);

  return (
    <div>
      <SearchBar isText={true} onClick={() => navigate("/friendsearch")} />
      <div className={styles.friendProfileWrapper}>
        <div className={styles.friendDataInfo}>
          <span className={styles.friendCount}>
            친구{" "}
            <span style={{ fontWeight: 700 }}>{allFriendsData.length}</span>명
          </span>
          <span
            className={styles.friendMore}
            onClick={() =>
              navigate("/friendlist", {
                state: {
                  friendData: allFriendsData,
                },
              })
            }
          >
            전체보기
            <img src={arrowRight} alt="현재 유저와 친구인 친구목록 확인 버튼" />
          </span>
        </div>
        <div className={styles.friendProfileContainer}>
          {allFriendsData.map((item) => {
            return (
              <div key={item.userId} className={styles.friendProfile}>
                <img src={item.profileImageUrl} alt="친구 프로필" />
                {item.isInSameChallenge && (
                  <div className={styles.withFriendProfile}>챌린지</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {inProgressFriendChallenge.length != 0 ? (
        <>
          <h3>현재 진행중인 챌린지</h3>
          <div className={styles.friendChallengeWrapper}>
            {inProgressFriendChallenge.map((item, index) => (
              <ChallengeCard
                key={index}
                allData={item}
                isPublic={false}
                isDetailChallenge={false}
                onClick={() =>
                  navigate("/challenge/detail", {
                    state: { selectedChallenge: item },
                  })
                }
              />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.noJoinChallengeWrapper}>
          <p className={styles.noJoinChallenge}>
            친구들과 새로운 챌린지를 시작해보세요!
          </p>
          <Link to={"/challenge"} className={styles.noJoinChallengeLink}>
            챌린지 만들러 가기
          </Link>
        </div>
      )}
    </div>
  );
};

export default FriendChallenge;
