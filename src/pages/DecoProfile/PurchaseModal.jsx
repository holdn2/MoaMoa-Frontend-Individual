// react-modal 라이브러리를 사용하여 구현한 테두리 구매 모달창
import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./PurchaseModal.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import { purchaseDecoItem } from "../../apis/decoProfile";

const PurchaseModal = ({
  isModalOpen,
  setIsModalOpen,
  itemId,
  itemImage,
  itemPrice,
  fetchDecoItems,
}) => {
  const [modalState, setModalState] = useState(0);

  // 구매 로직
  const handlePurchase = async (itemId) => {
    await purchaseDecoItem(itemId);
    console.log(itemId, " 구매완료");
    setModalState(0);
    setIsModalOpen(false);
    fetchDecoItems(); // 구매 완료 후 즉시 반영되도록 함수 호출
  };

  const handlePurchaseAndUse = async (itemId) => {
    await purchaseDecoItem(itemId);
    // 구매한 아이템 바로 적용하는 로직 필요
    console.log(itemId, " 구매완료 및 바로 적용");
    setModalState(0);
    setIsModalOpen(false);
    fetchDecoItems(); // 구매 완료 후 즉시 반영되도록 함수 호출
  };

  const renderPurchaseModal = () => {
    switch (modalState) {
      case 0:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.PurchaseContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src={itemImage}
              alt="구매할 테두리"
              style={{ width: "257px", height: "257px" }}
            />
            <div className={styles.PurchaseContent}>
              <span className={styles.PurchaseTitle}>프레임 구매</span>
              <span className={styles.PurchaseText}>
                {itemPrice}코인을 사용하여
                <br />
                프레임을 구매하시겠습니까?
              </span>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "12px" }}
              >
                <div onClick={() => setModalState(1)}>
                  <PrimaryButton size="sm">예</PrimaryButton>
                </div>
                <div
                  onClick={() => {
                    setModalState(0);
                    setIsModalOpen(false);
                  }}
                >
                  <SecondaryButton size="sm">아니요</SecondaryButton>
                </div>
              </div>
            </div>
          </Modal>
        );
      case 1:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.PurchaseContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src={itemImage}
              alt="구매할 테두리"
              style={{ width: "257px", height: "257px" }}
            />
            <div className={styles.PurchaseContent}>
              <span className={styles.PurchaseTitle}>프레임 구매 완료</span>
              <span className={styles.PurchaseText}>
                프레임 구매가 완료되었습니다.
                <br />
                적용하시겠습니까?
              </span>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "12px" }}
              >
                <div onClick={() => handlePurchaseAndUse(itemId)}>
                  <PrimaryButton size="sm">예</PrimaryButton>
                </div>
                <div onClick={() => handlePurchase(itemId)}>
                  <SecondaryButton size="sm">아니요</SecondaryButton>
                </div>
              </div>
            </div>
          </Modal>
        );
    }
  };
  return <div>{renderPurchaseModal()}</div>;
};

export default PurchaseModal;
