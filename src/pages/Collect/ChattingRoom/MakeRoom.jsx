import React, { useEffect, useState } from "react";
import styles from "./MakeRoom.module.css";
import Header from "../../../components/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import MakeRoomModal from "./MakeRoomModal";
import blueCancle from "../../../assets/Content/blueCancle.svg";
import check from "../../../assets/SelectButton/check.svg";
import uncheck from "../../../assets/SelectButton/uncheck.svg";
import arrowLeftBig from "../../../assets/Navigation/arrowLeftBig.svg";
import { makeChatRoom } from "../../../apis/chatroom";
import { getAllFriendsInfo } from "../../../apis/friend";

const MakeRoom = () => {
  const [inviteStep, setInviteStep] = useState(0);
  const [newRoomInfo, setNewRoomInfo] = useState({});

  // 친구목록 서버에서 받아오는 로직 필요함.

  // 상태로 friendData 관리
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);

  useEffect(() => {
    getAllFriendsInfo(setFriends);
  }, []);

  // 친구 검색
  const [filteredfriends, setFilteredfriends] = useState([]);
  const [isInputText, setIsInputText] = useState("");

  // 클릭 시 체크되도록 구현. 다시 클릭 시 체크 해제. 검색창 위에 뜨는 것 클릭시 체크해제
  const handleInviteState = (id) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.userId === id
          ? { ...friend, toInvite: !friend.toInvite }
          : friend
      )
    );
    setFilteredfriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.userId === id
          ? { ...friend, toInvite: !friend.toInvite }
          : friend
      )
    );
  };

  // 선택된 친구 배열 갱신
  useEffect(() => {
    const select = friends.filter((user) => user.toInvite === true);
    setSelectedFriends(select);
  }, [friends]);

  // 상태로 채팅방 이름 관리
  const [newRoomName, setNewRoomName] = useState("");

  // 길이가 10 이하일 때만 상태 업데이트
  const handleNameInput = (e) => {
    const changeName = e.target.value;
    if (changeName.length <= 10) {
      setNewRoomName(changeName);
    }
  };

  // 상태로 모달창 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 채팅방 생성 완료하여 서버에 전달하는 함수
  const completeMakeRoom = async () => {
    console.log("채팅방 이름 : ", newRoomName);
    console.log("초대한 친구 => ", selectedFriends);
    // 선택된 친구들의 ID 배열 생성
    const friendsIds = selectedFriends.map((friend) => friend.userId);

    const createdRoomInfo = await makeChatRoom(newRoomName, friendsIds);
    if (createdRoomInfo) {
      setNewRoomInfo(createdRoomInfo); // 상태 업데이트
      console.log("생성된 채팅방 정보: ", createdRoomInfo);
      setIsModalOpen(true); // 모달 열기
    } else {
      console.error("채팅방 생성 실패");
    }
  };

  const renderInviteStep = () => {
    switch (inviteStep) {
      case 0:
        return (
          <>
            <Header pageName="대화상대 선택하기" />
            {selectedFriends.length ? (
              <span
                className={styles.ConfirmButton}
                onClick={() => setInviteStep(1)}
              >
                완료
              </span>
            ) : (
              <></>
            )}
            <div className={styles.MainArea}>
              {selectedFriends.length ? (
                <div className={styles.SelectedFriendWrapper}>
                  {selectedFriends.map((item) => (
                    <div
                      key={item.userId}
                      className={styles.SelectedFriendContainer}
                      onClick={() => handleInviteState(item.userId)}
                    >
                      <span className={styles.SelectedFriendName}>
                        {item.nickname}
                      </span>
                      <img src={blueCancle} alt="선택 취소" />
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}

              <SearchBar
                setIsInputText={setIsInputText}
                setFiltered={setFilteredfriends}
                allData={friends}
              />
              {isInputText.length ? (
                <>
                  <span className={styles.FriendCnt}>
                    친구{" "}
                    <span style={{ fontWeight: "700" }}>
                      {filteredfriends.length}
                    </span>
                    명
                  </span>
                  <div className={styles.AllFriends}>
                    {filteredfriends.map((item) => (
                      <div
                        key={item.userId}
                        className={styles.EachFriendContainer}
                        onClick={() => handleInviteState(item.userId)}
                      >
                        <div className={styles.FriendContent}>
                          <img
                            src="http://placehold.co/50"
                            alt="프로필 사진"
                            style={{ borderRadius: "50%" }}
                          />
                          <span className={styles.UsernameStyle}>
                            {item.nickname}
                          </span>
                        </div>
                        {item.toInvite ? (
                          <img
                            src={check}
                            alt="선택됨"
                            style={{ width: "20px", height: "20px" }}
                          />
                        ) : (
                          <img
                            src={uncheck}
                            alt="선택안됨"
                            style={{ width: "20px", height: "20px" }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <span className={styles.FriendCnt}>
                    친구{" "}
                    <span style={{ fontWeight: "700" }}>{friends.length}</span>
                    명
                  </span>
                  <div className={styles.AllFriends}>
                    {friends.map((item) => (
                      <div
                        key={item.userId}
                        className={styles.EachFriendContainer}
                        onClick={() => handleInviteState(item.userId)}
                      >
                        <div className={styles.FriendContent}>
                          <img
                            src="http://placehold.co/50"
                            alt="프로필 사진"
                            style={{ borderRadius: "50%" }}
                          />
                          <span className={styles.UsernameStyle}>
                            {item.nickname}
                          </span>
                        </div>
                        {item.toInvite ? (
                          <img
                            src={check}
                            alt="선택됨"
                            style={{ width: "20px", height: "20px" }}
                          />
                        ) : (
                          <img
                            src={uncheck}
                            alt="선택안됨"
                            style={{ width: "20px", height: "20px" }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        );
      case 1:
        return (
          <>
            <Header pageName="채팅방 이름" />
            <img
              src={arrowLeftBig}
              alt="뒤로가기"
              className={styles.GoBackArrow}
              onClick={() => setInviteStep(0)}
            />
            <div className={styles.MainArea}>
              <div className={styles.InputContainer}>
                <input
                  className={styles.InputArea}
                  type="text"
                  onChange={handleNameInput}
                  value={newRoomName}
                />
                <span className={styles.AbleLength}>
                  {newRoomName.length}/10
                </span>
              </div>
              <div
                className={styles.ButtonContainer}
                onClick={completeMakeRoom}
                style={{
                  pointerEvents: newRoomName.length ? "auto" : "none",
                }}
              >
                <PrimaryButton disabled={!newRoomName}>
                  채팅 생성하기
                </PrimaryButton>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className={styles.PageWrapper}>
      {renderInviteStep()}
      <MakeRoomModal
        isModalOpen={isModalOpen}
        newRoomName={newRoomName}
        selectedFriends={selectedFriends}
        newRoomInfo={newRoomInfo}
      />
    </div>
  );
};

export default MakeRoom;
