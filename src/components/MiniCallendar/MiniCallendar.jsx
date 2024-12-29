import styles from "./MiniCallendar.module.css";

const MiniCallendar = () => {
  const month = 11;
  const week = ["월", "화", "수", "목", "금", "토", "일"];
  const day = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={styles.CallendarContainer}>
      <button className={styles.MonthContainer}>
        <span className={styles.Month}>{month}월</span>
        <img
          src="../src/assets/Navigation/polygon.svg"
          alt="작은 arrowDown(polygon)"
        />
      </button>
      <div className={styles.WeekContainer}>
        <div className={styles.WeekTextContainer}>
          {week.map((item) => (
            <div key={item} className={styles.WeekText}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.Line} />
        <div className={styles.DayTextContainer}>
          {day.map((item) => (
            <div key={item} className={styles.DayText}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniCallendar;
