import React, { useState } from "react";
import styles from "./RoomNameChange.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import { updateChatRoomName } from "../../../../apis/chatroom";

const RoomNameChange = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const roomId = location.state?.userGroupId;
  const pageName = "채팅방 이름 변경";
  const [newRoomName, setNewRoomName] = useState("");

  // 길이가 10 이하일 때만 상태 업데이트
  const handleNameInput = (e) => {
    const changeName = e.target.value;
    if (changeName.length <= 10) {
      setNewRoomName(changeName);
    }
  };

  return (
    <div className={styles.PageWrapper}>
      <Header pageName={pageName} />
      {newRoomName.length > 0 ? (
        <span
          className={styles.ChangeNameConfirm}
          onClick={() => {
            // 새로운 이름을 서버에 전송!
            updateChatRoomName(roomId, newRoomName);
            navigate("/collect");
          }}
        >
          확인
        </span>
      ) : (
        <></>
      )}

      <div className={styles.MainArea}>
        <div className={styles.InputContainer}>
          <input
            className={styles.InputArea}
            type="text"
            onChange={handleNameInput}
            value={newRoomName}
          />
          <span className={styles.AbleLength}>{newRoomName.length}/10</span>
        </div>
      </div>
    </div>
  );
};

export default RoomNameChange;
