// 홈 페이지 제작 중
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import StartConsComponent from "../../components/StartConsComponent/StartConsComponent";
import InputConsComponent from "../../components/InputConsComponent/InputConsComponent";
import MiniCallendar from "../../components/MiniCallendar/MiniCallendar";
import RecruitChallenge from "../../components/RecruitChallenge/RecruitChallenge";
import ProgressChallenge from "../../components/ProgressChallenge/ProgressChallenge";
import AttendanceModal from "./AttendanceModal";
import useModalStore from "../../store/useModalStore";
import ToDiagnosisComponent from "../../components/ToDiagnosisComponent/ToDiagnosisComponent";
import ToNextLevel from "../../components/ToNextLevel/ToNextLevel";
import { useNavigate } from "react-router-dom";
import {
  getChallengeHome,
  getConsChallengeSummary,
  getDiagnosisFinish,
} from "../../apis/home";

const Home = () => {
  const pageName = "홈화면";
  const navigate = useNavigate();

  // 로그인이 되어있는 상태인지
  const [isLogined, setIsLogined] = useState(false);
  const [challengeHome, setChallengeHome] = useState({
    hasParticipatingChallenges: false,
    participatingChallenges: [],
    recruitingChallenges: [],
  });

  useEffect(() => {
    // 기본 로그인: localStorage에서 토큰을 가져옴
    let token = localStorage.getItem("jwt");

    // 만약 localStorage에 토큰이 없고 쿠키에 있다면(소셜 로그인)
    if (!token) {
      token = Cookies.get("jwt");
      if (token) {
        // 쿠키에서 가져온 토큰을 localStorage에 저장
        localStorage.setItem("jwt", token);
      }
    }

    if (token) {
      console.log("로그인된 토큰:", token);
      setIsLogined(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const [isDiagnosis, setIsDiagnosis] = useState(false);
  const [consChallengeSum, setConsChallengeSum] = useState({
    consumptionLeft: null,
    totalConsumption: null,
    consumptionPercentile: null,
  });
  useEffect(() => {
    getChallengeHome(setChallengeHome);
    getDiagnosisFinish(setIsDiagnosis);
    getConsChallengeSummary(setConsChallengeSum);
  }, []);

  // zustand(전역상태관리)를 이용해서 로그인 시에만 해당 팝업이 뜨게 구현!(제대로 된 공부가 필요한 부분)
  const { hasLogin, setHasLogin } = useModalStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState(1);

  // 로그인 후 첫 홈화면에서만 실행
  useEffect(() => {
    if (!hasLogin) {
      setIsModalOpen(true);
      setHasLogin();
    }
  }, [hasLogin, setHasLogin]);

  const renderConsComponent = () => {
    if (!isDiagnosis) {
      return <ToDiagnosisComponent />;
    } else {
      if (consChallengeSum.totalConsumption === null) {
        return <StartConsComponent />;
      } else {
        return <InputConsComponent />;
      }
    }
  };

  return (
    <div className={styles.HomeContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        {/* 나의 소비 입력하기 or 시작하기 or 과소비 진단하러 가기
        세가지 중 상태에 따라 어떤 것이 나올지 결정됨. */}
        {renderConsComponent()}
        {/* 캘린더 */}
        <MiniCallendar />
        {/* 다음 레벨까지 */}
        <ToNextLevel />
        {/* 모집 중인 챌린지 또는 챌린지 진행상황 */}
        {challengeHome.hasParticipatingChallenges
          ? challengeHome.participatingChallenges !== null && (
              <ProgressChallenge
                participatingChallenges={challengeHome.participatingChallenges}
              />
            )
          : challengeHome.recruitingChallenges !== null && (
              <RecruitChallenge
                recruitingChallenges={challengeHome.recruitingChallenges}
              />
            )}
      </div>
      <BottomBar pageName={pageName} />
      <AttendanceModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalState={modalState}
        setModalState={setModalState}
      />
    </div>
  );
};

export default Home;
