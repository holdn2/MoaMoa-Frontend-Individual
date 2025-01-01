// 현재 소비 금액 등을 알려주고 나의 소비 입력하기로 이동하는 컴포넌트
import styles from "./InputConsComponent.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import ToNextLevel from "../ToNextLevel/ToNextLevel";

const InputConsComponent = () => {
  const navigate = useNavigate();

  const userName = "찬영";
  const stateMsg = "거의 다 왔어요!";
  const restCost = 30000;
  const totalCost = 270000;
  const progressPercent = 90;
  return (
    <div className={styles.InputContainer}>
      <div className={styles.TxtImgContainer}>
        <span className={styles.TextContainer}>
          {userName}님
          <br />
          {stateMsg}
        </span>
        <img src="../src/assets/PigSub/pigHappy.svg" alt="행복한돼지" />
      </div>
      <div className={styles.InputConsContainer}>
        <div className={styles.CurrentConsContainer}>
          <div className={styles.ProgressCircleContainer}>
            <img
              src="../src/assets/ProgressBar/progressCircle.svg"
              alt="현재 사용 소비 금액 비율"
              className={styles.ProgressCircle}
            />
            <span className={styles.ProgressPercent}>{progressPercent}%</span>
          </div>

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
      <ToNextLevel />
    </div>
  );
};

export default InputConsComponent;
