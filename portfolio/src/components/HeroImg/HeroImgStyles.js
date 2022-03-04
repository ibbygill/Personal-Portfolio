import styled, { keyframes } from "styled-components";

const shadowTransition = keyframes`
  from {
      box-shadow: 0 0 10px 4px white inset;
    }
   to {
    box-shadow: 0 0 20px 4px white inset;
    }
`;

export const AvatarContainer = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  transform: scale(0.8);
  animation: ${shadowTransition} 2s alternate infinite;
  img {
    position: absolute;
    top: 0;
    right: 0;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }
`;