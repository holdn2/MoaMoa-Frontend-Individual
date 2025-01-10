import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginStep, setLoginStep] = useState(0);
  const [inputNickname, setInputNickname] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [visiblePw, setVisiblePw] = useState(false);
  // 서버에 결과 요청 후 맞으면 isCorrect가 true가 되게
  const [isCorrect, setIsCorrect] = useState(true);

  // 2초 후 홈화면으로 가기
  useEffect(() => {
    if (loginStep === 3) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loginStep]);

  const renderLogin = () => {
    switch (loginStep) {
      case 0:
        return (
          <>
            <div className={styles.WelcomeTextContainer}>
              <span className={styles.WelcomeText}>반가워요!</span>
              <span className={styles.NormalText}>
                닉네임과 비밀번호를 입력해 주세요
              </span>
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "79px" }}>
              <span className={styles.InputTitle}>닉네임</span>
              <input
                className={styles.InputContainer}
                type="text"
                onChange={(e) => setInputNickname(e.target.value)}
              />
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "20px" }}>
              <span className={styles.InputTitle}>비밀번호</span>
              <img
                className={styles.VisiblePw}
                onClick={() => setVisiblePw(!visiblePw)}
                src="../src/assets/Content/visible.svg"
                alt="비밀번호 보이기"
              />
              {visiblePw ? (
                <input
                  className={styles.InputContainer}
                  type="text"
                  onChange={(e) => setInputPw(e.target.value)}
                />
              ) : (
                <input
                  className={styles.InputContainer}
                  type="password"
                  onChange={(e) => setInputPw(e.target.value)}
                />
              )}
            </div>
            <div className={styles.ToFindPwContainer}>
              <span className={styles.NormalText}>비밀번호를 잊으셨나요?</span>
              <span className={styles.ToFindPw} onClick={() => setLoginStep(1)}>
                비밀번호 찾기
              </span>
            </div>

            <div
              className={styles.ButtonContainer}
              onClick={() => {
                if (isCorrect) {
                  setLoginStep(3), console.log(inputNickname, inputPw);
                }
              }}
            >
              <PrimaryButton>다음</PrimaryButton>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className={styles.LoginProcessTextContainer}>
              <span className={styles.LoginProcessText}>비밀번호 찾기</span>
              <span
                className={styles.NormalText}
                style={{ fontWeight: "500px" }}
              >
                이전에 사용하셨던
                <br />
                닉네임을 입력해 주세요
              </span>
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "78px" }}>
              <span className={styles.InputTitle}>닉네임</span>
              <input
                className={styles.InputContainer}
                type="text"
                onChange={(e) => setInputNickname(e.target.value)}
                style={{ color: "#2b2b2b" }}
              />
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={() => {
                setLoginStep(2);
              }}
            >
              <PrimaryButton>비밀번호 찾기</PrimaryButton>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={styles.LoginProcessTextContainer}>
              <span className={styles.LoginProcessText}>비밀번호 찾기</span>
              <span
                className={styles.NormalText}
                style={{ fontWeight: "500px" }}
              >
                {inputNickname} 님의 비밀번호는
              </span>
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "78px" }}>
              <span className={styles.InputTitle}>비밀번호</span>
              <div className={styles.ShowPwContainer}>Abcdegg23</div>
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={() => {
                setLoginStep(0);
              }}
            >
              <PrimaryButton>로그인하러 가기</PrimaryButton>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className={styles.LoginProcessTextContainer}>
              <span className={styles.LoginProcessText}>로그인 완료!</span>
              <span className={styles.WelcomeUserText}>
                <span style={{ color: "#454545", fontSize: "22px" }}>
                  {inputNickname}
                </span>{" "}
                님 환영해요!
              </span>
            </div>
            <img
              src="../src/assets/CharacterImgs/dustSunglassCoin.svg"
              alt="환영하는 먼지"
              style={{ width: "222px", height: "198px", marginTop: "101px" }}
            />
          </>
        );
    }
  };
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#fafafa",
        alignItems: "center",
      }}
    >
      {renderLogin()}
    </div>
  );
};

export default Login;
