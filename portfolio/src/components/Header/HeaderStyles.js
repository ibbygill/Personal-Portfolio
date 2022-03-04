import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';


export const Span = styled.span`
  font-size: 2rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  .brand-logo {
    width: 30px;
    height: auto;
    margin-right: 8px;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  .nav-effect {
    height: 2px;
    width: 0;
    background-image: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
    border-radius: 5px;
    transition: width 0.2s ease-in;
  }`;

  export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
`;