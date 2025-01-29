import React from "react";
import styles from "./FriendSearch.module.css";

const FriendSearch = () => {
  const pageName = "친구 추가";
  const [isInputText, setIsInputText] = useState("");
  const [filtered, setFiltered] = useState([]);
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
                isNotFriend={friendArray.includes(item.userName)}
                isWithFriend={withChallengeFriend.includes(item.userName)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default FriendSearch;
