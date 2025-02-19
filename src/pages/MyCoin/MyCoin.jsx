import React, { useEffect, useState } from "react";
import styles from "./MyCoin.module.css";
import Header from "../../components/Header/Header";
import coinYellow from "../../assets/Content/coinYellow.svg";
import { getMyCoinReport } from "../../apis/myCoin";

const earnedHistoryData = [
  {
    id: 1,
    content: "챌린지 성공 리워드",
    date: "24.12.18",
    coin: 200,
  },
  {
    id: 2,
    content: "내 코인 페이지 구현",
    date: "24.12.17",
    coin: 300,
  },
  {
    id: 3,
    content: "챌린지 성공 리워드",
    date: "24.12.18",
    coin: 200,
  },
  {
    id: 4,
    content: "챌린지 성공 리워드",
    date: "24.12.18",
    coin: 200,
  },
  {
    id: 5,
    content: "챌린지 성공 리워드",
    date: "24.12.18",
    coin: 200,
  },
];

const EarningHistory = ({ content, date, coin }) => {
  return (
    <div className={styles.EarnHistoryContainer}>
      <div className={styles.EarnContentContainer}>
        <span className={styles.EarnContent}>{content}</span>
        <span className={styles.EarnDate}>{date}</span>
      </div>
      <div className={styles.EarnedCoin}>+ {coin}P</div>
    </div>
  );
};

const MyCoin = () => {
  const pageName = "내 코인";
  const [coinReport, setCoinReport] = useState({
    coin: 0,
    nickname: "",
    dustUrl: "",
    transactions: [],
  });

  useEffect(() => {
    getMyCoinReport(setCoinReport);
  }, []);
  return (
    <div className={styles.MyCoinPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <div className={styles.MyInfoContainer}>
          <div className={styles.MyCoinContainer}>
            <span className={styles.MyCoinText}>내 보유 코인</span>
            <div className={styles.ImgCoinText}>
              <img
                style={{ width: "24px", height: "24px" }}
                src={coinYellow}
                alt="코인이미지"
              />
              <span className={styles.MyCoin}>{coinReport.coin}</span>
            </div>
          </div>
          <div className={styles.EncourageContainer}>
            <div className={styles.EncourageTextContainer}>
              <span className={styles.UserNameText}>
                <span style={{ fontSize: "22px", fontWeight: "700" }}>
                  {coinReport.nickname}
                </span>{" "}
                님,
              </span>
              <span className={styles.EncourageText}>
                조금만 더 모으면
                <br />
                <span style={{ fontWeight: "800" }}>Level Up!!</span>
              </span>
            </div>
            <img
              style={{ width: "115px", height: "114px" }}
              src={coinReport.dustUrl}
              alt="선글라스,코인 먼지"
            />
          </div>
        </div>
        <div className={styles.EarnedCoinContainer}>
          <span className={styles.EarnedText}>적립내역</span>
          {coinReport.transactions.map((transaction, index) => (
            <EarningHistory
              key={index}
              content={transaction.title}
              date={transaction.date}
              coin={transaction.transaction}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCoin;
