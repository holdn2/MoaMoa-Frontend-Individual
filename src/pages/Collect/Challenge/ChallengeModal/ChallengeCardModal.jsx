import React from "react";
import closeModal from "../../../../assets/Navigation/closeModal.svg";
import { useLocation, useNavigate } from "react-router-dom";
import ChallengeCard from "../../../../components/ChallengeCard/ChallengeCard";

const ChallengeCardModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const challengeData = location.state?.challenge;
  return (
    <>
      <ChallengeCard allData={challengeData} />
      <button type="button" onClick={() => navigate(-1)}>
        <img src={closeModal} alt="챌린지 참여 모달창을 닫는 버튼" />
      </button>
    </>
  );
};

export default ChallengeCardModal;
