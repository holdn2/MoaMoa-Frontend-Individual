import { useNavigate } from "react-router-dom";
import styles from "./MiniCallendar.module.css";
import arrowRightSmall from "../../assets/Navigation/arrowRightSmall.svg";
import attendanceCheck from "../../assets/Content/attendanceCheck.svg";
import { useEffect, useState } from "react";
import { getAttendanceDates } from "../../apis/home";

const MiniCallendar = () => {
  const navigate = useNavigate();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const [attendance, setAtendance] = useState([]);
  useEffect(() => {
    getAttendanceDates(setAtendance);
  }, []);
  const isAttend = attendance.map((day) => new Date(day).getDay());

  return (
    <div className={styles.CallendarContainer}>
      <div
        className={styles.ToDetailPage}
        onClick={() => navigate("/callendar")}
      >
        <span className={styles.ToDetailText}>더보기</span>
        <img src={arrowRightSmall} alt="레벨 자세히 보기" />
      </div>
      <span className={styles.AttendanceTitle}>출석체크</span>
      <div className={styles.Line} />
      <div className={styles.DayContainer}>
        {weekDays.map((item, index) =>
          isAttend.includes(index) ? (
            <img
              key={item}
              src={attendanceCheck}
              alt="출석"
              style={{ width: "24px", margin: "0 5px" }}
            />
          ) : (
            <span key={item} className={styles.DayText}>
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default MiniCallendar;
