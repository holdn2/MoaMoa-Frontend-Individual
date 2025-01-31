import { useNavigate } from "react-router-dom";
import styles from "./MiniCallendar.module.css";

const MiniCallendar = () => {
  const navigate = useNavigate();
  const week = [
    {
      day: "월",
      attendance: false,
    },
    {
      day: "화",
      attendance: true,
    },
    {
      day: "수",
      attendance: false,
    },
    {
      day: "목",
      attendance: true,
    },
    {
      day: "금",
      attendance: true,
    },
    {
      day: "토",
      attendance: false,
    },
    {
      day: "일",
      attendance: false,
    },
  ];

  return (
    <div className={styles.CallendarContainer}>
      <div
        className={styles.ToDetailPage}
        onClick={() => navigate("/callendar")}
      >
        <span className={styles.ToDetailText}>더보기</span>
        <img
          src="../src/assets/Navigation/arrowRightSmall.svg"
          alt="레벨 자세히 보기"
        />
      </div>
      <span className={styles.AttendanceTitle}>출석체크</span>
      <div className={styles.Line} />
      <div className={styles.DayContainer}>
        {week.map((item) =>
          item.attendance ? (
            <img
              key={item.day}
              src="../src/assets/Content/attendanceCheck.svg"
              alt="출석"
              style={{ width: "24px", margin: "0 5px" }}
            />
          ) : (
            <span key={item.day} className={styles.DayText}>
              {item.day}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default MiniCallendar;
