// 채팅내역 및 실시간 채팅 관련 api
import axios from "axios";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

// axios로 서버에서 채팅 데이터 가져오는 함수
export const fetchChatData = async (roomId, setUserId, setChattings) => {
  try {
    const response = await axios.get(
      `https://moamoa.store/chat/rooms/${roomId}/messages`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    const userId = response.data.result.loginUserId;
    setUserId(userId);
    const groupedData = groupChatsByDate(response.data.result.messages, userId);
    setChattings(groupedData); // 채팅 데이터 상태 업데이트
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
// 불러온 채팅내역 날짜별로 데이터 그룹화하는 함수. 날짜별로 배열 생성.
const groupChatsByDate = (chatArray, userId) => {
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
      isMe: chat.userId === userId,
    });
  });

  return Object.values(grouped).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
};

// 실시간 채팅 서버 주소
const SERVER_URL = "https://moamoa.store/ws-stomp";

// 웹소켓 클라이언트 초기화
export const initializeSocket = (roomId, userId, setCanSend, setChattings) => {
  const socket = new SockJS(SERVER_URL);
  const client = new Client({
    webSocketFactory: () => socket,
    connectHeaders: {
      //   Authorization:
      //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
      //
    },
    debug: (str) => console.log(str),
    reconnectDelay: 5000, // 재연결 시도 시간(ms)
  });

  client.onConnect = (frame) => {
    console.log("Connected: " + frame);
    setCanSend(true);

    // 채팅방 구독
    client.subscribe(`/sub/chat/room/${roomId}`, (message) => {
      const newMsg = JSON.parse(message.body);
      handleIncomingMsg(userId, newMsg, setChattings);
    });
  };

  // 에러 발생 시 메시지 전송 비활성화
  client.onStompError = () => {
    setCanSend(false);
  };

  client.activate(); // 연결 시작

  return client;
};

// 새로운 메시지 처리 함수. 구독 중일 때 새로운 메시지 발생 시 실행되는 함수
const handleIncomingMsg = (userId, newMsg, setChattings) => {
  setChattings((prevChattings) => {
    const date = new Date(newMsg.createdAt);
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

    const newChat = {
      id: newMsg.chatId,
      nickname: newMsg.userName,
      profile: "People",
      img: "http://placehold.co/45",
      chatting: newMsg.content,
      time: time,
      isMe: true,
    };

    const existingDate = prevChattings.find(
      (day) => day.date === formattedDate
    );
    if (existingDate) {
      return prevChattings.map((day) =>
        day.date === formattedDate
          ? { ...day, chat: [newChat, ...day.chat] }
          : day
      );
    } else {
      return [
        {
          id: prevChattings.length + 1,
          date: formattedDate,
          chat: [newChat],
        },
        ...prevChattings,
      ];
    }
  });
};
