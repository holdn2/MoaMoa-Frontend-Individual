import React, { useState } from "react";
import styles from "./MoneyInput.module.css";

const MoneyInput = ({ children, isInputState, setIsInputState }) => {
  const [text, setText] = useState("");
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
            onChange={(e) => setText(e.target.value)}
            className={styles.moneyInput}
          />
          <span>원</span>
        </div>
      )}
    </div>
  );
};

export default MoneyInput;
