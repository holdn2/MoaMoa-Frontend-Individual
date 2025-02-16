import React, { useEffect, useState } from "react";
import styles from "./SelectPeriod.module.css";
import PeriodPickerModal from "./PeriodPickerModal";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
const currentDay = String(date.getDate()).padStart(2, "0");
const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

const SelectPeriod = ({ setStartFormatDate, setEndFormatDate }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [startValue, setStartValue] = useState({
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  });
  const [endValue, setEndValue] = useState({
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  });

  const startFormatDate = `${startValue.year}-${startValue.month}-${startValue.day}`;
  const endFormatDate = `${endValue.year}-${endValue.month}-${endValue.day}`;
  const period =
    (new Date(endFormatDate) - new Date(startFormatDate)) /
    (1000 * 60 * 60 * 24);


  useEffect(() => {
    setStartFormatDate(startFormatDate);
    setEndFormatDate(endFormatDate);
  }, [startFormatDate, endFormatDate, setStartFormatDate, setEndFormatDate]);

  // "2025-02-15"와 같은 형식으로 변경
  const formatDate = ({ year, month, day }) => {
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    setStartDate(formatDate(startValue));
    setEndDate(formatDate(endValue));
  }, [startValue, endValue]);

  return (
    <div className={styles.inputWrapper}>
      <p>나의 소비 기간</p>
      <button
        type="button"
        className={styles.dayButton}
        onClick={() => setModalOpen(true)}
      >
        <span className={styles.date}>
          {startFormatDate} ({weekDays[new Date(startFormatDate).getDay()]}) ~{" "}
          {endFormatDate} ({weekDays[new Date(endFormatDate).getDay()]})
        </span>
        <span className={styles.period}>{period}일 간</span>
      </button>
      {modalOpen && (
        <PeriodPickerModal
          setModalOpen={setModalOpen}
          startValue={startValue}
          setStartValue={setStartValue}
          endValue={endValue}
          setEndValue={setEndValue}
        />
      )}
    </div>
  );
};

export default SelectPeriod;
