// 홈 페이지 제작 중
import React, { useEffect, useState } from "react";
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
import { BeatLoader } from "react-spinners";

const Home = () => {
  const pageName = "홈화면";
  const navigate = useNavigate();

  // 로그인이 되어있는 상태인지
  const [isLoading, setIsLoading] = useState(true);
  const [isLogined, setIsLogined] = useState(false);
  const [challengeHome, setChallengeHome] = useState({
    hasParticipatingChallenges: false,
    participatingChallenges: [],
    recruitingChallenges: [],
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("token");

    // ✅ 소셜 로그인 (URL에 토큰 있는 경우)
    if (tokenFromURL) {
      localStorage.setItem("jwt", tokenFromURL);
      console.log("소셜 로그인 토큰:", tokenFromURL);
      setIsLogined(true);
      return;
    }

    // ✅ 일반 로그인 (localStorage에 이미 토큰 저장된 경우)
    const tokenFromStorage = localStorage.getItem("jwt");
    if (tokenFromStorage) {
      console.log("일반 로그인 토큰:", tokenFromStorage);
      setIsLogined(true);
    } else {
      console.log("토큰 없음, 로그인 페이지로 이동");
      navigate("/login");
    }
  }, [navigate]);

  const [isDiagnosis, setIsDiagnosis] = useState(true);
  const [consChallengeSum, setConsChallengeSum] = useState({
    consumptionLeft: null,
    totalConsumption: null,
    consumptionPercentile: null,
  });
  useEffect(() => {
    Promise.all([
      getChallengeHome(setChallengeHome),
      getDiagnosisFinish(setIsDiagnosis),
      getConsChallengeSummary(setConsChallengeSum),
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  // zustand(전역상태관리)를 이용해서 로그인 시에만 해당 팝업이 뜨게 구현!(제대로 된 공부가 필요한 부분)
  const { hasLogin, setHasLogin } = useModalStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState(0);

  // 로그인 후 첫 홈화면에서만 실행
  useEffect(() => {
    if (!hasLogin) {
      setIsModalOpen(true);
      setHasLogin();
    }
  }, [hasLogin, setHasLogin]);

  const renderConsComponent = () => {
    if (isLoading) return null;
    if (isDiagnosis) {
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
    <>
      {isLoading ? (
        <div className={styles.LoadingContainer}>
          <BeatLoader color="#0096C7" />
        </div>
      ) : (
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
                    participatingChallenges={
                      challengeHome.participatingChallenges
                    }
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
      )}
    </>
  );
};

export default Home;
