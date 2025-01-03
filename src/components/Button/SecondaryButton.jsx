// 두 번째 버튼 컴포넌트
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
};

const StyledButton = styled.button`
  color: ${(props) => (props.disabled ? "#C7F1FF" : "#00BEFC")};
  background-color: ${(props) => (props.disabled ? "#FAFEFF" : "#FFF")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  width: ${(props) => sizeStyles[props.size]?.width};
  height: ${(props) => sizeStyles[props.size]?.height};
  border: ${(props) =>
    props.disabled ? "2px solid #C7F1FF" : "2px solid #00BEFC"};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:active {
    color: #007094;
    border: 2px solid #007094;
  }
`;

const SecondaryButton = ({
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

export default SecondaryButton;
