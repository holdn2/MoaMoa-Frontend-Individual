// 상단 헤더 컴포넌트
import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import bell from "../../assets/Navigation/bell.svg";

const Header = ({
  pageName,
  diagnosisStage,
  setDiagnosisStage,
  collectBack,
}) => {
  const navigate = useNavigate();

  const renderHeaderContent = () => {
    switch (pageName) {
      case "홈화면":
        return (
          <div className={styles.HeaderButtonContainer}>
            <button onClick={() => navigate("/alarm")}>
              <img src={bell} alt="알림" />
            </button>
            <button onClick={() => navigate("/level")}>
              <img src="../src/assets/Content/dust.svg" alt="먼지" />
            </button>
            <button onClick={() => navigate("/mycoin")}>
              <img src="../src/assets/Content/headerCoin.svg" alt="동전" />
            </button>
          </div>
        );
      case "모으기":
        return (
          <>
            {collectBack ? (
              <button
                className={styles.GoBackButton}
                onClick={() => navigate(-1)}
              >
                <img
                  src="../../../src/assets/Navigation/arrowLeftBig.svg"
                  alt="뒤로가기"
                />
              </button>
            ) : (
              <> </>
            )}
          </>
        );
      case "내 프로필":
        return (
          <>
            <button
              className={styles.GoSettingButton}
              onClick={() => navigate("/setting")}
            >
              <img src="../src/assets/Navigation/setting.svg" alt="설정으로" />
            </button>
          </>
        );
      case "프로필 꾸미기":
      case "나의 기록":
        return (
          <>
            <button
              className={styles.GoBackButton}
              onClick={() => navigate(-1)}
            >
              <img
                src="../src/assets/Navigation/arrowLeftBig.svg"
                alt="뒤로가기"
              />
            </button>
            <button
              className={styles.GoSettingButton}
              onClick={() => navigate("/setting")}
            >
              <img src="../src/assets/Navigation/setting.svg" alt="설정으로" />
            </button>
          </>
        );
      case "친구 목록":
        return (
          <>
            <button
              className={styles.GoBackButton}
              onClick={() => navigate(-1)}
            >
              <img
                src="../src/assets/Navigation/arrowLeftBig.svg"
                alt="뒤로가기"
              />
            </button>
            <button
              className={styles.GoSettingButton}
              onClick={() => navigate("/setting")}
            >
              <img
                src="../src/assets/Navigation/plus.svg"
                alt="친구 추가 페이지로 가는 버튼"
              />
            </button>
          </>
        );
      case "과소비 진단하기":
        switch (diagnosisStage) {
          case 0:
            return (
              <button
                className={styles.GoBackButton}
                onClick={() => navigate(-1)}
              >
                <img
                  src="../src/assets/Navigation/closeBig.svg"
                  alt="뒤로가기"
                />
              </button>
            );
          case 8:
          case 9:
            return (
              <button
                className={styles.GoBackButton}
                onClick={() => setDiagnosisStage(diagnosisStage - 2)}
              >
                <img
                  src="../src/assets/Navigation/arrowLeftBig.svg"
                  alt="뒤로가기"
                />
              </button>
            );
          default:
            return (
              <button
                className={styles.GoBackButton}
                onClick={() => setDiagnosisStage(diagnosisStage - 1)}
              >
                <img
                  src="../src/assets/Navigation/arrowLeftBig.svg"
                  alt="뒤로가기"
                />
              </button>
            );
        }

      default:
        return (
          // navigate(-1) : 클릭 시 바로 직전 페이지로 이동
          <button className={styles.GoBackButton} onClick={() => navigate(-1)}>
            <img
              src="../../../src/assets/Navigation/arrowLeftBig.svg"
              alt="뒤로가기"
            />
          </button>
        );
    }
  };
  return (
    <div className={styles.HeaderContainer}>
      <span className={styles.HeaderText}>{pageName}</span>
      {renderHeaderContent()}
    </div>
  );
};

export default Header;
