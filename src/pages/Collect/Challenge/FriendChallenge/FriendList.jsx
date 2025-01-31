import React, { useState } from "react";
import styles from "./FriendList.module.css";
import FreindListBar from "../../FreindListBar";
import { useLocation } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import SearchBar from "../../../../components/SearchBar/SearchBar";

const FriendList = () => {
  const pageName = "친구 목록";
  const location = useLocation();
  const { withChallengeFriend, friendData } = location.state;
  const [isInputText, setIsInputText] = useState("");
  const [filtered, setFiltered] = useState([]);

  return (
    <>
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
              key={item.id}
              userName={item.userName}
              userImg={item.img}
              isWithFriend={withChallengeFriend.includes(item.userName)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FriendList;
