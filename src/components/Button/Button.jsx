const sizeStyles = {
  sm: {
    padding: "8px 14px 8px 15px",
    fontSize: "13px",
  },
  lg: {
    padding: "10px 16px",
    fontSize: "15px",
  },
  xl: {
    padding: "18px 112px 19px 113px",
    fontSize: "16px",
  },
};

const StyledButton = ({ type, size, color }) => {
  return <></>;
};

const Button = ({ children, type = "button", size = "sm", color = "gr" }) => {
  return (
    <StyledButton type={type} size={size} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
