import styled from "styled-components";

const sizeStyles = {
  short: { width: 234, height: 12 },
  medium: { width: 274, height: 8 },
  long: { width: 0, height: 0 },
};

const StyledTotalProgressBar = styled.div`
  width: ${(props) => `${props.$totalWidth}px`}; /* Transient Prop 사용 */
  height: ${(props) => `${props.$totalHeight}px`};
  border-radius: 24px;
  background: #dedede;
  position: relative;
`;

const StyledCurrentProgressBar = styled.div`
  width: ${(props) =>
    `${props.$currentPercentWidth}px`}; /* Transient Prop 사용 */
  height: ${(props) => `${props.$totalHeight}px`};
  border-radius: 24px;
  background: ${(props) => (props.$currentProgress < 80 ? "#00BEFC" : "#F11")};
`;

const ProgressBar = ({ size, currentProgress }) => {
  const totalWidth = sizeStyles[size].width ?? 274;
  const totalHeight = sizeStyles[size].height ?? 274;
  const currentPercentWidth = (totalWidth * currentProgress) / 100; // 현재 진행 퍼센트를 픽셀로 변환
  return (
    <StyledTotalProgressBar $totalWidth={totalWidth} $totalHeight={totalHeight}>
      {/* prop이 그대로 dom요소에 전달되는 것을 방지하기 위해 prop앞에 $를 붙여서 해결한다. */}
      <StyledCurrentProgressBar
        $currentProgress={currentProgress}
        $currentPercentWidth={currentPercentWidth}
        $totalHeight={totalHeight}
      />
    </StyledTotalProgressBar>
  );
};

export default ProgressBar;
