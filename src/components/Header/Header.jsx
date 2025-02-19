// 상단 헤더 컴포넌트
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import bell from "../../assets/Navigation/bell.svg";
import dust from "../../assets/Content/dust.svg";
import headerCoin from "../../assets/Content/headerCoin.svg";
import arrowLeftBig from "../../assets/Navigation/arrowLeftBig.svg";
import setting from "../../assets/Navigation/setting.svg";
import plus from "../../assets/Navigation/plus.svg";
import closeBig from "../../assets/Navigation/closeBig.svg";
import { getUserInfo } from "../../apis/mypage";

const Header = ({
  pageName,
  diagnosisStage,
  setDiagnosisStage,
  collectBack,
}) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    dustImage: "",
    level: 0,
    beenWith: 0,
    coin: 0,
  });
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

  const renderHeaderContent = () => {
    switch (pageName) {
      case "홈화면":
        return (
          <div className={styles.HeaderButtonContainer}>
            <button onClick={() => navigate("/alarm")}>
              <img src={bell} alt="알림" />
            </button>
            <button
              onClick={() =>
                navigate("/level", {
                  state: { currentCoin: userInfo.coin },
                })
              }
            >
              <img src={dust} alt="먼지" />
            </button>
            <button onClick={() => navigate("/mycoin")}>
              <img src={headerCoin} alt="동전" />
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
                <img src={arrowLeftBig} alt="뒤로가기" />
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
              <img src={setting} alt="설정으로" />
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
              <img src={arrowLeftBig} alt="뒤로가기" />
            </button>
            <button
              className={styles.GoSettingButton}
              onClick={() => navigate("/setting")}
            >
              <img src={setting} alt="설정으로" />
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
              <img src={arrowLeftBig} alt="뒤로가기" />
            </button>
            <button
              className={styles.GoSettingButton}
              onClick={() => navigate("/friendsearch")}
            >
              <img src={plus} alt="친구 추가 페이지로 가는 버튼" />
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
                <img src={closeBig} alt="뒤로가기" />
              </button>
            );
          case 8:
          case 9:
            return (
              <button
                className={styles.GoBackButton}
                onClick={() => setDiagnosisStage(diagnosisStage - 2)}
              >
                <img src={arrowLeftBig} alt="뒤로가기" />
              </button>
            );
          default:
            return (
              <button
                className={styles.GoBackButton}
                onClick={() => setDiagnosisStage(diagnosisStage - 1)}
              >
                <img src={arrowLeftBig} alt="뒤로가기" />
              </button>
            );
        }

      default:
        return (
          // navigate(-1) : 클릭 시 바로 직전 페이지로 이동
          <div className={styles.GoBackButton} onClick={() => navigate(-1)}>
            <img src={arrowLeftBig} alt="뒤로가기" />
          </div>
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
