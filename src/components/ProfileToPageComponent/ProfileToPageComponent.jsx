import React from "react";
import styles from "./ProfileToPageComponent.module.css";
import { useNavigate } from "react-router-dom";
import recent from "../src/assets/Content/recent.svg";
import arrowRightSmall from "../src/assets/Navigation/arrowRightSmall.svg";
import checkBold from "../src/assets/Content/checkBold.svg";

const ProfileToPageComponent = ({ dstName }) => {
  const navigate = useNavigate();
  return (
    <>
      {dstName === "나의 기록" ? (
        <button
          className={styles.ProfileToPageComponentContainer}
          onClick={() => navigate("/myrecord")}
        >
          <img src={recent} alt="시계" className={styles.ContentImg} />
          <span className={styles.ProfileToPageComponentText}>{dstName}</span>
          <img src={arrowRightSmall} alt="화살표" className={styles.ArrowImg} />
        </button>
      ) : (
        <button
          className={styles.ProfileToPageComponentContainer}
          onClick={() => navigate("/diagnosis")}
        >
          <img src={checkBold} alt="체크" className={styles.ContentImg} />
          <span className={styles.ProfileToPageComponentText}>{dstName}</span>
          <img src={arrowRightSmall} alt="화살표" className={styles.ArrowImg} />
        </button>
      )}
    </>
  );
};

export default ProfileToPageComponent;
