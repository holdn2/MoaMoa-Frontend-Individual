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
        <div className={styles.PigContainer}>
          <div className={styles.LevelContainer}>
            <img
              className={styles.PigImg}
              src="../src/assets/Pig/dirtpig.svg"
              alt="흙돼지"
            />
            <div className={styles.PigLevelContainer}>
              <span className={styles.PigText}>흙돼지</span>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.PigImg}
              src="../src/assets/Pig/ironpig.svg"
              alt="철돼지"
            />
            <div className={styles.PigLevelContainer}>
              <span className={styles.PigText}>철돼지</span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.IronProgressBar} />
              </div>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.PigImg}
              src="../src/assets/Pig/copperpig.svg"
              alt="동돼지"
            />
            <div className={styles.PigLevelContainer}>
              <span className={styles.PigText}>동돼지</span>
              <span className={styles.ToLevelUp}>
                200코인을 모으면
                <br />
                동돼지가 될 수 있어요!
              </span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.CopperProgressBar} />
              </div>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.PigImg}
              src="../src/assets/Pig/silverpig.svg"
              alt="은돼지"
            />
            <div className={styles.PigLevelContainer}>
              <span className={styles.PigText}>은돼지</span>
              <span className={styles.ToLevelUp}>
                650코인을 모으면
                <br />
                은돼지가 될 수 있어요!
              </span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.SilverProgressBar} />
              </div>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.PigImg}
              src="../src/assets/Pig/goldpig.svg"
              alt="금돼지"
            />
            <div className={styles.PigLevelContainer}>
              <span className={styles.PigText}>금돼지</span>
              <span className={styles.ToLevelUp}>
                1200코인을 모으면
                <br />
                금돼지가 될 수 있어요!
              </span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.GoldProgressBar} />
              </div>
            </div>
          </div>
          <div className={styles.LevelContainer}>
            <img
              className={styles.PigImg}
              src="../src/assets/Pig/kingpig.svg"
              alt="왕관돼지"
            />
            <div className={styles.PigLevelContainer}>
              <span className={styles.PigText}>왕관돼지</span>
              <span className={styles.ToLevelUp}>
                2000코인을 모으면
                <br />
                왕관돼지가 될 수 있어요!
              </span>
              <div className={styles.TotalProgressBar}>
                <div className={styles.KingProgressBar} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar pageName={pageName} />
    </div>
  );
};

export default Level;
