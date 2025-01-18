// react-modal 라이브러리를 사용하여 구현한 테두리 구매 모달창
import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./PurchaseModal.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";

const PurchaseModal = ({
  isModalOpen,
  setIsModalOpen,
  outlines,
  wantToPurchase,
  setOutlines,
  setWantToPurchase,
}) => {
  const [modalState, setModalState] = useState(1);
  const wantToPurchaseOutline = outlines.find(
    (item) => item.type === wantToPurchase
  );
  const outlineImg = wantToPurchaseOutline ? wantToPurchaseOutline.outline : "";
  const outlinePrice = wantToPurchaseOutline ? wantToPurchaseOutline.price : 0;

  // 구매 로직
  const handlePurchase = () => {
    const purchaseOutline = outlines.map((item) => {
      if (!item.purchased && item.type === wantToPurchase) {
        return { ...item, purchased: true }; // 선택한 테두리 구매
      }
      return item; // 나머지는 그대로 유지
    });
    setOutlines(purchaseOutline);
    setWantToPurchase("");
    setModalState(1);
    setIsModalOpen(false);
  };

  const handlePurchaseAndUse = () => {
    setOutlines((prevOutlines) =>
      prevOutlines.map(
        (item) =>
          item.type === wantToPurchase
            ? { ...item, purchased: true, use: true }
            : { ...item, use: false } // 다른 테두리는 use: false
      )
    );
    // 모달, state 초기화
    setIsModalOpen(false);
    setModalState(1);
    setWantToPurchase("");
  };

  const renderPurchaseModal = () => {
    switch (modalState) {
      case 1:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.PurchaseContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src={outlineImg}
              alt="구매할 테두리"
              style={{ width: "257px", height: "257px" }}
            />
            <div className={styles.PurchaseContent}>
              <span className={styles.PurchaseTitle}>프레임 구매</span>
              <span className={styles.PurchaseText}>
                {outlinePrice}코인을 사용하여
                <br />
                프레임을 구매하시겠습니까?
              </span>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "12px" }}
              >
                <div onClick={() => setModalState(2)}>
                  <PrimaryButton size="sm">예</PrimaryButton>
                </div>
                <div
                  onClick={() => {
                    setModalState(1);
                    setIsModalOpen(false);
                  }}
                >
                  <SecondaryButton size="sm">아니요</SecondaryButton>
                </div>
              </div>
            </div>
          </Modal>
        );
      case 2:
        return (
          <Modal
            isOpen={isModalOpen}
            className={styles.PurchaseContainer}
            overlayClassName={styles.Overlay}
          >
            <img
              src={outlineImg}
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
                <div onClick={handlePurchaseAndUse}>
                  <PrimaryButton size="sm">예</PrimaryButton>
                </div>
                <div onClick={handlePurchase}>
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
