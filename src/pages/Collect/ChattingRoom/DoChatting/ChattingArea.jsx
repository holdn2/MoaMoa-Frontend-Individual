// 채팅방 내의 전체 채팅을 렌더링하는 곳
import React, { useEffect, useRef, useState } from "react";
import styles from "./ChattingArea.module.css";
import ChattingComponent from "./ChattingComponent";
import sendMessage from "../../../../assets/Action/sendMessage.svg";
import { fetchChatData } from "../../../../apis/chat";
import { initializeSocket } from "../../../../apis/chat";

// apis폴더에 api 저장.
// 1. 채팅방에 들어왔을 때 이전 대화 내용은 axios의 get으로 받음.
// 2. 실시간 채팅은 websocket 연결하여 주고 받음.

const ChattingArea = ({ roomId }) => {
  // console.log("채팅방 ID : ", roomId);
  // 이전 채팅 내역 조회할 때 해당 채팅들 저장할 배열
  const [chattings, setChattings] = useState([]);
  // 보낼 메시지를 저장할 상태
  const [sendMsg, setSendMsg] = useState("");
  // stompClient를 useRef로 선언
  const stompClientRef = useRef(null);
  // 웹소켓이 연결된 이후에만 메시지를 보낼 수 있는 것을 관리하는 상태
  const [canSend, setCanSend] = useState(false);

  // userId 저장
  const [userId, setUserId] = useState(0);

  // 컴포넌트가 처음 렌더링될 때 한 번만 실행. apis에 폴더에 해당 함수 있음.
  useEffect(() => {
    fetchChatData(roomId, setUserId, setChattings);
  }, [roomId]); // roomId가 변경될 때(채팅방을 들어갈 때) 다시 실행

  // SockJS + Stomp 클라이언트 생성. 실시간 채팅을 위한 구현.
  useEffect(() => {
    // apis폴더에 저장된 함수
    const client = initializeSocket(roomId, userId, setCanSend, setChattings);
    stompClientRef.current = client; // stompClient를 useRef에 저장

    return () => {
      client.deactivate();
      setCanSend(false);
    };
  }, [roomId]);

  // 유저가 메시지 전송 시 실행되는 함수
  const handleSendMsg = (userGroupId, userId, content) => {
    // 공백만 있는 경우 보내지않고 바로 return
    if (!content.trim()) return;
    if (stompClientRef.current && stompClientRef.current.connected) {
      stompClientRef.current.publish({
        destination: "/pub/message",
        body: JSON.stringify({
          userGroupId: userGroupId,
          userId: userId,
          content: content,
        }),
      });
      setSendMsg(""); // 메시지 전송 후 입력창 초기화
    } else {
      console.error("WebSocket is not connected.");
    }
  };

  // useRef를 이용해 스크롤을 자동으로 맨 밑으로 이동하게 함.
  const bottomRef = useRef(null);
  // 초기 렌더링 시 가장 아래로 스크롤
  useEffect(() => {
    // 초기 렌더링에서는 부드럽지 않게 즉시 이동
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, []);
  // 채팅이 추가될 때마다 스크롤을 가장 아래로 이동
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chattings]);

  // onKeyDown, onKeyUp은 키를 누르고 떼는 동작 자체에 반응함.
  // 엔터 시 handleSendMsg를 실행하고 shift+엔터는 줄바꿈을 함.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && canSend) {
      e.preventDefault();
      handleSendMsg(roomId, userId, sendMsg);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && !e.shiftKey && canSend) {
      e.preventDefault();
      handleSendMsg(roomId, userId, sendMsg);
    }
  };

  return (
    <div className={styles.ChattingArea}>
      <div style={{ paddingBottom: "80px" }}>
        {[...chattings].reverse().map((item) => (
          <div className={styles.EachDateChatting} key={item.id}>
            <div className={styles.DateContainer}>{item.date}</div>
            <div className={styles.ChattingWrapper}>
              {[...item.chat].reverse().map((chat) => (
                <ChattingComponent
                  key={chat.id}
                  nickname={chat.nickname}
                  profileImg="http://placehold.co/45"
                  chatting={chat.chatting}
                  chatTime={chat.time}
                  isMe={chat.isMe}
                />
              ))}
            </div>
          </div>
        ))}
        {/* 스크롤 이동을 위한 Ref */}
        <div ref={bottomRef} />
      </div>
      <div className={styles.InputWrapper}>
        <textarea
          className={styles.InputTextContainer}
          type="text"
          placeholder="메세지 작성 ..."
          value={sendMsg}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={(e) => {
            const newMsg = e.target.value;
            setSendMsg(newMsg);
          }}
        />
        {canSend ? (
          <img
            src={sendMessage}
            alt="메세지 보내기"
            onClick={() => {
              if (canSend) {
                handleSendMsg(roomId, userId, sendMsg);
              }
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ChattingArea;
