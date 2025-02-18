import React, { Children, useEffect, useState } from "react";
import styles from "./Join.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import emailOK from "../../assets/Content/emailOK.svg";
import emailCheck from "../../assets/Content/emailCheck.svg";
import JoinModal from "./JoinModal";
import { checkEmailVerify, verifyEmail } from "../../apis/join";
import useModalStore from "../../store/useModalStore";

const Join = () => {
  const [joinMethodState, setJoinMethodState] = useState(0);
  const navigate = useNavigate();
  // 이메일을 입력한 상태
  const [email, setEmail] = useState("");
  const { setVerifyEMail } = useModalStore();

  // 인증코드 전송했을 때 버튼 상태
  const [buttonClicked, setButtonClicked] = useState(false);

  // 인증이 된지 안되지 상태
  const [isVerified, setIsVerified] = useState(false);

  const handleCheckemail = async () => {
    const verified = await checkEmailVerify();
    if (verified) {
      navigate("/join/joinprocess", { state: { email: email } });
    } else {
      setModalState(2);
    }
  };
  useEffect(() => {
    if (isVerified) {
      navigate("/join/joinprocess");
    }
  }, [isVerified]);

  // 네이버 소셜 로그인
  const handleNaverLogin = () => {
    window.location.href = "http://moamoa.store/oauth2/authorization/naver";
  };
  // 구글 소셜 로그인
  const handleGoogleLogin = () => {
    window.location.href = "https://moamoa.store/oauth2/authorization/google";
  };

  // 인증코드 전송 모달 상태. modalState가 2일 때는 인증이 완료된 상태임.
  const [modalState, setModalState] = useState(0);

  const renderJoinContent = () => {
    switch (joinMethodState) {
      case 0:
        return (
          <>
            <div className={styles.InputWrapper}>
              <span className={styles.InputTitle}>이메일</span>
              {modalState === 2 ? (
                <img
                  className={styles.AuthImg}
                  src={emailOK}
                  alt="이메일 인증 여부"
                />
              ) : (
                <img
                  className={styles.AuthImg}
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
                }}
                placeholder="abcd1234@example.com"
              />
            </div>
            <div className={styles.ButtonWrapper}>
              {buttonClicked ? (
                <div onClick={handleCheckemail}>
                  <PrimaryButton>인증확인 및 회원가입</PrimaryButton>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setModalState(1),
                      verifyEmail(email),
                      console.log(email),
                      setVerifyEMail(email);
                    setButtonClicked(true);
                  }}
                  style={{ pointerEvents: email ? "auto" : "none" }}
                >
                  <PrimaryButton disabled={!email}>
                    인증링크 전송하기
                  </PrimaryButton>
                </div>
              )}

              <div className={styles.BorderLineWrapper}>
                <div
                  style={{
                    width: "137px",
                    height: "0.5px",
                    background: "#787878",
                  }}
                />
                <span className={styles.OrText}>또는</span>
                <div
                  style={{
                    width: "137px",
                    height: "0.5px",
                    background: "#787878",
                  }}
                />
              </div>
              <button
                className={styles.JoinMethodContainer}
                style={{ background: "#00C63B", color: "#fff" }}
                onClick={handleNaverLogin}
              >
                네이버로 시작하기
              </button>
              <button
                className={styles.JoinMethodContainer}
                style={{ border: "1px solid  #787878 " }}
                onClick={handleGoogleLogin}
              >
                Google로 시작하기
              </button>
            </div>
          </>
        );
      case 1:
      case 2:
        return (
          <div className={styles.ToLoginContainer}>
            <span>현재 준비중입니다.</span>
            <button
              onClick={() => setJoinMethodState(0)}
              style={{
                color: "#787878",
                fontSize: "14px",
                fontWeight: "500",
                borderBottom: "1px solid #787878",
              }}
            >
              다시 돌아가기
            </button>
          </div>
        );
    }
  };
  return (
    <div className={styles.JoinPageContainer}>
      <div className={styles.JoinContentContainer}>
        <div className={styles.JoinTextContainer}>
          <span style={{ fontSize: "28px", fontWeight: "700" }}>환영해요!</span>
          <span>재미있는 절약을 시작해 보세요 :) </span>
          <span
            style={{ fontSize: "16px", color: "#5e5e5e", marginTop: "24px" }}
          >
            이메일로 회원가입이 가능해요
          </span>
        </div>
      </div>
      {renderJoinContent()}
      <div className={styles.ToLoginContainer}>
        <span>이미 계정이 있으신가요?</span>
        <button
          style={{
            color: "#787878",
            fontSize: "14px",
            fontWeight: "500",
            borderBottom: "1px solid #787878",
          }}
          onClick={() => navigate("/login")}
        >
          로그인 하기
        </button>
      </div>
      <JoinModal modalState={modalState} setModalState={setModalState} />
    </div>
  );
};

export default Join;
