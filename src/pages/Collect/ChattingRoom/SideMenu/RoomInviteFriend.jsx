import React, { useEffect, useState } from "react";
import styles from "./RoomInviteFriend.module.css";
import Header from "../../../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import blueCancle from "../../../../assets/Content/blueCancle.svg";
import check from "../../../../assets/SelectButton/check.svg";
import uncheck from "../../../../assets/SelectButton/uncheck.svg";
import { inviteFriend } from "../../../../apis/chatroom";
import { getAllFriendsInfo } from "../../../../apis/friend";

const RoomInviteFriend = () => {
  const pageName = "친구 초대";
  const params = useParams();
  const navigate = useNavigate();

  // 상태로 friendData 관리
  // 친구목록 조회는 서버에서 받아와야함.
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

  // 선택된 친구 초대하는 로직
  const handleInviteFriends = async () => {
    console.log("초대할 친구 : ", selectedFriends);
    // 선택된 친구들의 ID 배열 생성
    const friendsIds = selectedFriends.map((friend) => friend.userId);
    console.log("초대할 친구 IDs: ", friendsIds);

    inviteFriend(Number(params.chatroomId), friendsIds)
      .then((result) => {
        console.log("초대 결과: ", result); // 서버 응답 확인
        navigate(-1);
      })
      .catch((error) => {
        console.error("초대 실패: ", error);
      });
  };

  return (
    <div className={styles.PageWrapper}>
      <Header pageName={pageName} />
      {selectedFriends.length ? (
        <span className={styles.ConfirmButton} onClick={handleInviteFriends}>
          초대
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
              친구 <span style={{ fontWeight: "700" }}>{friends.length}</span>명
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
                      src={item.imageUrl}
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
    </div>
  );
};

export default RoomInviteFriend;
