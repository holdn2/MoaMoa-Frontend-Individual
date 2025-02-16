import React from "react";
import styled from "styled-components";

const CategoryButton = styled.div`
  background: ${(props) => (props.checked ? "#00BEFC" : "#F1F1F1")};
  color: ${(props) => (props.checked ? "#fff" : "#454545")};
  display: flex;
  box-sizing: border-box;
  width: 74px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
`;

const Category = ({ children, checked, onClick }) => {
  return (
    <CategoryButton checked={checked} onClick={onClick}>
      {children}
    </CategoryButton>
  );
};

export default Category;
