import React from "react";
import styles from "./SearchBar.module.css";
import search from "../../assets/Action/search.svg";

// setIsInput : 입력창에 입력했는지 여부
// setFiltered : 입력한 것과 전체 데이터 비교 후 일치하는 배열
// allData : 전체 데이터

const SearchBar = ({
  setIsInputText,
  setFiltered,
  allData,
  isText,
  isChallenge,
  onClick,
}) => {
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase(); // 검색어를 소문자로 변환
    setIsInputText(searchText);
    const filtering = allData.filter(
      (item) =>
        (isChallenge ? item.challengeName : item.userName)
          .toLowerCase()
          .includes(searchText) // 일부 일치 검색
    );
    setFiltered(filtering);
  };
  return (
    <div onClick={onClick} className={styles.SearchBar}>
      <img src={search} alt="검색창" />
      <input
        className={styles.SearchInput}
        type="text"
        onChange={handleSearch}
        placeholder={isText ? "친구를 추가해보세요" : ""}
      />
    </div>
  );
};

export default SearchBar;
