// 현재 소비 금액 등을 알려주고 나의 소비 입력하기로 이동하는 컴포넌트
import styles from "./InputConsComponent.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import ToNextLevel from "../ToNextLevel/ToNextLevel";
import ProgressSemiCircle from "../ProgressSemiCircle/ProgressSemiCircle";

const InputConsComponent = () => {
  const navigate = useNavigate();

  const userName = "모아모아짱";
  const stateMsg = "거의 다 왔어요!";
  const restCost = 30000;
  const totalCost = 270000;
  const progressPercent = 85;
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
          <ProgressSemiCircle percentage={progressPercent} />
          <div className={styles.AllCostContainer}>
            <div className={styles.CostContainer}>
              <span className={styles.CostText}>현재 남은 소비 금액</span>
              <span className={styles.CostText} style={{ fontWeight: "600" }}>
                {restCost.toLocaleString()}
              </span>
            </div>
            <div className={styles.CostContainer}>
              <span className={styles.CostText}>이번주 총 소비 금액</span>
              <span className={styles.CostText} style={{ fontWeight: "600" }}>
                {totalCost.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <div
          style={{ marginBottom: "" }}
          onClick={() => navigate("/inputconsumption")}
        >
          <SecondaryButton size="lg">나의 소비 입력하기</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default InputConsComponent;
