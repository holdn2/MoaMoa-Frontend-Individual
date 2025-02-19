import React, { useState } from "react";
import PublicChallenge from "./Challenge/PublicChallenge/PublicChallenge";
import FriendChallenge from "./Challenge/FriendChallenge/FriendChallenge";
import styles from "./AboutChallenge.module.css";

const AboutChallenge = () => {
  const [isClicked, setIsClicked] = useState(0);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.btnWrapper}>
        <button
          type="button"
          onClick={() => setIsClicked(0)}
          className={isClicked === 0 ? styles.activeBtn : styles.inactiveBtn}
        >
          전체
        </button>
        <button
          type="button"
          onClick={() => setIsClicked(1)}
          className={isClicked === 1 ? styles.activeBtn : styles.inactiveBtn}
        >
          친구
        </button>
      </nav>
      {isClicked === 0 ? <PublicChallenge /> : <FriendChallenge />}
    </div>
  );
};

export default AboutChallenge;
