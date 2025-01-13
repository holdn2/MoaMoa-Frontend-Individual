// 현재 소비 금액 등을 알려주고 나의 소비 입력하기로 이동하는 컴포넌트
import styles from "./InputConsComponent.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import ToNextLevel from "../ToNextLevel/ToNextLevel";
import ProgressCircle from "../ProgressCircle/ProgressCircle";


const InputConsComponent = () => {
  const navigate = useNavigate();

  const userName = "모아모아짱";
  const stateMsg = "거의 다 왔어요!";
  const restCost = 30000;
  const totalCost = 270000;
  const progressPercent = 90;
  return (
    <div className={styles.InputContainer}>
      <div className={styles.TxtImgContainer}>
        <span className={styles.TextContainer}>
          <span className={styles.UserName}>{userName} </span>님,
          <br />
          {stateMsg}
        </span>
        <img
          className={styles.ImgContainer}
          src="../src/assets/CharacterImgs/dustCrown.svg"
          alt="왕관 먼지"
        />
      </div>
      <div className={styles.InputConsContainer}>
        <div className={styles.CurrentConsContainer}>
          <ProgressCircle
            progressPercent={progressPercent}
            width="128px"
            height="117px"
            fontSize="22px"
            fontWeight="500"
          />
          <div className={styles.AllCostContainer}>
            <div className={styles.CostContainer}>
              <span className={styles.CostText}>현재 남은 소비 금액</span>
              <span className={styles.Cost}>{restCost.toLocaleString()}</span>
            </div>
            <div className={styles.CostContainer}>
              <span className={styles.CostText}>이번주 총 소비 금액</span>
              <span className={styles.Cost}>{totalCost.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div
          className={styles.InputButton}
          onClick={() => navigate("/inputconsumption")}
        >
          <PrimaryButton size="sp">나의 소비 입력하기</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default InputConsComponent;
