import React, { useState } from "react";
import styles from "./ChattingRoom.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import ExitRoomModal from "./SideMenu/ExitRoomModal";
import ChattingArea from "./DoChatting/ChattingArea";

const ChattingRoom = () => {
  const navigate = useNavigate();
  const params = useParams();
  //   console.log("채팅방 ID : ", params.chatroomId);
  const roomInfo = chatData.filter(
    (item) => item.id === Number(params.chatroomId)
  );
  // 사이드 메뉴 열기 및 닫기 관련
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // 채팅방 나가기 관련 모달상태
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [exitRoom, setExitRoom] = useState(false); // 채팅방 나가기 상태

  return (
    <>
      <div className={styles.ChatRoomPageContainer}>
        <div className={styles.TopContentContainer}>
          <Header pageName={roomInfo[0].roomName} />
          <img
            src="../src/assets/Component1/category.svg"
            alt="메뉴"
            className={styles.RoomMenu}
            onClick={toggleMenu}
          />
          {currentChallenge.length > 0 ? (
            <div
              className={styles.ChallengeInfoContainer}
              onClick={() => console.log("챌린지 보러가기")}
              style={{ background: "#fff" }}
            >
              <div className={styles.ChallengeTextContainer}>
                <span className={styles.ChallengeTitle}>
                  {currentChallenge[0].title}
                </span>
                <div style={{ display: "flex", gap: "14px" }}>
                  <span className={styles.ChallengeText}>
                    {currentChallenge[0].coin}코인
                  </span>
                  <span className={styles.ChallengeText}>
                    {currentChallenge[0].date}
                  </span>
                  <span
                    className={styles.ChallengeText}
                    style={{ color: "#848484" }}
                  >
                    {currentChallenge[0].people}명
                  </span>
                </div>
              </div>
              <img
                className={styles.ToChallengeArrow}
                src="../src/assets/Navigation/arrowRight.svg"
                alt="챌린지 보러가기"
              />
            </div>
          ) : (
            <div
              className={styles.ChallengeInfoContainer}
              onClick={() => console.log("챌린지 만들기")}
            >
              <div className={styles.ChallengeTextContainer}>
                <span className={styles.ChallengeTitle}>
                  아직 진행중인 챌린지가 없어요
                </span>
                <span className={styles.ChallengeText}>
                  친구들과 챌린지를 진행하고 코인도 얻어보세요!
                </span>
              </div>
              <img
                className={styles.ToChallengeArrow}
                src="../src/assets/Navigation/arrowRight.svg"
                alt="챌린지 만들러가기"
              />
            </div>
          )}
        </div>

        <div className={styles.MainArea}>
          <div>
            <ChattingArea />
          </div>
        </div>
        <ExitRoomModal
          isModalOpen={isExitModalOpen}
          setIsModalOpen={setIsExitModalOpen}
          setExitRoom={setExitRoom}
        />
      </div>
      {isMenuOpen ? (
        <div className={styles.ChatRoomMenu} onClick={toggleMenu}>
          <div
            className={styles.SideMenuContainer}
            onClick={(e) => e.stopPropagation()} // 사이드 메뉴 클릭 시에는 상위요소로 이벤트 전파 방지
          >
            <img
              src="../src/assets/Navigation/closeBig.svg"
              alt="메뉴 닫기"
              onClick={toggleMenu}
              style={{ marginTop: "49px", marginLeft: "24px" }}
            />
            <div className={styles.AllMenuWrapper}>
              <div
                className={styles.EachMenuContainer}
                onClick={() =>
                  navigate(`/chatroom/${params.chatroomId}/roomnamechange`)
                }
              >
                <img
                  src="../src/assets/Content/editRoomName.svg"
                  alt="채팅방 이름 변경"
                />
                <span className={styles.MenuText}>채팅방 이름 변경</span>
              </div>
              <div
                className={styles.EachMenuContainer}
                onClick={() =>
                  navigate(`/chatroom/${params.chatroomId}/roominvitefriend`)
                }
              >
                <img src="../src/assets/Action/invite.svg" alt="친구 초대" />
                <span className={styles.MenuText}>친구 초대</span>
              </div>
              <div className={styles.EachMenuContainer}>
                <img
                  src="../src/assets/Content/makeChallenge.svg"
                  alt="챌린지 만들기"
                />
                <span className={styles.MenuText}>챌린지 만들기</span>
              </div>
              <div
                className={styles.EachMenuContainer}
                onClick={() =>
                  navigate(`/chatroom/${params.chatroomId}/pastchallenge`)
                }
              >
                <img
                  src="../src/assets/Content/pastChallenge.svg"
                  alt="지난 챌린지"
                />
                <span className={styles.MenuText}>지난 챌린지</span>
              </div>
            </div>
            <div
              className={styles.EachMenuContainer}
              style={{ marginTop: "230px" }}
              onClick={() => setIsExitModalOpen(true)}
            >
              <img src="../src/assets/Action/exit.svg" alt="채팅방 나가기" />
              <span
                className={styles.MenuText}
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                채팅방 나가기
              </span>
            </div>
          </div>
          {isExitModalOpen ?? <></>}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ChattingRoom;

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

const currentChallenge = [
  {
    id: "asdf",
    title: "1주일에 5만원으로 살아남기",
    coin: 500,
    date: "11/10 (수)",
    people: 4,
  },
];
