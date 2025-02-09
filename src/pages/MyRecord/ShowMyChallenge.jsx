import React, { useState } from "react";
import DescModal from "../InputConsumption/DescModal";
import MyChallengeRecord from "./MyChallengeRecord";
import styles from "./ShowMyChallenge.module.css";
import question from "../../assets/Content/question.svg";
import arrowUp from "../../assets/Navigation/arrowUp.svg";
import arrowDown from "../../assets/Navigation/arrowDown.svg";
import Header from "../../components/Header/Header";

const ShowMyChallenge = () => {
  const [sortChallenge, setSortChallenge] = useState(dummyData);
  const [isDropDown, setIsDropDown] = useState(false);
  const sortType = ["최신순", "오래된 순", "코인순"];
  const [sortName, setSortName] = useState(sortType[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSortChallenge = (name) => {
    setSortName(name);
    const compare = (a, b) => {
      let date1, date2;
      switch (name) {
        case "최신순":
          date1 = new Date(a.startDate);
          date2 = new Date(b.startDate);
          return date1 > date2 ? 1 : -1;
        case "오래된 순":
          date1 = new Date(a.startDate);
          date2 = new Date(b.startDate);
          return date1 < date2 ? 1 : -1;
        case "코인순":
          return b.coin - a.coin;
        default:
          break;
      }
    };
    setSortChallenge([...dummyData].sort(compare));
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.myConsTitleWrapper}>
          <div className={styles.myConsTitle}>
            <span>나의 소비 기록은 ?</span>
            <img
              src={question}
              alt="카테고리 설명을 볼 수 있는 아이콘"
              onClick={() => setModalOpen(true)}
            />
          </div>
          {modalOpen && (
            <DescModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
          )}
        </div>
        <div className={styles.dropDown}>
          <button type="button" onClick={() => setIsDropDown(!isDropDown)}>
            <p>{sortName}</p>
            <img
              src={isDropDown ? arrowUp : arrowDown}
              alt="정렬 버튼 아이콘"
            />
            {isDropDown && (
              <ul>
                {sortType
                  .filter((name) => name !== sortName)
                  .map((name) => (
                    <li key={name} onClick={() => handleSortChallenge(name)}>
                      {name}
                    </li>
                  ))}
              </ul>
            )}
          </button>
        </div>
        <div className={styles.challengeRecordWrapper}>
          {sortChallenge.map((item) => (
            <MyChallengeRecord id={item.id} item={item} isConsData={true} />
          ))}
        </div>
      </div>
    </>
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
];
