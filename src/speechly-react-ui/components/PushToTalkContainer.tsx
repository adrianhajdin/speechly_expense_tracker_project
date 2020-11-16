import React from "react";
import styled from "styled-components";

export const PushToTalkContainerDiv = styled.div`
  width: 100vw;
  height: 9.2rem;
  position: fixed;
  bottom: 0;
  pointer-events: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 50;
`;

const PushToTalkButtonContainer: React.FC = (props) => {
  return <PushToTalkContainerDiv>{props.children}</PushToTalkContainerDiv>;
};

export default PushToTalkButtonContainer;
