import React from "react";
import styles from "./MakeRoomModal.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import dustHappy from "../../../assets/CharacterImgs/dustHappy.svg";
import closeModal from "../../../assets/Navigation/closeModal.svg";

const MakeRoomModal = ({
  isModalOpen,
  newRoomName,
  selectedFriends,
  newRoomInfo,
}) => {
  const navigate = useNavigate();
  const userName = "모아모아짱";
  const goToRoom = () => {
    // 채팅방으로 바로 이동하는 로직 필요함.
    console.log(newRoomName, "(으)로 이동");
  };
  return (
    <Modal
      isOpen={isModalOpen}
      className={styles.ContentWraper}
      overlayClassName={styles.Overlay}
    >
      <img src={dustHappy} alt="행복한 먼지" />
      <div className={styles.MakeRoomContainer}>
        <span className={styles.BoldText}>
          [{newRoomName}] 채팅방 생성 완료!
        </span>
        <span className={styles.NormalText}>
          {userName}님 외 {selectedFriends.length}명
        </span>
        <div
          onClick={() =>
            navigate(`/chatroom/${newRoomInfo.id}`, {
              state: { chatData: newRoomInfo },
            })
          }
        >
          <PrimaryButton size="lg">채팅방으로 이동하기</PrimaryButton>
        </div>
      </div>
      <img onClick={() => navigate(-1)} src={closeModal} alt="모달창 닫기" />
    </Modal>
  );
};

export default MakeRoomModal;
