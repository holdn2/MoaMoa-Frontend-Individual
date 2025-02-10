import React from "react";
import styles from "./ExitRoomModal.module.css";
import Modal from "react-modal";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import SecondaryButton from "../../../../components/Button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import dustSad from "../../../../assets/CharacterImgs/dustSad.svg";
import { deleteChatRoom } from "../../../../apis/chatroom";

// 유저의 id
const userId = 1;

const ExitRoomModal = ({ isModalOpen, setIsModalOpen, roomId }) => {
  const navigate = useNavigate();
  // 채팅방 나가기 관리
  const handleExitRoom = () => {
    deleteChatRoom(roomId, userId);
    setIsModalOpen(false);
    console.log("채팅방을 나갔습니다");
    navigate("/collect");
  };
  return (
    <Modal
      isOpen={isModalOpen}
      className={styles.ExitModalContainer}
      overlayClassName={styles.Overlay}
    >
      <img src={dustSad} alt="슬픈 먼지" />
      <div className={styles.ContentContainer}>
        <span className={styles.BoldText}>채팅방을 나가시겠어요?</span>
        <span className={styles.NormalText}>
          채팅방 내 모든 대화내용이 삭제돼요
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            marginTop: "14px",
          }}
        >
          <div onClick={handleExitRoom}>
            <PrimaryButton size="sm">네</PrimaryButton>
          </div>
          <div onClick={() => setIsModalOpen(false)}>
            <SecondaryButton size="sm">아니요</SecondaryButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ExitRoomModal;
