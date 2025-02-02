import React, { useEffect, useState } from "react";
import styles from "./JoinProcess.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import firstStage from "../src/assets/ThreeStages/firstStage.svg";
import secondStage from "../src/assets/ThreeStages/secondStage.svg";
import visible from "../src/assets/Content/visible.svg";
import thirdStage from "../src/assets/ThreeStages/thirdStage.svg";
import emailOK from "../src/assets/Content/emailOK.svg";
import emailCheck from "../src/assets/Content/emailCheck.svg";
import completeStage from "../src/assets/ThreeStages/completeStage.svg";
import dustSunglassCoin from "../src/assets/CharacterImgs/dustSunglassCoin.svg";
import dustCrown from "../src/assets/CharacterImgs/dustCrown.svg";

// input에 value를 명시해주면 다음으로 넘어가도 안남아있음.

// 인증코드 예시 데이터
const testAuthCode = "ASDF1234";

const JoinProcess = () => {
  const navigate = useNavigate();
  const [joinStep, setJoinStep] = useState(1);
  const [nickname, setNickname] = useState("");
  const [invalidNickname, setInvalidNickname] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [checkPwState, setPwState] = useState(false);
  const [visiblePw, setVisiblePw] = useState(false);
  const [email, setEmail] = useState("");
  // 마지막 이메일 인증에서 버튼상태 등을 위한 것.
  const [emailJoinState, setEmailJoinState] = useState(0);
  // 인증코드 관련
  const [currentAuthCode, setCurrentAuthCode] = useState("");
  const [authCodeState, setAuthCodeState] = useState(false);

  // 이메일 인증 시 상태에 따라 다른 버튼 케이스
  const renderEmailCheckButton = () => {
    switch (emailJoinState) {
      // 초기 상태
      case 0:
        return (
          <div
            className={styles.ButtonContainer}
            style={{
              pointerEvents: "none",
            }}
          >
            <PrimaryButton disabled={true}>인증코드 받기</PrimaryButton>
          </div>
        );
      case 1:
        return (
          <div
            className={styles.ButtonContainer}
            onClick={() => setEmailJoinState(2)}
            // 추가적으로 인증코드 받는 로직 필요함.
          >
            <PrimaryButton>인증코드 받기</PrimaryButton>
          </div>
        );
      case 2:
        return (
          <>
            {authCodeState ? (
              <div
                className={styles.ButtonContainer}
                onClick={() => {
                  setJoinStep(4);
                  console.log(
                    "닉네임 : ",
                    nickname,
                    " 비밀번호 : ",
                    password,
                    " 이메일 : ",
                    email
                  );
                }}
              >
                <PrimaryButton>가입하기</PrimaryButton>
              </div>
            ) : (
              <div
                className={styles.ButtonContainer}
                onClick={() => {}} // 추가적으로 인증코드 받는 로직 필요함.
              >
                <PrimaryButton>인증코드 재전송</PrimaryButton>
              </div>
            )}
          </>
        );
    }
  };

  // 이미 존재하는 닉네임인지 some을 이용해서 확인.
  const checkNickname = (e) => {
    // setState가 비동기로 동작하기 때문에 즉시 업데이트하지 않음
    // 따라서 setNickname(e.target.value)가 아니라 아래처럼 직접 사용하여야 함.
    const currentNickname = e.target.value;
    setNickname(currentNickname);
    const nicknameExists = data.some((value) => value.name === currentNickname);
    if (nicknameExists) {
      setInvalidNickname(true);
    } else {
      setInvalidNickname(false);
    }
  };

  // 비밀번호 재확인
  const checkPassword = (e) => {
    const checkingPw = e.target.value;
    setPasswordCheck(checkingPw);

    if (password === checkingPw) {
      setPwState(true);
    } else {
      setPwState(false);
    }
  };

  // 4단계에서 2초 후 5단계로 자동 전환
  useEffect(() => {
    if (joinStep === 4) {
      const timer = setTimeout(() => {
        setJoinStep(5);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [joinStep]);

  const renderJoinProcess = () => {
    switch (joinStep) {
      case 1:
        return (
          <>
            <div className={styles.StageInfoWrapper}>
              <div className={styles.InfoTextContainer}>
                <img
                  src={firstStage}
                  alt="첫번째 단계"
                  style={{ width: "130px", height: "20px" }}
                />
                <span className={styles.BoldInfo} style={{ marginTop: "23px" }}>
                  사용하실 닉네임을
                  <br />
                  입력해 주세요
                </span>
                <span className={styles.NormalInfo}>
                  언제든지 변경 가능해요!
                </span>
              </div>
            </div>
            <div className={styles.InputWrapper}>
              <span className={styles.InputTitle}>닉네임</span>
              <input
                className={styles.InputContainer}
                type="text"
                onChange={checkNickname}
              />
              {invalidNickname && (
                <span className={styles.CheckInputState}>
                  이미 사용중인 닉네임이에요
                </span>
              )}
            </div>

            <div
              className={styles.ButtonContainer}
              style={{
                pointerEvents: !nickname || invalidNickname ? "none" : "auto",
              }}
              onClick={() => {
                setJoinStep(2);
              }}
            >
              <PrimaryButton disabled={!nickname || invalidNickname}>
                다음
              </PrimaryButton>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={styles.StageInfoWrapper}>
              <div className={styles.InfoTextContainer}>
                <img
                  src={secondStage}
                  alt="두번째 단계"
                  style={{ width: "130px", height: "20px" }}
                />
                <span className={styles.BoldInfo} style={{ marginTop: "23px" }}>
                  비밀번호를
                  <br />
                  입력해 주세요
                </span>
                <span className={styles.NormalInfo}>
                  로그인할 때 필요한 정보에요
                </span>
              </div>
            </div>
            <div className={styles.InputWrapper}>
              <span className={styles.InputTitle}>비밀번호</span>
              <img
                className={styles.VisiblePw}
                onClick={() => setVisiblePw(!visiblePw)}
                src={visible}
                alt="비밀번호 보이기/숨기기"
              />
              {visiblePw ? (
                <input
                  value={password}
                  className={styles.InputContainer}
                  type="text"
                  onChange={(e) => {
                    const newPw = e.target.value;
                    setPassword(newPw);
                    // 비밀번호 확인 값과 즉시 비교
                    if (passwordCheck === newPw) {
                      setPwState(true);
                    } else {
                      setPwState(false);
                    }
                  }}
                  placeholder="*숫자, 영어 포함 10자 이내 / 대소문자 구분"
                />
              ) : (
                <input
                  value={password}
                  className={styles.InputContainer}
                  type="password"
                  onChange={(e) => {
                    const newPw = e.target.value;
                    setPassword(newPw);
                    // 비밀번호 확인 값과 즉시 비교
                    if (passwordCheck === newPw) {
                      setPwState(true);
                    } else {
                      setPwState(false);
                    }
                  }}
                  placeholder="*숫자, 영어 포함 10자 이내 / 대소문자 구분"
                />
              )}

              <span className={styles.InputTitle} style={{ marginTop: "12px" }}>
                비밀번호 재확인
              </span>
              <input
                value={passwordCheck}
                className={styles.InputContainer}
                type="password"
                onChange={checkPassword}
                placeholder="비밀번호 재확인"
              />
              {!checkPwState && passwordCheck && (
                <span className={styles.CheckInputState}>
                  일치하지 않는 비밀번호에요
                </span>
              )}
            </div>

            <div
              className={styles.ButtonContainer}
              style={{
                pointerEvents:
                  password !== passwordCheck || !passwordCheck
                    ? "none"
                    : "auto",
              }}
              onClick={() => {
                // 여기서 데이터를 전송해주면 될듯
                setJoinStep(3);
                console.log("닉네임: ", nickname, " 비밀번호: ", password);
              }}
            >
              <PrimaryButton
                disabled={password !== passwordCheck || !passwordCheck}
              >
                다음
              </PrimaryButton>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className={styles.StageInfoWrapper}>
              <div className={styles.InfoTextContainer}>
                <img
                  src={thirdStage}
                  alt="세번째 단계"
                  style={{
                    width: "130px",
                    height: "20px",
                    marginBottom: "23px",
                  }}
                />
                <span className={styles.BoldInfo}>
                  이메일을
                  <br />
                  입력해 주세요
                </span>
                <span className={styles.NormalInfo}>
                  이메일 인증으로 더 안전하게 이용할 수 있어요!
                </span>
              </div>
            </div>
            <div className={styles.InputWrapper}>
              <span className={styles.InputTitle}>이메일</span>
              {authCodeState ? (
                <img
                  className={styles.VisiblePw}
                  src={emailOK}
                  alt="이메일 인증 여부"
                />
              ) : (
                <img
                  className={styles.VisiblePw}
                  src={emailCheck}
                  alt="이메일 인증 여부"
                />
              )}

              <input
                value={email}
                className={styles.InputContainer}
                type="text"
                onChange={(e) => {
                  const newEmail = e.target.value;
                  setEmail(newEmail);
                  if (newEmail == "") {
                    setEmailJoinState(0);
                  } else {
                    setEmailJoinState(1);
                  }
                }}
                placeholder="abcd1234@example.com"
              />
              <span className={styles.InputTitle} style={{ marginTop: "12px" }}>
                인증코드
              </span>
              <input
                value={currentAuthCode}
                className={styles.InputContainer}
                type="text"
                onChange={(e) => {
                  const newAuthCode = e.target.value;
                  setCurrentAuthCode(newAuthCode);
                  if (newAuthCode === testAuthCode) {
                    setAuthCodeState(true);
                  } else {
                    setAuthCodeState(false);
                  }
                }}
              />
              {/* 빈 문자열일 때 아무것도 안뜨게 하기 */}
              {currentAuthCode ? (
                currentAuthCode === testAuthCode ? (
                  <span
                    className={styles.CheckInputState}
                    style={{ color: "#00A413" }}
                  >
                    일치하는 인증번호에요
                  </span>
                ) : (
                  <span className={styles.CheckInputState}>
                    일치하지 않는 인증번호에요
                  </span>
                )
              ) : null}
            </div>
            {renderEmailCheckButton()}
          </>
        );
      case 4:
        return (
          <>
            <div className={styles.StageInfoWrapper}>
              <div className={styles.InfoTextContainer}>
                <img
                  src={completeStage}
                  alt="4번째 단계"
                  style={{
                    width: "130px",
                    height: "20px",
                    marginBottom: "23px",
                  }}
                />
                <span className={styles.BoldInfo}>가입 완료!</span>
                <span className={styles.WelcomeNormal}>
                  <span style={{ color: "#454545", fontSize: "22px" }}>
                    {nickname}
                  </span>{" "}
                  님 환영해요!
                </span>
              </div>
              <img
                src={dustSunglassCoin}
                alt="환영하는 먼지"
                style={{ width: "250px", height: "223px", marginTop: "101px" }}
              />
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className={styles.StageInfoWrapper}>
              <div
                className={styles.InfoTextContainer}
                style={{ marginTop: "30px" }}
              >
                <span className={styles.BoldInfo}>
                  {nickname}님,
                  <br />
                  환영해요!
                </span>
                <span className={styles.NormalInfo}>
                  효과적인 절약을 위해선
                  <br />
                  시작 전, 소비 진단이 필요해요
                </span>
              </div>
              <img
                src={dustCrown}
                alt="환영하는 먼지"
                style={{ width: "210px", height: "227px", marginTop: "40px" }}
              />
              <div
                onClick={() => navigate("/diagnosis")}
                style={{ marginTop: "50px" }}
              >
                <PrimaryButton>과소비 진단하러 가기</PrimaryButton>
              </div>
              <div onClick={() => navigate("/")} style={{ marginTop: "12px" }}>
                <SecondaryButton>나중에 진단하기</SecondaryButton>
              </div>
            </div>
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
      {renderJoinProcess()}
    </div>
  );
};

export default JoinProcess;

const data = [
  {
    id: 1,
    name: "모아모아",
  },
  {
    id: 2,
    name: "예시",
  },
  {
    id: 3,
    name: "데이터",
  },
  {
    id: 4,
    name: "ㅎㅎ",
  },
];
