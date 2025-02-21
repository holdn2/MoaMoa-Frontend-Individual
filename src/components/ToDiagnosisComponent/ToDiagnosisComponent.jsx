// 과소비 진단하러 가기로 이동하는 컴포넌트
import { useNavigate } from "react-router-dom";
import styles from "./ToDiagnosisComponent.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import dustCrown from "../../assets/CharacterImgs/dustCrown.svg";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../apis/mypage";

const ToDiagnosisComponent = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

  return (
    <div className={styles.DiagnosisContainer}>
      <div className={styles.TxtImgContainer}>
        <span className={styles.TextContainer}>
          먼저,
          <br />
          {userInfo?.nickname
            ? `${userInfo.nickname}님의`
            : "사용자 정보 불러오는 중..."}
          <br />
          과소비 진단이 필요해요!
        </span>
        <img src={dustCrown} alt="왕관 먼지" className={styles.ImgContainer} />
      </div>
      <div
        className={styles.ButtonContainer}
        onClick={() => navigate("/diagnosis")}
      >
        <PrimaryButton size="sp">과소비 진단하러 가기</PrimaryButton>
      </div>
    </div>
  );
};

export default ToDiagnosisComponent;
