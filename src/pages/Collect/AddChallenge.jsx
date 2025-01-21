import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./AddChallenge.module.css";
import ChallengeCategory from "../../components/ChallengeCategory/ChallengeCategory";
import SelectPeriod from "../../components/SelectPeriod/SelectPeriod";

const AddChallenge = () => {
  const pageName = "챌린지 만들기";
  const [people, setPeople] = useState(1);
  const [challengeClicked, setChallengeClicked] = useState(0);
  const [visibility, setVisibility] = useState("public");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Header pageName={pageName} />
      <div className={styles.wrapper}>
        <h1>챌린지 모집글을 작성해봐요!</h1>
        <div style={{ marginBottom: "16px" }} className={styles.inputContainer}>
          <p className={styles.inputTitle}>제목</p>
          <textarea className={styles.inputTextTitle}></textarea>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>글 내용</p>
          <textarea className={styles.inputTextContent}></textarea>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>인원 수</p>
          <div className={styles.peopleBtnWrapper}>
            <button
              className={styles.peopleDownBtn}
              onClick={() => setPeople((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <div className={styles.peopleResult}>
              <span>{people}</span>
            </div>
            <button
              className={styles.peopleUpBtn}
              onClick={() => setPeople((prev) => prev + 1)}
            >
              +
            </button>
            명
          </div>
          <label className={styles.peopleInfinity}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            제한 없음
          </label>
        </div>
        <SelectPeriod />
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>배틀 코인</p>
          <label className={styles.inputCoin}>
            <input className={styles.inputTextCoin} />
            코인
          </label>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>챌린지 공개</p>
          <label className={styles.inputPublic}>
            <input
              type="radio"
              name="visibility"
              value="public"
              checked={visibility === "public"}
              onChange={(e) => setVisibility(e.target.value)}
            />
            <p>
              전체 공개
              <span>모아모아 사용자 전체에게 공개됩니다</span>
            </p>
          </label>
          <label className={styles.inputPublic}>
            <input
              type="radio"
              name="visibility"
              value="friend"
              checked={visibility === "friend"}
              onChange={(e) => setVisibility(e.target.value)}
            />
            <p>
              친구 공개
              <span>내 친구로 등록된 사용자에게만 공개됩니다</span>
            </p>
          </label>
        </div>
        <ChallengeCategory
          challengeClicked={challengeClicked}
          setChallengeClicked={setChallengeClicked}
        />
      </div>
    </div>
  );
};

export default AddChallenge;
