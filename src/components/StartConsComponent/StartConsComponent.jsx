// 나의 소비 시작하기로 이동하는 컴포넌트

import styles from "./StartConsComponent.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const StartConsComponent = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.StartContainer}>
      <div className={styles.TxtImgContainer}>
        <span className={styles.TextContainer}>
          나의 소비를 기록하고 친구들과 함께
          <br />
          돈을 모아봐요 !
        </span>
        <img
          src="../src/assets/PigSub/pigHappy.svg"
          alt="행복한돼지"
          className={styles.ImgContainer}
        />
      </div>
      <button
        className={styles.ButtonContainer}
        onClick={() => navigate("/startconsumption")}
      >
        <PrimaryButton size="sp">나의 소비 시작하기</PrimaryButton>
      </button>
    </div>
  );
};

export default StartConsComponent;
