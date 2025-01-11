import styles from "./ToNextLevel.module.css";

const ToNextLevel = () => {
  const currentLevel = 0;
  const nextLevel = 1;
  const toLevelUpCoin = 100;

  return (
    <div className={styles.NextLevelContainer}>
      <div className={styles.LevelTextContainer}>
        <span className={styles.CurrentLevelText}>
          나의 레벨:{" "}
          <span style={{ fontSize: "18px", fontWeight: "800" }}>
            Lv.{currentLevel}
          </span>
        </span>
        <span className={styles.ToLevelUpText}>
          다음 레벨까지{" "}
          <span style={{ fontWeight: "600" }}>{toLevelUpCoin}코인</span>{" "}
          남았어요
        </span>
      </div>
      <div className={styles.LevelProgressBarContainer}>
        <div className={styles.LevelProgressBar} />
        <div className={styles.NextLevelDust}>
          <span className={styles.NextLevelText}>Lv.{nextLevel}</span>
          <img
            style={{ width: "41px", height: "43px" }}
            src="../src/assets/DustLevel/Lv1.svg"
            alt="다음 레벨 먼지"
          />
        </div>
      </div>
    </div>
  );
};

export default ToNextLevel;
