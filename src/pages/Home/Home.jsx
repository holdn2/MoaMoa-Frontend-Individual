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

const Home = () => {
  const pageName = "홈화면";
  // 여기다가 소비 시작했는지, 이미 시작했으면 정보 저장.
  // 이 전에 시작했는지 여부에 따라 보이는 화면이 달라짐
  const [consumption, setConsumption] = useState(true);
  // 참여중인 챌린지가 있을 경우 혹은 없을 경우
  const participatedChallenge = null;
  // 로그인 시 모달창 팝업.
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

  return (
    <div className={styles.HomeContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        {/* 나의 소비 입력하기 or 시작하기 */}
        {consumption ? <InputConsComponent /> : <StartConsComponent />}
        {/* 캘린더 */}
        <MiniCallendar />
        {/* 모집 중인 챌린지 또는 챌린지 진행상황 */}
        {participatedChallenge === null ? (
          <RecruitChallenge />
        ) : (
          <ProgressChallenge />
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
