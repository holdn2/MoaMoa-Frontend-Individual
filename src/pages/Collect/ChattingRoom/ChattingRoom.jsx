import React, { useEffect, useState } from "react";
import styles from "./ChattingRoom.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import ExitRoomModal from "./SideMenu/ExitRoomModal";
import ChattingArea from "./DoChatting/ChattingArea";
import AcceptChallengeModal from "./AcceptChallengeModal";
import category from "../../../assets/Component1/category.svg";
import arrowRight from "../../../assets/Navigation/arrowRight.svg";
import closeBig from "../../../assets/Navigation/closeBig.svg";
import editRoomName from "../../../assets/Content/editRoomName.svg";
import invite from "../../../assets/Action/invite.svg";
import makeChallenge from "../../../assets/Content/makeChallenge.svg";
import pastChallenge from "../../../assets/Content/pastChallenge.svg";
import exit from "../../../assets/Action/exit.svg";

const ChattingRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [roomInfo, setRoomInfo] = useState(location.state?.chatData);
  // 사이드 메뉴 열기 및 닫기 관련
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // 챌린지 관련 정보 상태
  const [challengeData, setChallengeData] = useState(currentChallenge);

  useEffect(() => {
    // console.log(challengeData);
  }, [challengeData]);

  // 채팅방 나가기 관련 모달상태
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  // 챌린지 수락 관련 모달상태
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);

  return (
    <>
      <div className={styles.ChatRoomPageContainer}>
        <div className={styles.TopContentContainer}>
          <Header pageName={roomInfo.title} />
          <img
            src={category}
            alt="메뉴"
            className={styles.RoomMenu}
            onClick={toggleMenu}
          />
          {challengeData ? (
            <div
              className={styles.ChallengeInfoContainer}
              onClick={() => {
                if (challengeData.isAccept) {
                  navigate("/challenge/detail", {
                    state: { selectedChallenge: detailChallenge },
                  });
                } else {
                  setIsChallengeModalOpen(true);
                }
              }}
            >
              <div className={styles.ChallengeTextContainer}>
                <span className={styles.ChallengeTitle}>
                  {challengeData.title}
                </span>
                <div style={{ display: "flex", gap: "14px" }}>
                  <span className={styles.ChallengeText}>
                    {challengeData.coin}코인
                  </span>
                  <span className={styles.ChallengeText}>
                    {challengeData.date}
                  </span>
                  <span
                    className={styles.ChallengeText}
                    style={{ color: "#848484" }}
                  >
                    {challengeData.people}명
                  </span>
                </div>
              </div>
              <img
                className={styles.ToChallengeArrow}
                src={arrowRight}
                alt="챌린지 보러가기"
              />
            </div>
          ) : (
            <div
              className={styles.ChallengeInfoContainer}
              onClick={() => navigate(`/chatroom/${roomInfo.id}/roomchallenge`)}
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
                src={arrowRight}
                alt="챌린지 만들러가기"
              />
            </div>
          )}
        </div>
        <AcceptChallengeModal
          isModalOpen={isChallengeModalOpen}
          setIsModalOpen={setIsChallengeModalOpen}
          challengeData={challengeData}
          setChallengeData={setChallengeData}
        />
        <div className={styles.MainArea}>
          <div>
            <ChattingArea roomId={roomInfo.id} />
          </div>
        </div>
        <ExitRoomModal
          isModalOpen={isExitModalOpen}
          setIsModalOpen={setIsExitModalOpen}
          roomId={roomInfo.id}
        />
      </div>
      {isMenuOpen ? (
        <div className={styles.ChatRoomMenu} onClick={toggleMenu}>
          <div
            className={styles.SideMenuContainer}
            onClick={(e) => e.stopPropagation()} // 사이드 메뉴 클릭 시에는 상위요소로 이벤트 전파 방지
          >
            <img
              src={closeBig}
              alt="메뉴 닫기"
              onClick={toggleMenu}
              style={{ marginTop: "49px", marginLeft: "24px" }}
            />
            <div className={styles.AllMenuWrapper}>
              <div
                className={styles.EachMenuContainer}
                onClick={() =>
                  navigate(`/chatroom/${roomInfo.id}/roomnamechange`, {
                    state: { userGroupId: roomInfo.id },
                  })
                }
              >
                <img src={editRoomName} alt="채팅방 이름 변경" />
                <span className={styles.MenuText}>채팅방 이름 변경</span>
              </div>
              <div
                className={styles.EachMenuContainer}
                onClick={() =>
                  navigate(`/chatroom/${roomInfo.id}/roominvitefriend`)
                }
              >
                <img src={invite} alt="친구 초대" />
                <span className={styles.MenuText}>친구 초대</span>
              </div>
              <div
                className={styles.EachMenuContainer}
                onClick={() =>
                  navigate(`/chatroom/${roomInfo.id}/roomchallenge`)
                }
              >
                <img src={makeChallenge} alt="챌린지 만들기" />
                <span className={styles.MenuText}>챌린지 만들기</span>
              </div>
              <div
                className={styles.EachMenuContainer}
                onClick={() =>
                  navigate(`/chatroom/${roomInfo.id}/pastchallenge`, {
                    state: { roomId: roomInfo.id },
                  })
                }
              >
                <img src={pastChallenge} alt="지난 챌린지" />
                <span className={styles.MenuText}>지난 챌린지</span>
              </div>
            </div>
            <div
              className={styles.EachMenuContainer}
              style={{ marginTop: "230px" }}
              onClick={() => setIsExitModalOpen(true)}
            >
              <img src={exit} alt="채팅방 나가기" />
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

const currentChallenge = {
  id: "asdf",
  title: "1주일에 5만원으로 살아남기",
  coin: 500,
  date: "11/10 (수)",
  people: 4,
  isAccept: false,
};

const detailChallenge = {
  id: 1,
  challengeName: "1주일 5만원으로 살아남기",
  challengeInfo: "이제는 돈을 아껴야 할 때! 소비부터 같이 줄여봐요",
  startDate: "2024-11-15",
  endDate: "2024-11-22",
  coin: 300,
  people: 127,
  public: true,
  category: "taxi",
  isJoined: true,
  percent: 50,
  with: [
    {
      id: 1,
      userName: "황금돼지될래",
      userImg: "http://placehold.co/49",
      percent: 40,
    },
    {
      id: 2,
      userName: "김모아모아",
      userImg: "http://placehold.co/49",
      percent: 80,
    },
    {
      id: 3,
      userName: "햎피그",
      userImg: "http://placehold.co/49",
      percent: 50,
    },
    {
      id: 4,
      userName: "도니도니",
      userImg: "http://placehold.co/49",
      percent: 70,
    },
    {
      id: 5,
      userName: "짱모아",
      userImg: "http://placehold.co/49",
      percent: 20,
    },
  ],
};
