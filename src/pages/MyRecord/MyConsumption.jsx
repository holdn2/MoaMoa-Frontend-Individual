import React, { useState } from "react";
import styles from "./MyConsumption.module.css";
import question from "../../assets/Content/question.svg";
import DescModal from "../InputConsumption/DescModal";
import MyChallengeBar from "./MyChallengeBar";

const dummyData = [
  {
    category: "고정비",
    price: 30000,
  },
  {
    category: "꾸밈비",
    price: 150000,
  },
  {
    category: "활동비",
    price: 150000,
  },
  {
    category: "생활비",
    price: 300000,
  },
  {
    category: "기여비",
    price: 200000,
  },
  {
    category: "기타",
    price: 30000,
  },
];

const MyConsumption = () => {
  const [modalOpen, setModalOpen] = useState(false);
  let totalPrice = dummyData.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className={styles.wrapper}>
      <MyChallengeBar children="현재 진행중인 챌린지" />
      <div className={styles.categoryConsWrapper}>
        <div className={styles.categoryConsTitle}>
          <span>
            지금까지의 나의 소비는 ?
            <img
              src={question}
              alt="카테고리 설명을 볼 수 있는 아이콘"
              onClick={() => setModalOpen(true)}
            />
          </span>
        </div>
        {modalOpen && (
          <DescModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
        <p className={styles.totalPrice}>
          총 <span>{totalPrice}</span>원
        </p>
        <div className={styles.categoryCons}>
          {dummyData.map((item) => (
            <div key={item.category} className={styles.category}>
              <div className={styles.categoryTitle}>{item.category}</div>
              <p className={styles.categoryPrice}>
                <span>{item.price}</span> 원
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyConsumption;
