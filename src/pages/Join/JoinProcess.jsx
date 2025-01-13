import React, { useEffect, useState } from "react";
import styles from "./JoinProcess.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import { useNavigate } from "react-router-dom";

const JoinProcess = () => {
  const navigate = useNavigate();
  const [joinStep, setJoinStep] = useState(1);
  const [nickname, setNickname] = useState("");
  const [invalidNickname, setInvalidNickname] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [checkPwState, setPwState] = useState(false);
  const [visiblePw, setVisiblePw] = useState(false);

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

  // 3단계에서 2초 후 4단계로 자동 전환
  useEffect(() => {
    if (joinStep === 3) {
      const timer = setTimeout(() => {
        setJoinStep(4);
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
                  src="../src/assets/ThreeStages/firstStage.svg"
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
                <span className={styles.DisabledNickname}>
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
                  src="../src/assets/ThreeStages/secondStage.svg"
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
                src="../src/assets/Content/visible.svg"
                alt="비밀번호 보이기/숨기기"
              />
              {visiblePw ? (
                <input
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
                className={styles.InputContainer}
                type="password"
                onChange={checkPassword}
                placeholder="비밀번호 재확인"
              />
              {!checkPwState && passwordCheck && (
                <span className={styles.DisabledNickname}>
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
                  src="../src/assets/ThreeStages/thirdStage.svg"
                  alt="세번째 단계"
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
                src="../src/assets/CharacterImgs/dustSunglassCoin.svg"
                alt="환영하는 먼지"
                style={{ width: "250px", height: "223px", marginTop: "101px" }}
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className={styles.StageInfoWrapper}>
              <div className={styles.InfoTextContainer}>
                <img
                  src="../src/assets/ThreeStages/completeStage.svg"
                  alt="완료 단계"
                  style={{
                    width: "130px",
                    height: "20px",
                    marginBottom: "23px",
                  }}
                />
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
                src="../src/assets/CharacterImgs/dustCrown.svg"
                alt="환영하는 먼지"
                style={{ width: "210px", height: "227px", marginTop: "30px" }}
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
