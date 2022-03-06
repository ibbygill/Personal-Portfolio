import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const BackToTopIconContainer = styled.div`
  position: fixed;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  bottom: 50px;
  right: 50px;
  z-index: 100;
  @media ${(props) => props.theme.breakpoints.lg} {
    right: 10px;
    bottom: 10px;
  }
`;

export const BackToTopIcon = styled(motion.div)`
  height: 1.5em;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3px;
  h5 {
    font-size: 10px;
  }
  border: 1px solid white;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  /* &:hover {
    transform: scale(1.1);
  } */
`;
