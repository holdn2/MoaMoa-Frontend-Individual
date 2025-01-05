import React from "react";
import styles from "./ProfileToPageComponent.module.css";
import { useNavigate } from "react-router-dom";

const ProfileToPageComponent = ({ dstName }) => {
  const navigate = useNavigate();
  return (
    <>
      {dstName === "나의 기록" ? (
        <button
          className={styles.ProfileToPageComponentContainer}
          onClick={() => navigate("/")}
        >
          <img
            src="../src/assets/Content/recent.svg"
            alt="시계"
            className={styles.ContentImg}
          />
          <span className={styles.ProfileToPageComponentText}>{dstName}</span>
          <img
            src="../src/assets/Navigation/arrowRightSmall.svg"
            alt="화살표"
            className={styles.ArrowImg}
          />
        </button>
      ) : (
        <button
          className={styles.ProfileToPageComponentContainer}
          onClick={() => navigate("/diagnosis")}
        >
          <img
            src="../src/assets/Content/checkBold.svg"
            alt="체크"
            className={styles.ContentImg}
          />
          <span className={styles.ProfileToPageComponentText}>{dstName}</span>
          <img
            src="../src/assets/Navigation/arrowRightSmall.svg"
            alt="화살표"
            className={styles.ArrowImg}
          />
        </button>
      )}
    </>
  );
};

export default ProfileToPageComponent;
