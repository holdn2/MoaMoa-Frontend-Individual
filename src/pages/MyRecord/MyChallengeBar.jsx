import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../components/Button/PrimaryButton";
import ProgressSemiCircle from "../../components/ProgressSemiCircle/ProgressSemiCircle";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  padding: 10px;
  color: var(--Grey-800, #2b2b2b);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
`;

const ContentWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--Grey-70, #f1f1f1);
`;

const Desc = styled.p`
  align-self: stretch;
  color: var(--Grey-800, #2b2b2b);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 800;
`;

const SubDesc = styled.p`
  color: var(--Grey-600, #5e5e5e);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  margin-top: 5px;
`;

const CircleWrapper = styled.div`
  width: 250px;
  height: 125px;
`;

const MyChallengeBar = ({
  children,
  isConsumption,
  successRate,
  top,
  totalTries,
  totalSucceed,
}) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>{children}</Title>
      <ContentWrapper>
        <CircleWrapper>
          <ProgressSemiCircle percentage={successRate} />
        </CircleWrapper>
        <SubDesc>상위 {top}%</SubDesc>
        <Desc>
          전체 {totalTries}회 중 {totalSucceed}회 성공 !
        </Desc>
        {isConsumption ? (
          <div style={{ marginTop: "36px" }}>
            <PrimaryButton
              size="lg"
              onClick={() => navigate("/myrecord/showchallenge")}
            >
              나의 소비 기록 확인하기
            </PrimaryButton>
          </div>
        ) : (
          <></>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default MyChallengeBar;
