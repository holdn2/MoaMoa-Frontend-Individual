import React, { useState } from "react";
import styles from "./RoomInviteFriend.module.css";
import Header from "../../../../components/Header/Header";
import { useParams } from "react-router-dom";
import SearchBar from "../../../../components/SearchBar/SearchBar";

const RoomInviteFriend = () => {
  const pageName = "친구 목록";
  const params = useParams();
  //   console.log("채팅방 ID : ", params.chatroomId);

  // 친구 검색
  const [filteredfriends, setFilteredfriends] = useState([]);
  const [isInputText, setIsInputText] = useState("");

  return (
    <div className={styles.PageWrapper}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <SearchBar
          setIsInputText={setIsInputText}
          setFiltered={setFilteredfriends}
          allData={friendData}
        />
        {isInputText.length ? (
          <>
            <span className={styles.FriendCnt}>
              친구{" "}
              <span style={{ fontWeight: "700" }}>
                {filteredfriends.length}
              </span>
              명
            </span>
            <div className={styles.AllFriends}>
              {filteredfriends.map((item) => (
                <div
                  key={item.id}
                  className={styles.EachFriendContainer}
                  onClick={() => console.log(item.userName, "님 초대")}
                >
                  <img
                    src="http://placehold.co/50"
                    alt="프로필 사진"
                    style={{ borderRadius: "50%", marginLeft: "20px" }}
                  />
                  <span className={styles.UsernameStyle}>{item.userName}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <span className={styles.FriendCnt}>
              친구{" "}
              <span style={{ fontWeight: "700" }}>{friendData.length}</span>명
            </span>
            <div className={styles.AllFriends}>
              {friendData.map((item) => (
                <div
                  key={item.id}
                  className={styles.EachFriendContainer}
                  onClick={() => console.log(item.userName, "님 초대")}
                >
                  <img
                    src="http://placehold.co/50"
                    alt="프로필 사진"
                    style={{ borderRadius: "50%", marginLeft: "20px" }}
                  />
                  <span className={styles.UsernameStyle}>{item.userName}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RoomInviteFriend;

const friendData = [
  {
    id: 1,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 2,
    userName: "금나와라",
    img: "",
  },
  {
    id: 3,
    userName: "골든피기",
    img: "",
  },
  {
    id: 4,
    userName: "피그핑",
    img: "",
  },
  {
    id: 5,
    userName: "모아모아짱",
    img: "",
  },
  {
    id: 6,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 7,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 8,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 9,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 10,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 11,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 12,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 13,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 14,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 15,
    userName: "럭키머니",
    img: "",
  },
];
