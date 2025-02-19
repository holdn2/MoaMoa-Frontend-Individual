import React, { useEffect, useState } from "react";
import styles from "./FriendChallenge.module.css";
import arrowRight from "../../../../assets/Navigation/arrowRight.svg";
import { Link, useNavigate } from "react-router-dom";
import ChallengeCard from "../../../../components/ChallengeCard/ChallengeCard";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import { getInProgressFriendChallenge } from "../../../../apis/challenge/getChallenge";
import { getAllFriendsInfo } from "../../../../apis/friend";

const FriendChallenge = ({ friendChallenge }) => {
  const navigate = useNavigate();
  const [inProgressFriendChallenge, setInProgressFriendChallenge] = useState(
    []
  );
  useState(() => {
    getInProgressFriendChallenge(setInProgressFriendChallenge);
  }, []);
  const challengeFriendArray = friendChallenge.flatMap(
    (data) => data.with || []
  );
  const withChallengeFriend = [
    ...new Set(challengeFriendArray.map((friend) => friend.userName)),
  ];
  const friendArray = userData.filter((user) => user.friend === true);

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
          {allFriendsData.map((item) => (
            <div key={item.userId} className={styles.friendProfile}>
              <img src={item.imageUrl} alt="친구 프로필" />
              {item.isInSameChallenge && (
                <div className={styles.withFriendProfile}>챌린지</div>
              )}
            </div>
          ))}
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

const userData = [
  {
    id: 1,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 2,
    userName: "금나와라", // 친구 X
    img: "http://placehold.co/49",
    toInvite: false,
    friend: false,
  },
  {
    id: 3,
    userName: "골든피기",
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 4,
    userName: "피그핑", // 같은 챌린지
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 5,
    userName: "모아모아짱", // 친구 X
    img: "http://placehold.co/49",
    toInvite: false,
    friend: false,
  },
  {
    id: 6,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 7,
    userName: "햎피그", // 같은 챌린지
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 8,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 9,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 10,
    userName: "짱모아", // 같은 챌린지
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 11,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 12,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 13,
    userName: "황금돼지될래", // 같은 챌린지
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 14,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
  {
    id: 15,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
    friend: true,
  },
];
