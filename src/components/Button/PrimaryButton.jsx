// 첫 번째 버튼 컴포넌트
// 버튼 컴포넌트는 styled-components로 구현
import styled from "styled-components";

const sizeStyles = {
  sm: {
    width: "136px",
    height: "44px",
  },
  lg: {
    width: "256px",
    height: "44px",
  },
  xl: {
    width: "335px",
    height: "48px",
  },
  // sp는 나의 소비 시작하기, 나의 소비 입력하기 등에 활용됨. 디자인 시스템에 없지만 추가
  sp: {
    width: "321px",
    height: "40px",
  },
};

const StyledButton = styled.button`
  color: ${(props) => (props.disabled ? "#94E5FF" : "#FFF")};
  background-color: ${(props) => (props.disabled ? "#FAFEFF" : "#00BEFC")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  width: ${(props) => sizeStyles[props.size]?.width};
  height: ${(props) => sizeStyles[props.size]?.height};
  border-width: 0;
  border-radius: 12px;
  display: "flex";
  justify-content: "center";
  align-items: "center";
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:active {
    background-color: #007094;
  }
`;

const PrimaryButton = ({
  children,
  type = "button",
  size = "xl",
  disabled,
}) => {
  return (
    <StyledButton type={type} size={size} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;
