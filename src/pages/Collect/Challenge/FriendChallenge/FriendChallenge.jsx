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

  return (
    <div>
      <div className={styles.friendProfileWrapper}>
        <div className={styles.friendDataInfo}>
          <span className={styles.friendCount}>
            친구 <span style={{ fontWeight: 700 }}>{friendData.length}</span>명
          </span>
          <span
            className={styles.friendMore}
            onClick={() =>
              navigate("/friendlist", {
                state: {
                  withChallengeFriend: withChallengeFriend,
                  friendData: friendData,
                },
              })
            }
          >
            전체보기
            <img src={arrowRight} alt="현재 유저와 친구인 친구목록 확인 버튼" />
          </span>
        </div>
        <div className={styles.friendProfileContainer}>
          {friendData.map((item) => (
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

const friendData = [
  {
    id: 1,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 2,
    userName: "금나와라",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 3,
    userName: "골든피기",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 4,
    userName: "피그핑",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 5,
    userName: "모아모아짱",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 6,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 7,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 8,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 9,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 10,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 11,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 12,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 13,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 14,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
  {
    id: 15,
    userName: "럭키머니",
    img: "http://placehold.co/49",
    toInvite: false,
  },
];
