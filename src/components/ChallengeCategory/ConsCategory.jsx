import React from "react";
import Category from "./Category";
import styles from "./ChallengeCategory.module.css";

const ConsCategory = ({ consCategoryClicked, setConsCategoryClicked }) => {
  const consCategoryArr = [
    "고정비",
    "꾸밈비",
    "활동비",
    "생활비",
    "기여비",
    "기타",
  ];
  const consCategoryName = [
    "FIXED",
    "BEAUTY",
    "ACTIVITY",
    "LIVING",
    "CELEBRATION",
    "ETC",
  ];
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.category}>
        {consCategoryArr.map((name, index) => (
          <Category
            key={name}
            children={name}
            checked={consCategoryClicked === consCategoryName[index]}
            onClick={() => {
              // 같은 카테고리 클릭하면 해제
              setConsCategoryClicked(consCategoryName[index]);
            }}
          />
        ))}
      </div>
      <p>*중복 선택이 불가능합니다.</p>
    </div>
  );
};

export default ConsCategory;
