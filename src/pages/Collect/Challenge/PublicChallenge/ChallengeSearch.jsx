import React, { useEffect, useState } from "react";
import styles from "./ChallengeSearch.module.css";
import Header from "../../../../components/Header/Header";
import ChallengeCategory from "../../../../components/ChallengeCategory/ChallengeCategory";
import ChallengeCard from "../../../../components/ChallengeCard/ChallengeCard";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { getCategoryChallenge } from "../../../../apis/challenge/getChallenge";

const ChallengeSearch = () => {
  const pageName = "검색";
  const navigate = useNavigate();
  const [isInputText, setIsInputText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [challengeClicked, setChallengeClicked] = useState("");
  const [categoryChallenges, setCategoryChallenges] = useState([]);
  useEffect(() => {
    if (challengeClicked !== "") {
      getCategoryChallenge(challengeClicked, setCategoryChallenges);
    }
  }, [challengeClicked]);

  // 검색창에 검색 시 사용
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
          {isInputText.length > 0
            ? isInputText.length > 0 && (
                <>
                  <p className={styles.searchCallengeInfo}>
                    <span>“{isInputText}”</span> 과 연관된 챌린지에요!
                  </p>
                  {filtered.map((item, index) => (
                    <ChallengeCard
                      key={index}
                      allData={item}
                      onClick={() =>
                        navigate("/challengemodal/challengcard", {
                          state: { challenge: item },
                        })
                      }
                    />
                  ))}
                </>
              )
            : challengeClicked.length > 0 &&
              categoryChallenges.map((item, index) => (
                <ChallengeCard
                  key={index}
                  allData={item}
                  onClick={() =>
                    navigate("/challengemodal/challengcard", {
                      state: { challenge: item },
                    })
                  }
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default ChallengeSearch;
