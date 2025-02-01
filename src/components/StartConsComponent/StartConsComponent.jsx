// 나의 소비 시작하기로 이동하는 컴포넌트

import styles from "./StartConsComponent.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import dustCrown from "../src/assets/CharacterImgs/dustCrown.svg";

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
        <img src={dustCrown} alt="왕관 먼지" className={styles.ImgContainer} />
      </div>
      <div
        className={styles.ButtonContainer}
        onClick={() => navigate("/startconsumption")}
      >
        <PrimaryButton size="sp">소비기록 시작하기</PrimaryButton>
      </div>
    </div>
  );
};

export default StartConsComponent;
