import React, { Children, useState } from "react";
import styles from "./Join.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [joinMethodState, setJoinMethodState] = useState(0);
  const navigate = useNavigate();

  const renderJoinContent = () => {
    switch (joinMethodState) {
      case 0:
        return (
          <div className={styles.ButtonWrapper}>
            <div onClick={() => setJoinMethodState(1)}>
              <PrimaryButton>간편하기 시작하기</PrimaryButton>
            </div>
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
              style={{ background: "#FFE134" }}
              onClick={() => setJoinMethodState(2)}
            >
              카카오로 시작하기
            </button>
            <button
              className={styles.JoinMethodContainer}
              style={{ background: "#00C63B" }}
              onClick={() => setJoinMethodState(3)}
            >
              네이버로 시작하기
            </button>
            <button
              className={styles.JoinMethodContainer}
              style={{ border: "1px solid  #787878 " }}
              onClick={() => setJoinMethodState(4)}
            >
              Google로 시작하기
            </button>
            <button
              className={styles.JoinMethodContainer}
              style={{ background: "#000", color: "#fff" }}
              onClick={() => setJoinMethodState(5)}
            >
              Apple로 시작하기
            </button>
          </div>
        );
      case 1:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "126px",
              alignItems: "center",
            }}
          >
            <img
              src="../src/assets/CharacterImgs/dustSunglassCoin.svg"
              alt="시작 이미지"
              style={{ width: "222px", height: "198px", marginTop: "87px" }}
            />
            <div onClick={() => navigate("/join/joinprocess")}>
              <PrimaryButton>간편하기 시작하기</PrimaryButton>
            </div>
          </div>
        );

      case 2:
      case 3:
      case 4:
      case 5:
        return (
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>현재 준비중입니다.</span>
            <button
              onClick={() => setJoinMethodState(0)}
              style={{ borderBottom: "1px solid" }}
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
            30초면 회원가입이 가능해요
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
    </div>
  );
};

export default Join;
