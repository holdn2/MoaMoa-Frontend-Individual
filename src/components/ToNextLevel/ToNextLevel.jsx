import { useNavigate } from "react-router-dom";
import styles from "./ToNextLevel.module.css";
import arrowRightSmall from "../../assets/Navigation/arrowRightSmall.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useEffect, useMemo, useState } from "react";
import { getUserInfo } from "../../apis/mypage";
import { dustLevelData } from "../../constants/dustLevel";

const ToNextLevel = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    dustImage: "",
    level: 0,
    beenWith: 0,
    coin: 0,
  });
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

  const currentCoin = userInfo.coin;
  const nextLevelInfo = useMemo(
    () => dustLevelData.find((dust) => dust.lv === userInfo.level + 1),
    [userInfo.level]
  );
  const currentPercent = useMemo(() => {
    return nextLevelInfo
      ? 100 -
          (100 * (nextLevelInfo.needCoin - currentCoin)) /
            nextLevelInfo.needCoin
      : 0;
  }, [currentCoin, nextLevelInfo]);

  return (
    <div className={styles.NextLevelContainer}>
      <div className={styles.LevelTextContainer}>
        <div
          className={styles.ToLevelPage}
          onClick={() =>
            navigate("/level", {
              state: { currentCoin: currentCoin },
            })
          }
        >
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
            Lv.{userInfo.level}
          </span>
        </span>
        <span className={styles.ToLevelUpText}>
          다음 레벨까지{" "}
          <span style={{ fontWeight: "600" }}>
            {nextLevelInfo.needCoin - currentCoin}코인
          </span>{" "}
          남았어요
        </span>
      </div>
      <div className={styles.LevelProgressBarContainer}>
        <ProgressBar size="homeLevel" currentProgress={currentPercent} />
        <div className={styles.NextLevelDust}>
          <span className={styles.NextLevelText}>Lv.{userInfo.level + 1}</span>
          <img
            style={{ width: "41px", height: "43px" }}
            src={nextLevelInfo.img}
            alt="다음 레벨 먼지"
          />
        </div>
      </div>
    </div>
  );
};

export default ToNextLevel;
