import React, { useEffect, useState } from "react";
import styles from "./MyConsumption.module.css";
import question from "../../assets/Content/question.svg";
import DescModal from "../InputConsumption/DescModal";
import MyChallengeBar from "./MyChallengeBar";
import MyConsumptionChart from "./MyConsumptionChart";
import descChat from "../../assets/Icon/descChat.svg";
import line from "../../assets/Icon/line.svg";
import { getMyConsumptionReport } from "../../apis/myReport";

const MyConsumption = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(0);
  const btnContent = ["1주", "2주", "1개월", "6개월", "1년"];

  // 나의 소비 관련 api
  const [chartData, setChartData] = useState([]);
  const [consData, setConsData] = useState([]);
  const [challengeData, setChallengeData] = useState({
    totalEarned: 0,
    successRate: 0,
    top: 0,
    totalTries: 0,
    totalSucceed: 0,
    challengeRecords: [],
  });
  useEffect(() => {
    getMyConsumptionReport(setChallengeData, setChartData, setConsData);
  }, []);
  const latestChartData = chartData.slice(-4);

  // 카테고리별 소비 데이터
  const categoryCons = [
    { title: "고정비", value: consData.fixed },
    { title: "꾸밈비", value: consData.beauty },
    { title: "활동비", value: consData.activity },
    { title: "생활비", value: consData.living },
    { title: "기여비", value: consData.celebration },
    { title: "기타", value: consData.etc },
  ];

  return (
    <div className={styles.wrapper}>
      {/*나의 소비 성공 확률은? */}
      <MyChallengeBar
        children="나의 소비 성공 확률은?"
        isConsumption={true}
        successRate={challengeData.successRate * 100}
        top={challengeData.top}
        totalTries={challengeData.totalTries}
        totalSucceed={challengeData.totalSucceed}
      />
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
          <MyConsumptionChart data={latestChartData} />
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
            <span style={{ fontSize: "32px" }}>{consData.total}</span>
            <span>원</span>
          </p>
          <div className={styles.categoryCons}>
            {categoryCons.map((category, index) => (
              <div key={index} className={styles.category}>
                <div className={styles.categoryTitle}>{category.title}</div>
                <p className={styles.categoryPrice}>
                  <span style={{ fontSize: "18px" }}>{category.value}</span> 원
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
