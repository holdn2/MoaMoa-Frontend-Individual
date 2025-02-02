// 채팅방 내의 전체 채팅을 렌더링하는 곳
import React, { useEffect, useRef, useState } from "react";
import styles from "./ChattingArea.module.css";
import ChattingComponent from "./ChattingComponent";
import sendMessage from "../../../assets/Action/sendMessage.svg";

const ChattingArea = () => {
  const [chatEx, setChatEx] = useState(chatData);
  const [message, setMessage] = useState("");
  const userName = "아무개";

  // useRef를 이용해 스크롤을 자동으로 맨 밑으로 이동하게 함.
  const bottomRef = useRef(null);
  // 초기 렌더링 시 가장 아래로 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" }); // 초기 렌더링에서는 부드럽지 않게 즉시 이동
  }, []);
  // 채팅이 추가될 때마다 스크롤을 가장 아래로 이동
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatEx]);

  const handleSendMsg = () => {
    // 1) 먼저 공백만 있는 경우는 return
    if (!message.trim()) return;

    setChatEx((prevChatEx) => {
      // 2) 두 번째 날짜(id: 2)를 찾아서 그 day의 chat 배열에만 새 메시지를 추가
      // 날짜 id관련은 추후에 수정 필요
      return prevChatEx.map((day) => {
        if (day.id === 2) {
          // 새 메시지의 id는 기존 chat 배열의 마지막 id + 1
          const newId =
            day.chat.length > 0 ? day.chat[day.chat.length - 1].id + 1 : 1;

          // 현재 시간 가져오기
          const timeString = new Date().toLocaleTimeString("ko-KR", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          });

          // 새로 추가할 메시지 객체
          const newMessage = {
            id: newId,
            nickname: { userName },
            profile: "People",
            img: "http://placehold.co/45",
            chatting: message, // 속성명 'chatting' (기존 데이터와 동일하게)
            time: timeString, // 함수를 호출해 실제 시간 문자열 반환
            isMe: true,
          };

          // 해당 day의 chat 배열 뒤에 새 메시지를 붙여서 반환
          return {
            ...day,
            chat: [...day.chat, newMessage],
          };
        } else {
          // id가 2가 아닌 day는 변경 없이 그대로 반환
          return day;
        }
      });
    });
    // 입력창 초기화
    setMessage("");
  };

  // onKeyDown, onKeyUp은 키를 누르고 떼는 동작 자체에 반응함.
  // 엔터 시 handleSendMsg를 실행하고 shift+엔터는 줄바꿈을 함.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMsg();
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMsg();
    }
  };

  return (
    <div className={styles.ChattingArea}>
      <div style={{ paddingBottom: "80px" }}>
        {chatEx.map((item) => (
          <div className={styles.EachDateChatting} key={item.date}>
            <div className={styles.DateContainer}>{item.date}</div>
            <div className={styles.ChattingWrapper}>
              {item.chat.map((chat) => (
                <ChattingComponent
                  key={chat.id}
                  nickname={chat.nickname}
                  profileImg={chat.img}
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
          value={message}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={(e) => {
            const newMsg = e.target.value;
            setMessage(newMsg);
          }}
        />
        <img src={sendMessage} alt="메세지 보내기" onClick={handleSendMsg} />
      </div>
    </div>
  );
};

export default ChattingArea;

const chatData = [
  {
    id: 1,
    date: "2024년 11월 08일 (금)",
    chat: [
      {
        id: 1,
        nickname: "양준석(팀장)",
        profile: "People",
        img: "http://placehold.co/45",
        chatting: `안녕하세요 프론트엔드 팀원 여러분,
                        다음 주 수요일에 예정된 정기 회의 관련 공지드립니다.
      
                        이번 회의에서는 각 부서별로 발표가 있을 예정입니다. 주요
                        내용은 아래와 같습니다:
      
                        1. 운영팀: 최근 배달 효율성 개선 프로젝트 진행 상황 보고
                        2. 마케팅팀: 신규 프로모션 캠페인 계획 및 기대 효과 발표
                        3. 기술팀: 앱 업데이트 및 새로운 기능 소개
                        4. 고객지원팀: 고객 만족도 조사 결과 및 개선 방안 발표
      
                        우리 프론트엔드 팀에서는 새로운 사용자 인터페이스 개선 사항과
                        현재 진행 중인 프로젝트의 진척도를 공유할 예정입니다. 각
                        팀원은 본인의 작업 부분에 대해 간단한 업데이트를 준비해
                        주세요.`,
        time: "오후 5:06",
        isMe: false,
      },
      {
        id: 2,
        nickname: "아무개",
        profile: "People",
        img: "http://placehold.co/45",
        chatting: `신규 개발 중인 개인정보 수정 탭의 사이드 탭의 UI 개발 을 맡고
                        있는 해당 팀원 분들은 저에게 진척 사항 공유 부탁드립니다~ 발표
                        자료에 포함시킬 예정입니다.`,
        time: "오후 5:07",
        isMe: true,
      },
      {
        id: 3,
        nickname: "김민수",
        profile: "People",
        img: "http://placehold.co/45",
        chatting: `저랑 이지현 팀원이 개발 중에 있습니다! 진척 상황 노션에
                        정리하여 곧 공유드리겠습니다!`,
        time: "오후 5:08",
        isMe: false,
      },
      {
        id: 4,
        nickname: "아무개",
        profile: "People",
        img: "http://placehold.co/45",
        chatting: `신규 개발 중인 개인정보 수정 탭의 사이드 탭의 UI 개발 을 맡고
                        있는 해당 팀원 분들은 저에게 진척 사항 공유 부탁드립니다~ 발표
                        자료에 포함시킬 예정입니다.`,
        time: "오후 5:09",
        isMe: true,
      },
    ],
  },
  {
    id: 2,
    date: "2024년 11월 20일 (수)",
    chat: [
      {
        id: 1,
        nickname: "양준석(팀장)",
        profile: "People",
        img: "http://placehold.co/45",
        chatting: `안녕하세요 프론트엔드 팀원 여러분,
                        다음 주 수요일에 예정된 정기 회의 관련 공지드립니다.
      
                        이번 회의에서는 각 부서별로 발표가 있을 예정입니다. 주요
                        내용은 아래와 같습니다:
      
                        1. 운영팀: 최근 배달 효율성 개선 프로젝트 진행 상황 보고
                        2. 마케팅팀: 신규 프로모션 캠페인 계획 및 기대 효과 발표
                        3. 기술팀: 앱 업데이트 및 새로운 기능 소개
                        4. 고객지원팀: 고객 만족도 조사 결과 및 개선 방안 발표
      
                        우리 프론트엔드 팀에서는 새로운 사용자 인터페이스 개선 사항과
                        현재 진행 중인 프로젝트의 진척도를 공유할 예정입니다. 각
                        팀원은 본인의 작업 부분에 대해 간단한 업데이트를 준비해
                        주세요.`,
        time: "오후 5:06",
        isMe: false,
      },
      {
        id: 2,
        nickname: "아무개",
        profile: "People",
        img: "http://placehold.co/45",
        chatting: `신규 개발 중인 개인정보 수정 탭의 사이드 탭의 UI 개발 을 맡고
                        있는 해당 팀원 분들은 저에게 진척 사항 공유 부탁드립니다~ 발표
                        자료에 포함시킬 예정입니다.`,
        time: "오후 5:07",
        isMe: true,
      },
      {
        id: 3,
        nickname: "김민수",
        profile: "People",
        img: "http://placehold.co/45",
        chatting: `저랑 이지현 팀원이 개발 중에 있습니다! 진척 상황 노션에
                        정리하여 곧 공유드리겠습니다!`,
        time: "오후 5:08",
        isMe: false,
      },
      {
        id: 4,
        nickname: "아무개",
        profile: "People",
        img: "http://placehold.co/45",
        chatting: `신규 개발 중인 개인정보 수정 탭의 사이드 탭의 UI 개발 을 맡고
                        있는 해당 팀원 분들은 저에게 진척 사항 공유 부탁드립니다~ 발표
                        자료에 포함시킬 예정입니다.`,
        time: "오후 5:09",
        isMe: true,
      },
    ],
  },
];
