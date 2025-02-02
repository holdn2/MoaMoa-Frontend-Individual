import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import visible from "../../assets/Content/visible.svg";
import emailOK from "../../assets/Content/emailOK.svg";
import emailCheck from "../../assets/Content/emailCheck.svg";
import dustSunglassCoin from "../../assets/CharacterImgs/dustSunglassCoin.svg";

const exEmail = "asdf@naver.com";
const exAuthCode = "ASDF1234";

// setState는 비동기적으로 동작하므로 즉시 반영하려면 이벤트값을 바로 이용해야함.

const Login = () => {
  const navigate = useNavigate();
  const [loginStep, setLoginStep] = useState(0);
  const [inputNickname, setInputNickname] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [visiblePw, setVisiblePw] = useState(false);
  // 서버에 결과 요청 후 맞으면 isCorrect가 true가 되게
  const [isCorrect, setIsCorrect] = useState(true);

  // 유효한 이메일인지 여부
  const [isValidEmail, setISValidEmail] = useState(false);

  // 일치하는 인증번호인지 여부
  const [isCorrectAuthCode, setIsCorrectAuthCode] = useState(false);
  const [currenAuthCode, setCurrentAuthCode] = useState("");

  // 새로운 비밀번호와 재확인
  const [newPw, setNewPw] = useState("");
  const [newPwCheck, setNewPwCheck] = useState("");

  // 그 유저의 이메일이 맞는지 확인하는 로직 필요.
  const checkEmail = (e) => {
    const inputText = e.target.value;
    setISValidEmail(inputText === exEmail);
  };

  const checkAuthCode = (e) => {
    const inputAuthCode = e.target.value;
    setIsCorrectAuthCode(inputAuthCode === exAuthCode);
    setCurrentAuthCode(inputAuthCode);
  };

  // 2초 후 홈화면으로 가기
  useEffect(() => {
    if (loginStep === 5) {
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
                value={inputNickname}
                onChange={(e) => setInputNickname(e.target.value)}
              />
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "20px" }}>
              <span className={styles.InputTitle}>비밀번호</span>
              <img
                className={styles.VisiblePw}
                onClick={() => setVisiblePw(!visiblePw)}
                src={visible}
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
                  setLoginStep(5), console.log(inputNickname, inputPw);
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
                닉네임과 이메일을 입력해 주세요
              </span>
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "60px" }}>
              <span className={styles.InputTitle}>닉네임</span>
              <input
                className={styles.InputContainer}
                type="text"
                value={inputNickname}
                onChange={(e) => setInputNickname(e.target.value)}
                style={{ color: "#2b2b2b" }}
              />
              <div className={styles.EmailInputContainer}>
                <span
                  className={styles.InputTitle}
                  style={{ marginTop: "18px" }}
                >
                  이메일
                </span>
                {isValidEmail ? (
                  <img
                    className={styles.EmailCheckImg}
                    src={emailOK}
                    alt="이메일 확인"
                  />
                ) : (
                  <img
                    className={styles.EmailCheckImg}
                    src={emailCheck}
                    alt="이메일 확인"
                  />
                )}

                <input
                  className={styles.InputContainer}
                  type="text"
                  onChange={checkEmail}
                  style={{ color: "#2b2b2b" }}
                  placeholder="abcd1234@example.com"
                />
              </div>
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={() => {
                setLoginStep(2);
              }}
              style={{
                pointerEvents: !isValidEmail ? "none" : "auto",
              }}
            >
              <PrimaryButton disabled={!isValidEmail}>
                인증코드 받기
              </PrimaryButton>
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
                이메일로 전송된 인증코드를 입력해 주세요
              </span>
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "78px" }}>
              <span className={styles.InputTitle}>인증코드</span>
              <input
                className={styles.InputContainer}
                type="text"
                value={currenAuthCode}
                onChange={checkAuthCode}
                style={{ color: "#2b2b2b" }}
              />
              {currenAuthCode ? (
                isCorrectAuthCode ? (
                  <span
                    className={styles.InputTitle}
                    style={{ color: "#00A413" }}
                  >
                    일치하는 인증코드에요
                  </span>
                ) : (
                  <span
                    className={styles.InputTitle}
                    style={{ color: "#FF5B5B" }}
                  >
                    일치하지 않는 인증코드에요
                  </span>
                )
              ) : (
                <></>
              )}
            </div>
            {isCorrectAuthCode ? (
              <div
                className={styles.ButtonContainer}
                onClick={() => {
                  setLoginStep(3);
                }}
              >
                <PrimaryButton>확인</PrimaryButton>
              </div>
            ) : (
              <div
                className={styles.ButtonContainer}
                onClick={() => {
                  // 인증코드 재전송 로직
                }}
              >
                <PrimaryButton>인증코드 재전송</PrimaryButton>
              </div>
            )}
          </>
        );
      case 3:
        return (
          <>
            <div className={styles.LoginProcessTextContainer}>
              <span className={styles.LoginProcessText}>비밀번호 재설정</span>
              <span
                className={styles.NormalText}
                style={{ fontWeight: "500px" }}
              >
                새로운 비밀번호를 입력해 주세요
              </span>
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "78px" }}>
              <span className={styles.InputTitle}>비밀번호</span>
              <img
                className={styles.VisiblePw}
                onClick={() => setVisiblePw(!visiblePw)}
                src={visible}
                alt="비밀번호 보이기"
              />
              {visiblePw ? (
                <input
                  className={styles.InputContainer}
                  type="text"
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  style={{ color: "#2b2b2b" }}
                />
              ) : (
                <input
                  className={styles.InputContainer}
                  type="password"
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  style={{ color: "#2b2b2b" }}
                />
              )}
              <span className={styles.InputTitle} style={{ marginTop: "12px" }}>
                비밀번호 재확인
              </span>
              <input
                className={styles.InputContainer}
                type="password"
                value={newPwCheck}
                onChange={(e) => setNewPwCheck(e.target.value)}
                style={{ color: "#2b2b2b" }}
              />
              {newPw && newPw !== newPwCheck ? (
                <span
                  className={styles.InputTitle}
                  style={{ color: "#FF5B5B" }}
                >
                  일치하지 않는 비밀번호에요
                </span>
              ) : (
                <></>
              )}
            </div>

            <div
              className={styles.ButtonContainer}
              onClick={() => {
                setLoginStep(4);
              }}
              style={{
                pointerEvents: newPw && newPw === newPwCheck ? "auto" : "none",
              }}
            >
              <PrimaryButton disabled={!(newPw && newPw === newPwCheck)}>
                변경하기
              </PrimaryButton>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className={styles.LoginProcessTextContainer}>
              <span className={styles.LoginProcessText}>비밀번호 변경!</span>
              <span
                className={styles.WelcomeUserText}
                style={{ fontSize: "22px", fontWeight: "700" }}
              >
                비밀번호 변경이 완료되었어요!
              </span>
            </div>
            <img
              src={dustSunglassCoin}
              alt="환영하는 먼지"
              style={{ width: "222px", height: "198px", marginTop: "101px" }}
            />
            <div
              className={styles.ButtonContainer}
              onClick={() => {
                setLoginStep(5);
              }}
            >
              <PrimaryButton>로그인하기</PrimaryButton>
            </div>
          </>
        );
      case 5:
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
              src={dustSunglassCoin}
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
