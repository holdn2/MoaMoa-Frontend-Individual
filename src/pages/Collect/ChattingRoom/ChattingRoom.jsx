import React, { useEffect, useState } from "react";
import styles from "./ChattingRoom.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import ExitRoomModal from "./SideMenu/ExitRoomModal";
import ChattingArea from "./DoChatting/ChattingArea";
import category from "../../../assets/Component1/category.svg";
import arrowRight from "../../../assets/Navigation/arrowRight.svg";
import closeBig from "../../../assets/Navigation/closeBig.svg";
import editRoomName from "../../../assets/Content/editRoomName.svg";
import invite from "../../../assets/Action/invite.svg";
import makeChallenge from "../../../assets/Content/makeChallenge.svg";
import pastChallenge from "../../../assets/Content/pastChallenge.svg";
import exit from "../../../assets/Action/exit.svg";
import {
  getRoomCurrentChallenge,
  getRoomPeopleCnt,
} from "../../../apis/chatroom";

const ChattingRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [roomInfo, setRoomInfo] = useState(location.state?.chatData);
  // 사이드 메뉴 열기 및 닫기 관련
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 채팅방 인원 조회
  const [peopleCnt, setPeopleCnt] = useState(0);
  // 채팅방 현재 챌린지 조회
  const [currentChallengeData, setCurrentChallengeData] = useState({});
  useEffect(() => {
    getRoomCurrentChallenge(roomInfo.id, setCurrentChallengeData);
    getRoomPeopleCnt(roomInfo.id, setPeopleCnt);
  }, []);

  useEffect(() => {
    console.log(currentChallengeData);
  }, [currentChallengeData]);

  // 채팅방 나가기 관련 모달상태
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  // 날짜 형식 변경
  const formatToMonthDay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}/${day}`;
  };

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
          {currentChallengeData ? (
            <div
              className={styles.ChallengeInfoContainer}
              onClick={() => {
                // 서버에서 챌린지 수락 여부 보내줄것임
                currentChallengeData.isParticipating
                  ? // 챌린지 수락 상태이면
                    navigate("/challenge/detail", {
                      state: { selectedChallenge: currentChallengeData },
                    })
                  : // 챌린지 수락 전이면
                    navigate("/challengemodal/challengcard", {
                      state: { challenge: currentChallengeData },
                    });
              }}
            >
              <div className={styles.ChallengeTextContainer}>
                <span className={styles.ChallengeTitle}>
                  {currentChallengeData.title}
                </span>
                <div style={{ display: "flex", gap: "14px" }}>
                  <span className={styles.ChallengeText}>
                    {currentChallengeData.battleCoin}코인
                  </span>
                  <span className={styles.ChallengeText}>
                    {formatToMonthDay(currentChallengeData.startDate)}
                  </span>
                  <span
                    className={styles.ChallengeText}
                    style={{ color: "#848484" }}
                  >
                    {currentChallengeData.participantCount}명
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
              onClick={() =>
                navigate(`/chatroom/${roomInfo.id}/roomchallenge`, {
                  state: { peopleCnt: peopleCnt },
                })
              }
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
                  navigate(`/chatroom/${roomInfo.id}/roomchallenge`, {
                    state: { peopleCnt: peopleCnt },
                  })
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
