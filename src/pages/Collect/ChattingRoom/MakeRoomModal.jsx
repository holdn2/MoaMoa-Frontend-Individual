import React, { useEffect, useState } from "react";
import styles from "./MakeRoomModal.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import dustHappy from "../../../assets/CharacterImgs/dustHappy.svg";
import closeModal from "../../../assets/Navigation/closeModal.svg";
import { getUserInfo } from "../../../apis/mypage";

const MakeRoomModal = ({
  isModalOpen,
  newRoomName,
  selectedFriends,
  newRoomInfo,
}) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

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
          {userInfo.nickname}님 외 {selectedFriends.length}명
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
