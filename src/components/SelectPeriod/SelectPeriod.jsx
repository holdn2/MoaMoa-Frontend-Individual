import React, { useEffect, useState } from "react";
import styles from "./SelectPeriod.module.css";
import PeriodPickerModal from "./PeriodPickerModal";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

const SelectPeriod = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [startValue, setStartValue] = useState({
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  });
  const [endValue, setEndValue] = useState({
    year: startValue.year,
    month: startValue.month,
    day: startValue.day,
  });
  useEffect(() => {
    setEndValue({
      year: startValue.year,
      month: startValue.month,
      day: startValue.day,
    });
  }, [startValue]);

  return (
    <div className={styles.inputWrapper}>
      <p>나의 소비 기간</p>
      <button
        type="button"
        className={styles.dayButton}
        onClick={() => setModalOpen(true)}
      >
        <span>
          {startValue.year}.{startValue.month}.{startValue.day} (월) ~{" "}
          {endValue.year}.{endValue.month}.{endValue.day} (일)
        </span>
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
