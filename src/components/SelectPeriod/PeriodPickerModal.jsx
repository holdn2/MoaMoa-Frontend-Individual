import { useState } from "react";
import PeriodPicker from "./PeriodPicker";
import styles from "./PeriodPickerModal.module.css";

const PeriodPickerModal = ({
  setModalOpen,
  startValue,
  setStartValue,
  endValue,
  setEndValue,
}) => {
  const [checkButton, setCheckButton] = useState(0);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.dateButtonWrapper}>
            {/*시작 종료 버튼*/}
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
          {/*픽커 자리*/}
          <PeriodPicker
            pickerValue={checkButton === 0 ? startValue : endValue}
            setPickerValue={checkButton === 0 ? setStartValue : setEndValue}
          />
        </div>
        {/*취소 확인 버튼*/}
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
            onClick={() =>
              checkButton === 0 ? setCheckButton(1) : setModalOpen(false)
            }
            className={styles.confirmButton}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeriodPickerModal;
