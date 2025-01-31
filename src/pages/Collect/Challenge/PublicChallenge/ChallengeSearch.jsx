import React, { useState } from "react";
import styles from "./ChallengeSearch.module.css";
import Header from "../../../../components/Header/Header";
import ChallengeCategory from "../../../../components/ChallengeCategory/ChallengeCategory";
import ChallengeCard from "../../../../components/ChallengeCard/ChallengeCard";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";

const ChallengeSearch = () => {
  const pageName = "검색";
  const [isInputText, setIsInputText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [challengeClicked, setChallengeClicked] = useState("");
  const location = useLocation();
  const allData = location.state?.allData || [];
  return (
    <>
      <Header pageName={pageName} />
      <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
          <SearchBar
            setIsInputText={setIsInputText}
            setFiltered={setFiltered}
            allData={allData}
            isChallenge={true}
            className={styles.searchBar}
          />
          {isInputText.length === 0 && (
            <>
              <ChallengeCategory
                challengeClicked={challengeClicked}
                setChallengeClicked={setChallengeClicked}
                isSearch={true}
              />
            </>
          )}
        </div>
        <div className={styles.publicChallengeWrapper}>
          {challengeClicked.length > 0 &&
            isInputText.length === 0 &&
            allData
              .filter((data) => data.category === challengeClicked)
              .map((item) => <ChallengeCard key={item.id} allData={item} />)}
          {isInputText.length > 0 && (
            <>
              <p className={styles.searchCallengeInfo}>
                <span>“{isInputText}”</span> 과 연관된 챌린지에요!
              </p>
              {filtered.map((item) => (
                <ChallengeCard key={item.id} allData={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChallengeSearch;
