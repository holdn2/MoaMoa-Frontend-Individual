import React, { useState } from "react";
import styles from "./MyConsumption.module.css";
import question from "../../assets/Content/question.svg";
import DescModal from "../InputConsumption/DescModal";
import MyChallengeBar from "./MyChallengeBar";
import MyConsumptionChart from "./MyConsumptionChart";
import descChat from "../../assets/Icon/descChat.svg";
import line from "../../assets/Icon/line.svg";

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

const chartData = [
  {
    name: "11-1",
    target: 150000,
    cons: 130000,
  },
  {
    name: "11-2",
    target: 70000,
    cons: 60000,
  },
  {
    name: "11-3",
    target: 100000,
    cons: 80000,
  },
  {
    name: "11-4",
    target: 50000,
    cons: 55000,
  },
];

const MyConsumption = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(0);
  const btnContent = ["1주", "2주", "1개월", "6개월", "1년"];
  let totalPrice = dummyData.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className={styles.wrapper}>
      {/*현재 진행중인 챌린지 */}
      <MyChallengeBar children="현재 진행중인 챌린지" isConsumption={true} />
      <div className={styles.chartWrapper}>
        <div className={styles.chartTitleWrapper}>
          <span>나의 소비 변화는 ?</span>
          <div className={styles.chartDescWrapper}>
            <img src={descChat} />
            <div className={styles.chartDesc}>
              <p>
                <img src={line} />: 실제 소비 금액
              </p>
              <p>
                <div className={styles.descIcon}></div> : 소비 목표 금액
              </p>
            </div>
          </div>
        </div>
        <div className={styles.chart}>
          <MyConsumptionChart data={chartData} />
        </div>
      </div>
      {/*지금까지의 나의 소비는 ? */}
      <div className={styles.categoryConsWrapper}>
        <div className={styles.categoryConsTitle}>
          <span>지금까지의 나의 소비는 ?</span>
          <img
            src={question}
            alt="카테고리 설명을 볼 수 있는 아이콘"
            onClick={() => setModalOpen(true)}
          />
        </div>
        {modalOpen && (
          <DescModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
        <div className={styles.categoryConsContent}>
          <div className={styles.categoryBtnWrapper}>
            {btnContent.map((content, idx) => (
              <button
                key={content}
                onClick={() => setIsClicked(idx)}
                className={
                  isClicked === idx ? styles.activeBtn : styles.inactiveBtn
                }
              >
                {content}
              </button>
            ))}
          </div>
          <p className={styles.totalPrice}>
            <span>총</span>
            <span style={{ fontSize: "32px" }}>{totalPrice}</span>
            <span>원</span>
          </p>
          <div className={styles.categoryCons}>
            {dummyData.map((item) => (
              <div key={item.category} className={styles.category}>
                <div className={styles.categoryTitle}>{item.category}</div>
                <p className={styles.categoryPrice}>
                  <span style={{ fontSize: "18px" }}>{item.price}</span> 원
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyConsumption;
