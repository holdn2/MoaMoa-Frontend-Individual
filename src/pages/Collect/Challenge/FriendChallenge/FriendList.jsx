import React, { useEffect, useState } from "react";
import styles from "./FriendList.module.css";
import FreindListBar from "../../FreindListBar";
import { useLocation } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import SearchBar from "../../../../components/SearchBar/SearchBar";

const FriendList = () => {
  const pageName = "친구 목록";
  const location = useLocation();
  const { friendData } = location.state;
  const [withChallengeFriend, setWithChallengeFriend] = useState([]);

  // 챌린지 참여 여부가 true인 사용자 추출
  useEffect(() => {
    if (friendData && Array.isArray(friendData)) {
      const challengeParticipants = friendData
        .filter((friend) => friend.isInSameChallenge) // 챌린지에 참여한 친구만 필터링
        .map((friend) => friend.nickname); // 닉네임만 추출

      setWithChallengeFriend(challengeParticipants);
    }
  }, [friendData]);

  const [isInputText, setIsInputText] = useState("");
  const [filtered, setFiltered] = useState([]);

  return (
    <div className={styles.FriendListPage}>
      <Header pageName={pageName} />
      <div className={styles.wrapper}>
        <SearchBar
          setIsInputText={setIsInputText}
          setFiltered={setFiltered}
          allData={friendData}
        />
        <span className={styles.friendCount}>
          친구 <span style={{ fontWeight: 700 }}>{friendData.length}</span>명
        </span>
        <div className={styles.friendListContainer}>
          {(isInputText.length > 0 ? filtered : friendData).map((item) => (
            <FreindListBar
              key={item.userId}
              userName={item.nickname}
              userImg={item.imageUrl}
              isWithFriend={withChallengeFriend.includes(item.nickname)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
