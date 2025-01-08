import React from "react";
import styles from "./Level.module.css";
import Header from "../../components/Header/Header";
import BottomBar from "../../components/BottomBar/BottomBar";

const Level = () => {
  const pageName = "레벨";
  return (
    <div className={styles.LevelPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <div className={styles.DustContainer}>
          <div className={styles.LevelContainer}>
            <img
              className={styles.DustImg}
              src="../src/assets/DustLevel/Lv0.svg"
              alt="Lv.0"
            />
            <div className={styles.Lv1Container}>
              <span className={styles.DustText}>Lv.0</span>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.DustImg}
              src="../src/assets/DustLevel/Lv1.svg"
              alt="Lv.1"
            />
            <div className={styles.DustLevelContainer}>
              <span className={styles.DustText}>Lv.1</span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.IronProgressBar} />
              </div>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.DustImg}
              src="../src/assets/DustLevel/Lv2.svg"
              alt="Lv.2"
            />
            <div className={styles.DustLevelContainer}>
              <span className={styles.DustText}>Lv.2</span>
              <span className={styles.ToLevelUp}>
                200코인을 모으면
                <br />
                <span style={{ fontWeight: 700 }}>Lv.2</span>가 될 수 있어요!
              </span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.CopperProgressBar} />
              </div>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.DustImg}
              src="../src/assets/DustLevel/Lv3.svg"
              alt="Lv.3"
            />
            <div className={styles.DustLevelContainer}>
              <span className={styles.DustText}>Lv.3</span>
              <span className={styles.ToLevelUp}>
                650코인을 모으면
                <br />
                <span style={{ fontWeight: 700 }}>Lv.3</span>가 될 수 있어요!
              </span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.SilverProgressBar} />
              </div>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.DustImg}
              src="../src/assets/DustLevel/Lv4.svg"
              alt="Lv.4"
            />
            <div className={styles.DustLevelContainer}>
              <span className={styles.DustText}>Lv.4</span>
              <span className={styles.ToLevelUp}>
                1200코인을 모으면
                <br />
                <span style={{ fontWeight: 700 }}>Lv.4</span>가 될 수 있어요!
              </span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.GoldProgressBar} />
              </div>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.DustImg}
              src="../src/assets/DustLevel/Lv5.svg"
              alt="Lv.5"
            />
            <div className={styles.DustLevelContainer}>
              <span className={styles.DustText}>Lv.5</span>
              <span className={styles.ToLevelUp}>
                2000코인을 모으면
                <br />
                <span style={{ fontWeight: 700 }}>Lv.5</span>가 될 수 있어요!
              </span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.KingProgressBar} />
              </div>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.DustImg}
              src="../src/assets/DustLevel/Lv6.svg"
              alt="Lv.6"
            />
            <div className={styles.DustLevelContainer}>
              <span className={styles.DustText}>Lv.6</span>
              <span className={styles.ToLevelUp}>
                3000코인을 모으면
                <br />
                <span style={{ fontWeight: 700 }}>Lv.6</span>가 될 수 있어요!
              </span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.KingProgressBar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;
