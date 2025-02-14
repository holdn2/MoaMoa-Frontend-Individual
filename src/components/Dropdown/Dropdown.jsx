import React, { useEffect, useState } from "react";
import styles from "./Dropdown.module.css";
import arrowUp from "../../assets/Navigation/arrowUp.svg";
import arrowDown from "../../assets/Navigation/arrowDown.svg";

const Dropdown = ({ typeName, setSortType }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [sortName, setSortName] = useState(typeName[0]);
  useEffect(() => {
    if (sortName === "최신순") {
      setSortType("LATEST");
    } else if (sortName === "오래된 순") {
      setSortType("EARLIEST");
    } else if (sortName === "코인순") {
      setSortType("COIN");
    }
  }, [sortName]);

  return (
    <div className={styles.dropDownContainer}>
      <button type="button" onClick={() => setIsDropDown(!isDropDown)}>
        <p>{sortName}</p>
        <img src={isDropDown ? arrowUp : arrowDown} alt="정렬 버튼 아이콘" />
        {isDropDown && (
          <ul className={styles.dropDownList}>
            {typeName
              .filter((name) => name !== sortName)
              .map((name) => (
                <li
                  className={styles.dropDown}
                  key={name}
                  onClick={() => setSortName(name)}
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
