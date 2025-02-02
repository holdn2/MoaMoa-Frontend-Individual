import React, { useState } from "react";
import styles from "./Level.module.css";
import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import dustLv0 from "../src/assets/DustLevel/Lv0.svg";
import dustLv1 from "../src/assets/DustLevel/Lv1.svg";
import dustLv2 from "../src/assets/DustLevel/Lv2.svg";
import dustLv3 from "../src/assets/DustLevel/Lv3.svg";
import dustLv4 from "../src/assets/DustLevel/Lv4.svg";
import dustLv5 from "../src/assets/DustLevel/Lv5.svg";
import dustLv6 from "http://placehold.co/49";

const Level = () => {
  const pageName = "레벨";

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
          {dustLevel.map((item) =>
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
                    currentProgress={item.currentPercent}
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

const currentCoin = 150;

const dustLevel = [
  {
    lv: 0,
    img: { dustLv0 },
  },
  {
    lv: 1,
    img: { dustLv1 },
    needCoin: 200,
    currentPercent: 100 - (100 * (200 - currentCoin)) / 200,
  },
  {
    lv: 2,
    img: { dustLv2 },
    needCoin: 500,
    currentPercent: 100 - (100 * (500 - currentCoin)) / 500,
  },
  {
    lv: 3,
    img: { dustLv3 },
    needCoin: 1000,
    currentPercent: 100 - (100 * (1000 - currentCoin)) / 1000,
  },
  {
    lv: 4,
    img: { dustLv4 },
    needCoin: 1700,
    currentPercent: 100 - (100 * (1700 - currentCoin)) / 1700,
  },
  {
    lv: 5,
    img: { dustLv5 },
    needCoin: 2600,
    currentPercent: 100 - (100 * (2600 - currentCoin)) / 2600,
  },
  {
    lv: 6,
    img: { dustLv6 },
    needCoin: 3600,
    currentPercent: 100 - (100 * (3600 - currentCoin)) / 3600,
  },
];
