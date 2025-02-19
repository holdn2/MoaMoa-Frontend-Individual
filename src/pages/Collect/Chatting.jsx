import React, { useEffect, useState } from "react";
import styles from "./Chatting.module.css";
import { useNavigate } from "react-router-dom";
import chatPlusBtn from "../../assets/Btn/chatPlusBtn.svg";
import { fetchChatRoomData } from "../../apis/chatroom";
import { getUserInfo } from "../../apis/mypage";

const userId = 1;

const Chatting = () => {
  const navigate = useNavigate();
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    fetchChatRoomData((data) => {
      // 최근 메시지(createdAt)를 기준으로 내림차순 정렬
      const sortedData = [...data].sort((a, b) => {
        const dateA = new Date(a.recentChat?.createdAt || 0);
        const dateB = new Date(b.recentChat?.createdAt || 0);
        return dateB - dateA; // 최신 메시지가 위로 오도록 정렬
      });
      setChatData(sortedData);
    });
  }, []);

  const formatChatTime = (createdAt) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffInMs = now - createdDate;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 24) {
      return createdDate.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    } else if (diffInDays === 1) {
      return "1일전";
    } else {
      return `${diffInDays}일전`;
    }
  };

  return (
    <div className={styles.TotalChatContainer}>
      {chatData.length > 0 ? (
        <div style={{ paddingBottom: "40px" }}>
          {chatData.map((item, index) => (
            <div
              key={index}
              className={styles.EachChatContainer}
              onClick={() => {
                const selectedChatroom = chatData.find(
                  (chat) => chat.id === item.id
                );
                navigate(`/chatroom/${item.id}`, {
                  state: { chatData: selectedChatroom },
                });
              }}
            >
              <img
                src="http://placehold.co/45"
                alt="채팅방 사진"
                style={{ borderRadius: "50%" }}
              />
              <div className={styles.ChatTextWrapper}>
                <span className={styles.ChatRoomTitle}>{item.title}</span>
                {item.recentChat ? (
                  <span className={styles.RecentChat}>
                    {item.recentChat.content}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className={styles.TimeUnreadWrapper}>
                {item.recentChat ? (
                  <div className={styles.RecentChatTime}>
                    {formatChatTime(item.recentChat.createdAt)}
                  </div>
                ) : (
                  <></>
                )}

                {item.unreadCount !== 0 ? (
                  <div className={styles.UnreadChatCnt}>
                    +{item.unreadCount}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
          <img
            onClick={() => navigate("/makeroom")}
            src={chatPlusBtn}
            alt="채팅 만들기 버튼"
            style={{ position: "fixed", right: "20px", bottom: "80px" }}
          />
        </div>
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
            onClick={() => navigate("/makeroom")}
          >
            채팅방 만들러 가기
          </span>
        </div>
      )}
    </div>
  );
};

export default Chatting;
