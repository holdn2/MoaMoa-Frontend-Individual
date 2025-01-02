import React, { useState } from "react";
import Picker from "react-mobile-picker";
import styles from "./SelectPeriod.module.css";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

const selections = {
  // (현재 연도-12년)부터 (현재 연도+11년)까지 배열 생성
  year: Array.from(
    { length: 24 },
    (_, i) => i + Number(date.getFullYear()) - 12
  ),
  month: Array.from({ length: 12 }, (_, i) => i + 1),
  day: Array.from({ length: 31 }, (_, i) => i + 1),
};

const SelectPeriod = ({ setModalOpen }) => {
  const [pickerValue, setPickerValue] = useState({
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  });
  const [checkButton, setCheckButton] = useState(0);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.dateButtonWrapper}>
            <button
              type="button"
              onClick={() => setCheckButton(0)}
              className={
                checkButton === 0 ? styles.activeButton : styles.inactiveButton
              }
              style={{ borderRadius: "4px 0px 0px 4px" }}
            >
              시작일
            </button>
            <button
              type="button"
              onClick={() => setCheckButton(1)}
              className={
                checkButton === 1 ? styles.activeButton : styles.inactiveButton
              }
              style={{ borderRadius: "0px 4px 4px 0px" }}
            >
              종료일
            </button>
          </div>
          <Picker
            value={pickerValue}
            onChange={setPickerValue}
            wheelMode="normal"
            className={styles.customPicker}
            height={132}
          >
            {Object.keys(selections).map((name) => (
              <Picker.Column key={name} name={name}>
                {selections[name].map((option) => (
                  <Picker.Item key={option} value={option}>
                    {({ selected }) => (
                      <div
                        style={{
                          backgroundColor: selected && "#FAFAFA",
                          color: selected ? "#5E5E5E" : "#BEBEBE",
                          fontWeight: selected ? "700" : "500",
                          fontFamily: "Pretendard",
                          fontSize: "20px",
                        }}
                      >
                        {option}
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
            ))}
          </Picker>
        </div>
        <div className={styles.checkButtonWrapper}>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className={styles.cancelButton}
          >
            취소
          </button>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className={styles.confirmButton}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPeriod;
