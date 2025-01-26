import Picker from "react-mobile-picker";
import styles from "./PeriodPickerModal.module.css";

const PeriodPicker = ({ pickerValue, setPickerValue }) => {
  const date = new Date();

  const selections = {
    // (현재 연도-12년)부터 (현재 연도+11년)까지 배열 생성
    year: Array.from(
      { length: 24 },
      (_, i) => i + Number(date.getFullYear()) - 12
    ),
    month: Array.from({ length: 12 }, (_, i) => i + 1),
    day: Array.from({ length: 31 }, (_, i) => i + 1),
  };

  return (
    <>
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
    </>
  );
};

export default PeriodPicker;
