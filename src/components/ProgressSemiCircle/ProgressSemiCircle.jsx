import { useMemo } from "react";
import styles from "./ProgressSemiCircle.module.css";
import semiCircle5 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle5.svg";
import semiCircle10 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle10.svg";
import semiCircle15 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle15.svg";
import semiCircle35 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle35.svg";
import semiCircle45 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle45.svg";
import semiCircle50 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle50.svg";
import semiCircle65 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle65.svg";
import semiCircle75 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle75.svg";
import semiCircle85 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle85.svg";
import semiCircle95 from "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle95.svg";

const ProgressSemiCircle = ({ percentage }) => {
  // useMemo를 사용하여 불필요한 리렌더링 방지.
  const progressImg = useMemo(() => {
    if (percentage < 10) return semiCircle5;
    if (percentage < 15) return semiCircle10;
    if (percentage < 35) return semiCircle15;
    if (percentage < 45) return semiCircle35;
    if (percentage < 50) return semiCircle45;
    if (percentage < 65) return semiCircle50;
    if (percentage < 75) return semiCircle65;
    if (percentage < 85) return semiCircle75;
    if (percentage < 95) return semiCircle85;
    return semiCircle95;
  }, [percentage]);

  return (
    <div className={styles.Wrapper}>
      <img src={progressImg} alt={`${percentage}%`} />
      <span className={styles.PercentText}>{percentage}%</span>
    </div>
  );
};

export default ProgressSemiCircle;
