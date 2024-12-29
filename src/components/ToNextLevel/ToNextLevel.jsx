import styles from "./ToNextLevel.module.css";

const ToNextLevel = () => {
  const currentCoin = 100;
  const necessaryCoin = 200;
  return (
    <div className={styles.NextLevelContainer}>
      <span className={styles.NextLevelText}>다음 레벨까지</span>
      <div className={styles.BarContainer}>
        <img
          src="../src/assets/ProgressBar/progressBar.svg"
          alt="다음 레벨까지 남은 코인"
        />
        <span className={styles.RestCoinText}>
          {currentCoin}/{necessaryCoin}코인
        </span>
      </div>
    </div>
  );
};

export default ToNextLevel;
