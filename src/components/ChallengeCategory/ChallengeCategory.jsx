import React from "react";
import Category from "./Category";
import styles from "./ChallengeCategory.module.css";

const ChallengeCategory = ({ challengeClicked, setChallengeClicked }) => {
  const challengeName = [
    "택시비",
    "배달음식",
    "커피",
    "충동구매",
    "술자리",
    "취미",
  ];
  return (
    <div className={styles.categoryWrapper}>
      <span>챌린지 카테고리</span>
      <div className={styles.category}>
        {challengeName.map((name, index) => (
          <Category
            key={name}
            children={name}
            checked={challengeClicked === index}
            onClick={() => setChallengeClicked(index)}
          />
        ))}
      </div>
      <p>*중복 선택이 불가능합니다.</p>
    </div>
  );
};

export default ChallengeCategory;
