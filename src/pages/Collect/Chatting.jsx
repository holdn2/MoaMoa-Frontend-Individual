import React, { useState } from "react";
import styles from "./Chatting.module.css";
import { useNavigate } from "react-router-dom";

const Chatting = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
  return (
    <div className={styles.TotalChatContainer}>
      {chatData.length > 0 ? (
        <>
          {chatData.map((item) => (
            <div
              key={item.id}
              className={styles.EachChatContainer}
              onClick={() => navigate(`/chatroom/${item.id}`)}
            >
              <img
                src="http://placehold.co/45"
                alt="채팅방 사진"
                style={{ borderRadius: "50%" }}
              />
              <div className={styles.ChatTextWrapper}>
                <span className={styles.ChatRoomTitle}>{item.roomName}</span>
                <span className={styles.RecentChat}>{item.recentChat}</span>
              </div>
              <div className={styles.TimeUnreadWrapper}>
                <div className={styles.RecentChatTime}>{item.recentTime}</div>
                {item.unreadCnt ? (
                  <div className={styles.UnreadChatCnt}>+{item.unreadCnt}</div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
          <img
            onClick={() => console.log("채팅 만들기")}
            src="../src/assets/Btn/chatPlusBtn.svg"
            alt="채팅 만들기 버튼"
            style={{ position: "fixed", right: "20px", bottom: "40px" }}
          />
        </>
      ) : (
        <div className={styles.NoChatRoomContainer}>
          <span className={styles.BoldText}>
            현재 진행중인 채팅이 없어요
            <br />
            직접 채팅방을 만들고 시작해보세요!
          </span>
          <span
            className={styles.NormalText}
            style={{ borderBottom: "1px solid #919191" }}
            onClick={() => console.log("채팅 만들러 가기")}
          >
            채팅방 만들러 가기
          </span>
        </div>
      )}
    </div>
  );
};

export default Chatting;

const chatData = [
  {
    id: 1,
    roomName: "절약특공대",
    recentChat: "안녕하세요~~~화이팅합시다!!!",
    recentTime: "19:20",
    unreadCnt: 3,
  },
  {
    id: 2,
    roomName: "모아모아짱",
    recentChat: "모아모아 화이팅..!",
    recentTime: "19:02",
    unreadCnt: 17,
  },
  {
    id: 3,
    roomName: "프론트엔드",
    recentChat: "생각보다 어렵네요ㅠㅠㅠ",
    recentTime: "17:50",
    unreadCnt: 0,
  },
  {
    id: 4,
    roomName: "절약특공대",
    recentChat: "안녕하세요~~~화이팅합시다!!!",
    recentTime: "2일전",
    unreadCnt: 3,
  },
  {
    id: 5,
    roomName: "절약특공대",
    recentChat: "안녕하세요~~~화이팅합시다!!!",
    recentTime: "3일전",
    unreadCnt: 0,
  },
  {
    id: 6,
    roomName: "절약특공대",
    recentChat: "안녕하세요~~~화이팅합시다!!!",
    recentTime: "37일전",
    unreadCnt: 0,
  },
];
