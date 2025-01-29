import React from "react";
import styles from "./FriendChallenge.module.css";
import arrowRight from "../../../../assets/Navigation/arrowRight.svg";
import { Link, useNavigate } from "react-router-dom";
import ChallengeCard from "../../../../components/ChallengeCard/ChallengeCard";

const FriendChallenge = ({ friendChallenge }) => {
  const navigate = useNavigate();
  const challengeFriendArray = friendChallenge.flatMap(
    (data) => data.with || []
  );
  const withChallengeFriend = [
    ...new Set(challengeFriendArray.map((friend) => friend.userName)),
  ];
  const friendArray = userData.filter((user) => user.friend === true);

  return (
    <div>
      <div className={styles.friendProfileWrapper}>
        <div className={styles.friendDataInfo}>
          <span className={styles.friendCount}>
            친구 <span style={{ fontWeight: 700 }}>{friendArray.length}</span>명
          </span>
          <span
            className={styles.friendMore}
            onClick={() =>
              navigate("/friendlist", {
                state: {
                  withChallengeFriend: withChallengeFriend,
                  friendData: friendArray,
                },
              })
            }
          >
            전체보기
            <img src={arrowRight} alt="현재 유저와 친구인 친구목록 확인 버튼" />
          </span>
        </div>
        <div className={styles.friendProfileContainer}>
          {friendArray.map((item) => (
            <div key={item.id} className={styles.friendProfile}>
              <img src={item.img} alt="친구 프로필" />
              {withChallengeFriend.includes(item.userName) && (
                <div className={styles.withFriendProfile}>챌린지</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {friendChallenge.length != 0 ? (
        <>
          <h3>현재 진행중인 챌린지</h3>
          <div className={styles.friendChallengeWrapper}>
            {friendChallenge.map((item) => (
              <ChallengeCard
                key={item.id}
                allData={item}
                isDetailChallenge={true}
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
    userName: "금나와라",
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
    userName: "모아모아짱",
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
