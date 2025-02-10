import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import arrowUp from "../../assets/Navigation/arrowUp.svg";
import arrowDown from "../../assets/Navigation/arrowDown.svg";

const Dropdown = ({ sortArr, setSortArr, sortType }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [sortName, setSortName] = useState(sortType[0]);
  const handleSortChallenge = (name) => {
    setSortName(name);
    const compare = (a, b) => {
      let date1, date2;
      switch (name) {
        case "인기순":
          return b.people - a.people;
        case "최신순":
          date1 = new Date(a.startDate);
          date2 = new Date(b.startDate);
          return date1 > date2 ? 1 : -1;
        case "종료임박순":
          date1 = new Date(a.endDate);
          date2 = new Date(b.endDate);
          return date1 > date2 ? 1 : -1;
        case "오래된 순":
          date1 = new Date(a.startDate);
          date2 = new Date(b.startDate);
          return date1 < date2 ? 1 : -1;
        case "코인순":
          return b.coin - a.coin;
        case "코인많은순":
          return b.coin - a.coin;
        case "코인적은순":
          return a.coin - b.coin;
        default:
          break;
      }
    };
    setSortArr([...sortArr].sort(compare));
  };
  return (
    <div className={styles.dropDownContainer}>
      <button type="button" onClick={() => setIsDropDown(!isDropDown)}>
        <p>{sortName}</p>
        <img src={isDropDown ? arrowUp : arrowDown} alt="정렬 버튼 아이콘" />
        {isDropDown && (
          <ul className={styles.dropDownList}>
            {sortType
              .filter((name) => name !== sortName)
              .map((name) => (
                <li
                  className={styles.dropDown}
                  key={name}
                  onClick={() => handleSortChallenge(name)}
                >
                  {name}
                </li>
              ))}
          </ul>
        )}
      </button>
    </div>
  );
};

export default Dropdown;
