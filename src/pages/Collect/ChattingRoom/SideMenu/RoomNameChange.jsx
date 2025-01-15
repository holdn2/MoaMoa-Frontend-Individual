import React, { useState } from "react";
import styles from "./RoomNameChange.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header/Header";

const RoomNameChange = () => {
  const params = useParams();
  const navigate = useNavigate();
  const pageName = "채팅방 이름";
  //   console.log("채팅방 ID : ", params.chatroomId);
  const [newRoomName, setNewRoomName] = useState("");

  // 길이가 10 이하일 때만 상태 업데이트
  const handleNameInput = (e) => {
    const changeName = e.target.value;
    if (changeName.length <= 10) {
      setNewRoomName(changeName);
    }
  };

  // 서버로 전송하는 로직 필요
  const handleRoomNameChange = () => {
    console.log(`${newRoomName}으로 채팅방 이름 변경!`);
    navigate(-1);
  };

  return (
    <div className={styles.PageWrapper}>
      <Header pageName={pageName} />
      {newRoomName.length > 0 ? (
        <span
          className={styles.ChangeNameConfirm}
          onClick={handleRoomNameChange}
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
