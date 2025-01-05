// 프로필 꾸미기 페이지. 캐릭터 변경 예정이라 틀만 만들어놓을 예정
import React, { useState } from "react";
import styles from "./DecoProfile.module.css";
import Header from "../../components/Header/Header";
import PrimaryButton from "../../components/Button/PrimaryButton";

const DecoProfile = () => {
  const [selectedOutline, setSelectedOutline] = useState(0);
  const [selectedNicknameColor, setSelectedNicknameColor] = useState(0);

  const pageName = "프로필 꾸미기";
  return (
    <div className={styles.DecoPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <div className={styles.OutlineContainer}>
          <span className={styles.OutlineTitle}>프로필 테두리</span>
          <div className={styles.VariousOutlineContainer}>
            {outlineType.map((item) => (
              <button
                key={item.id}
                className={styles.EachOutlineContainer}
                onClick={() => setSelectedOutline(item.id)}
              >
                <img src={item.outlineColor} alt="테두리 색깔" />
                <img
                  src="../src/assets/DecoProfile/Cost/twenty.svg"
                  alt="필요 코인"
                  className={styles.CoinImg}
                />
              </button>
            ))}
          </div>
        </div>
        <div className={styles.NicknameColorContainer}>
          <span className={styles.NicknameColorTitle}>닉네임 색상</span>
          <div className={styles.VariousNicknameColorContainer}>
            {nicknameColorData.map((item) => (
              <button
                key={item.id}
                className={styles.EachNicknameColorContainer}
                onClick={() => setSelectedNicknameColor(item.id)}
              >
                <img
                  src={item.nicknameColor}
                  alt="닉네임 색깔"
                  className={styles.NicknameColorSize}
                />
                <img
                  src="../src/assets/DecoProfile/Cost/twenty.svg"
                  alt="필요 코인"
                  className={styles.CoinImg}
                />
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() =>
            console.log(
              `테두리${selectedOutline}, 닉네임${selectedNicknameColor}구매`
            )
          }
          className={styles.PurchaseButton}
        >
          <PrimaryButton>구매하기</PrimaryButton>
        </button>
      </div>
    </div>
  );
};

export default DecoProfile;

const outlineType = [
  {
    id: 1,
    outlineColor: "../src/assets/DecoProfile/Outline/defaultLine.svg",
    cost: 0,
    isPurchased: true,
  },
  {
    id: 2,
    outlineColor: "../src/assets/DecoProfile/Outline/defaultLine.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 3,
    outlineColor: "../src/assets/DecoProfile/Outline/defaultLine.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 4,
    outlineColor: "../src/assets/DecoProfile/Outline/defaultLine.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 5,
    outlineColor: "../src/assets/DecoProfile/Outline/defaultLine.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 6,
    outlineColor: "../src/assets/DecoProfile/Outline/defaultLine.svg",
    cost: 20,
    isPurchased: false,
  },
];

const nicknameColorData = [
  {
    id: 1,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 2,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 3,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 4,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 5,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 6,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 7,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 20,
    isPurchased: false,
  },
  {
    id: 8,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 30,
    isPurchased: false,
  },
  {
    id: 9,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 40,
    isPurchased: false,
  },
  {
    id: 10,
    nicknameColor: "../src/assets/DecoProfile/Nickname/pink.svg",
    cost: 40,
    isPurchased: false,
  },
];
