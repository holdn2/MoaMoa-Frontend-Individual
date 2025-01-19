import React from "react";
import styles from "./ChattingComponent.module.css";

const ChattingComponent = ({
  nickname,
  profileImg,
  chatting,
  chatTime,
  isMe,
}) => {
  return (
    <div className={styles.ChattingContainer}>
      {isMe ? (
        <div className={styles.MyChattingContainer}>
          <span className={styles.DateText}>{chatTime}</span>
          <div className={styles.MyChatting}>{chatting}</div>
        </div>
      ) : (
        <div className={styles.OtherChattingContainer}>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src={profileImg}
              alt="프로필 사진"
              style={{ borderRadius: "50%", marginTop: "5px" }}
            />
          </div>

          <div className={styles.NameChatWrapper}>
            <span className={styles.OtherNickname}>{nickname}</span>
            <div>
              <span className={styles.OtherChatting}>{chatting}</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <span className={styles.DateText}>{chatTime}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChattingComponent;
