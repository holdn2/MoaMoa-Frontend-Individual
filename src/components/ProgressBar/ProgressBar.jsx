import styled from "styled-components";

const sizeStyles = {
  short: { width: 234, height: 12, backColor: "#DEDEDE" },
  medium: { width: 274, height: 8, backColor: "#DEDEDE" },
  large: { width: 293, height: 12, backColor: "#fff" },
  level: { width: 203, height: 12, backColor: "#fff" },
  homeLevel: {
    width: 312,
    height: 12,
    backColor: "#ECFAFF",
    // backColor: "linear-gradient(90deg, #ECFAFF 88.57%, #00BEFC 89.08%)",
  },
  challengeCard: { width: 260, height: 14, backColor: "#F7FEF6" },
};

const StyledTotalProgressBar = styled.div`
  width: ${(props) => `${props.$totalWidth}px`}; /* Transient Prop 사용 */
  height: ${(props) => `${props.$totalHeight}px`};
  border-radius: 24px;
  background: ${(props) => props.$backColor};
  border: ${(props) =>
    props.$size === "homeLevel" ? "1px solid  #2ECCFF" : "none"};
  position: relative;
`;

const StyledCurrentProgressBar = styled.div`
  width: ${(props) =>
    `${Math.min(
      props.$currentPercentWidth,
      props.$totalWidth
    )}px`}; /* Transient Prop 사용. 최대 totalWidth는 넘지 않게 */
  height: ${(props) => `${props.$totalHeight}px`};
  border-radius: 24px;
  background: ${(props) =>
    props.$currentProgress >= 80 &&
    (props.$size === "short" || props.$size === "medium")
      ? "#F11"
      : "#00BEFC"};
`;

const ProgressBar = ({ size, currentProgress }) => {
  const totalWidth = sizeStyles[size].width;
  const totalHeight = sizeStyles[size].height;
  const currentPercentWidth = (totalWidth * currentProgress) / 100; // 현재 진행 퍼센트를 픽셀로 변환
  const backColor = sizeStyles[size].backColor ?? "#fff";

  return (
    <StyledTotalProgressBar
      $totalWidth={totalWidth}
      $totalHeight={totalHeight}
      $size={size}
      $backColor={backColor}
    >
      {/* prop이 그대로 dom요소에 전달되는 것을 방지하기 위해 prop앞에 $를 붙여서 해결한다. */}
      <StyledCurrentProgressBar
        $currentProgress={currentProgress}
        $currentPercentWidth={currentPercentWidth}
        $totalWidth={totalWidth}
        $totalHeight={totalHeight}
        $size={size}
      />
    </StyledTotalProgressBar>
  );
};

export default ProgressBar;
