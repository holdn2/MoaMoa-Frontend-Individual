import React, { useEffect, useState } from "react";
import styles from "./FriendSearch.module.css";
import Header from "../../../../components/Header/Header";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import FreindListBar from "../../FreindListBar";
import { useLocation } from "react-router-dom";
import { searchNewFriends } from "../../../../apis/friend";
import JoinModal from "../../../Join/JoinModal";

const FriendSearch = () => {
  const pageName = "친구 추가";
  const [modalState, setModalState] = useState(0);
  const [isInputText, setIsInputText] = useState("");
  const [searchedFriends, setSearchedFriends] = useState([]);
  // 친구가 아닌 사람 배열
  const [isNotFriend, setIsNotFriend] = useState([]);
  const [withChallengeFriend, setWithChallengeFriend] = useState([]);

  useEffect(() => {
    if (isInputText) {
      searchNewFriends(isInputText, setSearchedFriends);
    }
  }, [isInputText]);

  // 🔹 친구가 아닌 사용자 목록 추출
  useEffect(() => {
    if (searchedFriends && Array.isArray(searchedFriends)) {
      const notFriendList = searchedFriends
        .filter((friend) => !friend.isFriend) // 친구가 아닌 사용자만 필터링
        .map((friend) => friend.nickname); // 닉네임만 저장

      setIsNotFriend(notFriendList);
    }
  }, [searchedFriends]);

  // 같은 챌린지 참여 여부가 true인 사용자 추출
  useEffect(() => {
    if (searchedFriends && Array.isArray(searchedFriends)) {
      const challengeParticipants = searchedFriends
        .filter((friend) => friend.isInSameChallenge) // 챌린지에 참여한 친구만 필터링
        .map((friend) => friend.nickname); // 닉네임만 추출

      setWithChallengeFriend(challengeParticipants);
    }
  }, [searchedFriends]);

  return (
    <>
      <Header pageName={pageName} />
      <div className={styles.wrapper}>
        <SearchBar setIsInputText={setIsInputText} isNewFriendSearch={true} />
        <div className={styles.friendListContainer}>
          {isInputText &&
            searchedFriends.map((item) => (
              <FreindListBar
                key={item.userId}
                userName={item.nickname}
                userImg={item.imageUrl}
                isNotFriend={isNotFriend.includes(item.nickname)} // 친구가 아닌 유저
                isWithFriend={withChallengeFriend.includes(item.nickname)} // 챌린지 같이 하고 있는 유저
                userId={item.userId}
                setModalState={setModalState}
              />
            ))}
        </div>
        <JoinModal modalState={modalState} setModalState={setModalState} />
      </div>
    </>
  );
};

export default FriendSearch;
