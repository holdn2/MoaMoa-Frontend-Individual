import React, { useState } from "react";
import DescModal from "../InputConsumption/DescModal";
import MyChallengeRecord from "./MyChallengeRecord";
import styles from "./ShowMyChallenge.module.css";
import question from "../../assets/Content/question.svg";
import arrowUp from "../../assets/Navigation/arrowUp.svg";
import arrowDown from "../../assets/Navigation/arrowDown.svg";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Dropdown";

const ShowMyChallenge = () => {
  const [sortChallenge, setSortChallenge] = useState(dummyData);
  const sortType = ["최신순", "오래된 순", "코인순"];
  const [modalOpen, setModalOpen] = useState(false);

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
        <Dropdown
          sortArr={sortChallenge}
          setSortArr={setSortChallenge}
          sortType={sortType}
        />
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

const dummyData = [
  {
    id: 1,
    title: "1회차",
    cons: 60000,
    target: 70000,
    startDate: "2025-11-10",
    endDate: "2025-11-18",
    coin: 200,
    isSuccessed: true,
  },
  {
    id: 2,
    title: "2회차",
    cons: 100000,
    target: 70000,
    startDate: "2025-12-10",
    endDate: "2025-12-18",
    coin: 300,
    isSuccessed: false,
  },
  {
    id: 3,
    title: "3회차",
    cons: 50000,
    target: 45000,
    startDate: "2024-11-10",
    endDate: "2024-11-18",
    coin: 500,
    isSuccessed: false,
  },
  {
    id: 4,
    title: "4회차",
    cons: 60000,
    target: 100000,
    startDate: "2025-11-10",
    endDate: "2025-11-18",
    coin: 400,
    isSuccessed: true,
  },
  {
    id: 5,
    title: "2회차",
    cons: 100000,
    target: 70000,
    startDate: "2025-12-10",
    endDate: "2025-12-18",
    coin: 300,
    isSuccessed: false,
  },
  {
    id: 6,
    title: "3회차",
    cons: 50000,
    target: 45000,
    startDate: "2024-11-10",
    endDate: "2024-11-18",
    coin: 500,
    isSuccessed: false,
  },
  {
    id: 7,
    title: "4회차",
    cons: 60000,
    target: 100000,
    startDate: "2025-11-10",
    endDate: "2025-11-18",
    coin: 400,
    isSuccessed: true,
  },
];
