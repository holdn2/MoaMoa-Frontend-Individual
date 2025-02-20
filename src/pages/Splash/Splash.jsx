import React from "react";
import favicon from "../../../public/favicon.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Desc = styled.p`
  color: var(--Primary-800, #004961);
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: var(--Primary-800, #004961);
  font-family: 머니그라피TTF;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Splash = () => {
  return (
    <Wrapper>
      <img src={favicon} alt="로고 이미지" />
      <Desc>절약을 시작하는 가장 재미있는 방법</Desc>
    </Wrapper>
  );
};

export default Splash;
