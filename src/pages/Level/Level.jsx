import React, { useEffect, useState } from "react";
import styles from "./Level.module.css";
import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useLocation } from "react-router-dom";
import { dustLv6, dustLevelData } from "../../constants/dustLevel";
import { getUserInfo } from "../../apis/mypage";

const Level = () => {
  const pageName = "레벨";
  const location = useLocation();
  const currentCoin = location.state?.currentCoin || 0;
  const handleCurrentPercent = (currentCoin, needCoin) => {
    return 100 - (100 * (needCoin - currentCoin)) / needCoin;
  };

  // 유저 코인 정보를 위한 회원조회 api
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

  return (
    <div className={styles.LevelPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <div className={styles.CheerUpContainer}>
          <div className={styles.ContentWrapper}>
            <span className={styles.CheerUpText}>
              꼬질꼬질 먼지를 하나씩
              <br />
              닦다 보면, 어느새 반짝반짝
              <br />
              블루 먼지가 되어가요!🧹
            </span>
            <img style={{ width: "96px" }} src={dustLv6} alt="레벨 6" />
          </div>
        </div>
        <div className={styles.DustContainer}>
          {dustLevelData.map((item) =>
            item.lv === 0 ? (
              <div key={item.lv} className={styles.LevelContainer}>
                <img className={styles.DustImg} src={item.img} alt="Lv.0" />
                <div className={styles.Lv1Container}>
                  <span className={styles.DustText}>Lv.{item.lv}</span>
                </div>
              </div>
            ) : (
              <div key={item.lv} className={styles.LevelContainer}>
                <img className={styles.DustImg} src={item.img} alt={item.lv} />
                <div className={styles.DustLevelContainer}>
                  <span className={styles.DustText}>Lv.{item.lv}</span>
                  <span className={styles.ToLevelUp}>
                    {item.needCoin}코인을 모으면
                    <br />
                    <span style={{ fontWeight: 700 }}>Lv.{item.lv}</span>가 될
                    수 있어요!
                  </span>
                  <ProgressBar
                    size="level"
                    currentProgress={handleCurrentPercent(
                      currentCoin,
                      item.needCoin
                    )}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Level;
