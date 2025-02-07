// 채팅방 내의 전체 채팅을 렌더링하는 곳
import React, { useEffect, useRef, useState } from "react";
import styles from "./ChattingArea.module.css";
import ChattingComponent from "./ChattingComponent";
import sendMessage from "../../../../assets/Action/sendMessage.svg";
import axios from "axios";
import SockJS from "sockjs-client/";
import { Client } from "@stomp/stompjs";

// 1. 채팅방에 들어왔을 때 이전 대화 내용은 axios의 get으로 받음
// 2. 실시간 채팅은 websocket 연결하여 주고받는다.

// 서버 주소
const SERVER_URL = "https://moamoa.store/ws-stomp";

// 사용자의 데이터 예시
const userName = "아무개";
const userId = 4123;

const ChattingArea = ({ roomId }) => {
  // console.log("채팅방 ID : ", roomId);
  // SockJS + Stomp 클라이언트 생성
  const socket = new SockJS(SERVER_URL);
  const stompClient = new Client({
    webSocketFactory: () => socket,
    debug: (str) => console.log(str),
    reconnectDelay: 5000, // 재연결 시도 시간(ms)
  });

  // WebSocket 연결
  stompClient.onConnect = (frame) => {
    console.log("Connected: " + frame);
  };

  // 연결 시작
  stompClient.activate();

  const [chattings, setChattings] = useState([]);
  // ✅ axios로 서버에서 채팅 데이터 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://moamoa.store/chat/rooms/${roomId}/messages`
      );
      const groupedData = groupChatsByDate(response.data.result);
      setChattings(groupedData); // 채팅 데이터 상태 업데이트
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // 날짜별로 데이터 그룹화
  const groupChatsByDate = (chatArray) => {
    const grouped = {};
    chatArray.forEach((chat) => {
      const date = new Date(chat.createdAt);
      const formattedDate = date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      });
      const time = date.toLocaleTimeString("ko-KR", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      if (!grouped[formattedDate]) {
        grouped[formattedDate] = {
          id: Object.keys(grouped).length + 1,
          date: formattedDate,
          chat: [],
        };
      }
      grouped[formattedDate].chat.push({
        id: chat.chatId,
        nickname: chat.userName,
        profile: "People",
        img: "http://placehold.co/45",
        chatting: chat.content,
        time: time,
        isMe: chat.userName === userName,
      });
    });

    return Object.values(grouped);
  };
  // ✅ 컴포넌트가 처음 렌더링될 때 한 번만 실행
  useEffect(() => {
    fetchData();
  }, [roomId]); // roomId가 변경될 때 다시 실행

  // const [chatEx, setChatEx] = useState(chatData);
  const [sendMsg, setSendMsg] = useState("");

  // useRef를 이용해 스크롤을 자동으로 맨 밑으로 이동하게 함.
  const bottomRef = useRef(null);
  // 초기 렌더링 시 가장 아래로 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" }); // 초기 렌더링에서는 부드럽지 않게 즉시 이동
  }, []);
  // 채팅이 추가될 때마다 스크롤을 가장 아래로 이동
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chattings]);

  const handleSendMsg = (userGroupId, userId, content) => {
    if (stompClient.connected) {
      stompClient.publish({
        destination: "/pub/message",
        body: JSON.stringify({
          userGroupId: userGroupId,
          userId: userId,
          content: content,
        }),
      });
    } else {
      console.error("WebSocket is not connected.");
    }
    // 1) 먼저 공백만 있는 경우는 return
    // if (!message.trim()) return;
    // setChatEx((prevChatEx) => {
    //   // 2) 두 번째 날짜(id: 2)를 찾아서 그 day의 chat 배열에만 새 메시지를 추가
    //   // 날짜 id관련은 추후에 수정 필요
    //   return prevChatEx.map((day) => {
    //     if (day.id === 2) {
    //       // 새 메시지의 id는 기존 chat 배열의 마지막 id + 1
    //       const newId =
    //         day.chat.length > 0 ? day.chat[day.chat.length - 1].id + 1 : 1;
    //       // 현재 시간 가져오기
    //       const timeString = new Date().toLocaleTimeString("ko-KR", {
    //         hour: "numeric",
    //         minute: "2-digit",
    //         hour12: true,
    //       });
    //       // 새로 추가할 메시지 객체
    //       const newMessage = {
    //         id: newId,
    //         nickname: { userName },
    //         profile: "People",
    //         img: "http://placehold.co/45",
    //         chatting: message, // 속성명 'chatting' (기존 데이터와 동일하게)
    //         time: timeString, // 함수를 호출해 실제 시간 문자열 반환
    //         isMe: true,
    //       };
    //       // 해당 day의 chat 배열 뒤에 새 메시지를 붙여서 반환
    //       return {
    //         ...day,
    //         chat: [...day.chat, newMessage],
    //       };
    //     } else {
    //       // id가 2가 아닌 day는 변경 없이 그대로 반환
    //       return day;
    //     }
    //   });
    // });
    // 입력창 초기화
    // setMessage("");
  };

  // onKeyDown, onKeyUp은 키를 누르고 떼는 동작 자체에 반응함.
  // 엔터 시 handleSendMsg를 실행하고 shift+엔터는 줄바꿈을 함.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMsg(roomId, userId, sendMsg);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMsg(roomId, userId, sendMsg);
    }
  };

  return (
    <div className={styles.ChattingArea}>
      <div style={{ paddingBottom: "80px" }}>
        {chattings.map((item) => (
          <div className={styles.EachDateChatting} key={item.id}>
            <div className={styles.DateContainer}>{item.date}</div>
            <div className={styles.ChattingWrapper}>
              {item.chat.map((chat) => (
                <ChattingComponent
                  key={chat.id}
                  nickname={chat.nickname}
                  profileImg="http://placehold.co/45"
                  chatting={chat.chatting}
                  chatTime={chat.time}
                  isMe={chat.userName === userName}
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
        <img
          src={sendMessage}
          alt="메세지 보내기"
          onClick={() => handleSendMsg(roomId, userId, sendMsg)}
        />
      </div>
    </div>
  );
};

export default ChattingArea;
