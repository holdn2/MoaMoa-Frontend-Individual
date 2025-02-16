import React from "react";
import Category from "./Category";
import styles from "./ChallengeCategory.module.css";

const ChallengeCategory = ({
  challengeClicked,
  setChallengeClicked,
  isSearch,
}) => {
  const challengeArr = [
    "택시비",
    "배달음식",
    "커피",
    "충동구매",
    "술자리",
    "취미",
  ];
  const challengeName = [
    "TAXI",
    "DELIVERY_FOOD",
    "COFFEE",
    "IMPULSE_BUY",
    "DRINKING",
    "HOBBY",
  ];
  return (
    <div className={styles.categoryWrapper}>
      <span>{isSearch ? "추천 카테고리 " : "챌린지 카테고리"}</span>
      <div className={styles.category}>
        {challengeArr.map((name, index) => (
          <Category
            key={name}
            children={name}
            checked={challengeClicked === challengeName[index]}
            onClick={() => {
              // 같은 카테고리 클릭하면 해제
              setChallengeClicked(
                challengeClicked === challengeName[index]
                  ? ""
                  : challengeName[index]
              );
            }}
          />
        ))}
      </div>
      <p>*중복 선택이 불가능합니다.</p>
    </div>
  );
};

export default ChallengeCategory;
