import React, { useEffect, useState } from "react";
import DescModal from "../InputConsumption/DescModal";
import MyChallengeRecord from "./MyChallengeRecord";
import styles from "./ShowMyChallenge.module.css";
import question from "../../assets/Content/question.svg";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Dropdown";
import { getMyConsumptionCheck } from "../../apis/myReport";

const ShowMyChallenge = () => {
  const [sortChallenge, setSortChallenge] = useState([]);
  const typeName = ["최신순", "오래된 순", "코인순"];
  const [sortType, setSortType] = useState("LATEST");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getMyConsumptionCheck(sortType, setSortChallenge);
  }, [sortType]);

  return (
    <div className={styles.PageContainer}>
      <Header />
      <div className={styles.myConsTitleWrapper}>
        <div className={styles.myConsTitle}>
          <span>나의 소비 기록은 ?</span>
          <img
            src={question}
            alt="카테고리 설명을 볼 수 있는 아이콘"
            onClick={() => setModalOpen(true)}
          />
        </div>
      </div>
      <div style={{ marginRight: "20px" }}>
        <Dropdown typeName={typeName} setSortType={setSortType} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.challengeRecordWrapper}>
          {sortChallenge.map((item) => (
            <MyChallengeRecord key={item.id} item={item} isConsData={true} />
          ))}
        </div>
        {modalOpen && (
          <DescModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
      </div>
    </div>
  );
};

export default ShowMyChallenge;
