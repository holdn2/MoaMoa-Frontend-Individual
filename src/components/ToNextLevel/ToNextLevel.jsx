import { useNavigate } from "react-router-dom";
import styles from "./ToNextLevel.module.css";
import arrowRightSmall from "../../assets/Navigation/arrowRightSmall.svg";
import dustLv1 from "../../assets/DustLevel/Lv1.svg";
import ProgressBar from "../ProgressBar/ProgressBar";

const ToNextLevel = () => {
  const navigate = useNavigate();
  const currentLevel = 0;
  const nextLevel = 1;
  const toLevelUpCoin = 200;
  const currentCoin = 100;
  const currentPercent = 50;

  return (
    <div className={styles.NextLevelContainer}>
      <div className={styles.LevelTextContainer}>
        <div className={styles.ToLevelPage} onClick={() => navigate("/level")}>
          <span
            className={styles.ToLevelUpText}
            style={{ color: "#5e5e5e", marginTop: "12px", marginRight: "-3px" }}
          >
            더보기
          </span>
          <img src={arrowRightSmall} alt="레벨 자세히 보기" />
        </div>
        <span className={styles.CurrentLevelText}>
          나의 레벨:{" "}
          <span style={{ fontSize: "18px", fontWeight: "800" }}>
            Lv.{currentLevel}
          </span>
        </span>
        <span className={styles.ToLevelUpText}>
          다음 레벨까지{" "}
          <span style={{ fontWeight: "600" }}>
            {toLevelUpCoin - currentCoin}코인
          </span>{" "}
          남았어요
        </span>
      </div>
      <div className={styles.LevelProgressBarContainer}>
        <ProgressBar size="homeLevel" currentProgress={currentPercent} />
        <div className={styles.NextLevelDust}>
          <span className={styles.NextLevelText}>Lv.{nextLevel}</span>
          <img
            style={{ width: "41px", height: "43px" }}
            src={dustLv1}
            alt="다음 레벨 먼지"
          />
        </div>
      </div>
    </div>
  );
};

export default ToNextLevel;
