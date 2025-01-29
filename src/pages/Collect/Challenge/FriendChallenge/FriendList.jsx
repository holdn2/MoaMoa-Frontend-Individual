import React from "react";
import styles from "./FriendList.module.css";
import FreindListBar from "../../FreindListBar";
import { useLocation } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import SearchBar from "../../../../components/SearchBar/SearchBar";

const FriendList = () => {
  const pageName = "친구 목록";
  const location = useLocation();
  const { withChallengeFriend, friendData } = location.state;
  return (
    <>
      <Header pageName={pageName} />
      <div className={styles.wrapper}>
        <SearchBar />
        <span className={styles.friendCount}>
          친구 <span style={{ fontWeight: 700 }}>{friendData.length}</span>명
        </span>
        <div className={styles.friendListContainer}>
          {friendData.map((item) => (
            <FreindListBar
              friendName={item.userName}
              friendImg={item.img}
              isWithFriend={withChallengeFriend.includes(item.userName)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FriendList;
