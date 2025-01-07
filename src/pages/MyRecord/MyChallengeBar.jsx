import React from "react";
import styled from "styled-components";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";

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
  flex-direction: column;
  align-items: center;
  gap: 5px;
  height: 307px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--Grey-70, #f1f1f1);
`;

const Desc = styled.p`
  padding: 10px;
  align-self: stretch;
  color: var(--Grey-800, #2b2b2b);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 800;
`;

const SubDesc = styled.p`
  padding: 10px;
  color: var(--Grey-600, #5e5e5e);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
`;

const CircleWrapper = styled.div`
  width: 210px;
  height: 199px;
`;

const MyChallengeBar = ({ children }) => {
  const progressPercent = 90;
  return (
    <Wrapper>
      <Title>{children}</Title>
      <ContentWrapper>
        <CircleWrapper>
          <ProgressCircle
            progressPercent={progressPercent}
            width="210px"
            height="199px"
            fontSize="32px"
            fontWeight="800"
          />
        </CircleWrapper>
        <SubDesc>상위 nn%</SubDesc>
        <Desc>전체 20회 중 18회 성공 !</Desc>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MyChallengeBar;
