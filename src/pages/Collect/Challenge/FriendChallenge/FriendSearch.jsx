import React, { useState } from "react";
import styles from "./FriendSearch.module.css";
import Header from "../../../../components/Header/Header";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import FreindListBar from "../../FreindListBar";
import { useLocation } from "react-router-dom";

const FriendSearch = () => {
  const pageName = "친구 추가";
  const [isInputText, setIsInputText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const location = useLocation();
  const { userData, friendArray, withChallengeFriend } = location.state;
  return (
    <>
      <Header pageName={pageName} />
      <div className={styles.wrapper}>
        <SearchBar
          setIsInputText={setIsInputText}
          setFiltered={setFiltered}
          allData={userData}
        />
        <div className={styles.friendListContainer}>
          {isInputText.length > 0 &&
            filtered.map((item) => (
              <FreindListBar
                key={item.id}
                userName={item.userName}
                userImg={item.img}
                isNotFriend={
                  !friendArray.some(
                    // 객체 배열이므로 some을 써서 각 객체의 userName 검사
                    (friend) => friend.userName === item.userName
                  )
                } //친구가 아닌 사람이 true
                isWithFriend={withChallengeFriend.includes(item.userName)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default FriendSearch;
