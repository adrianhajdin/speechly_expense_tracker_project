import React from "react";
import styled from "styled-components";

const BigTransscriptContainerDiv = styled.div`
  position: absolute;
  top: 3rem;
  left: 2rem;
  right: 2rem;
  z-index: 10;

  color: #fff;
  font-size: 1.4rem;
`;


const BigTransscriptContainer: React.FC = (props) => {
  return <BigTransscriptContainerDiv>{props.children}</BigTransscriptContainerDiv>;
};

export default BigTransscriptContainer;
