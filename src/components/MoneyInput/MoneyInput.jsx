// 이 부분에 대해서는 나중에 논의가 필요할 듯. text가 다음 버튼 누르면 초기화 되게 만들어야함.
import React, { useState } from "react";
import styles from "./MoneyInput.module.css";

const MoneyInput = ({ children, isInputState, setIsInputState, setValue }) => {
  const [text, setText] = useState("");
  const handleInputChange = (e) => {
    const numericValue = Number(e.target.value.replace(/[^0-9]/g, ""));
    setText(numericValue.toLocaleString());
    setValue(numericValue); // 부모 컴포넌트로 값 전달.
  };
  return (
    <div>
      <button
        type="button"
        className={styles.moneyInputButton}
        onClick={() => setIsInputState(true)}
        style={{ display: isInputState && "none" }}
      >
        <span>{children}</span>
      </button>
      {/*버튼 클릭 시 Input으로 변경*/}
      {isInputState && (
        <div className={styles.moneyInputWrapper}>
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            className={styles.moneyInput}
          />
          <span>원</span>
        </div>
      )}
    </div>
  );
};

export default MoneyInput;
