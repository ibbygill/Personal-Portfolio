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

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  .brand-logo {
    width: 40px;
    height: auto;
    margin-right: 8px;
  }
  @media all and (max-width: 930px) {
    .brand-name {
      display: none;
    }
    .brand-logo {
      width: 35px;
      height: 35px;
      margin: 0 8px;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
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
  }
  @media only screen and (min-width: 1024px) {
    #nav-projects {
      &:hover {
        .nav-effect.projects {
          width: 100%;
        }
      }
    }
    #nav-tech {
      &:hover {
        .nav-effect.tech {
          width: 100%;
        }
      }
    }
    #nav-contact {
      &:hover {
        .nav-effect.contact {
          width: 100%;
        }
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
  export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: flex-start;
    grid-area: 1 / 4 / 2 / 6;
  }
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
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  
  @media screen and (min-width: 1024px) {
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 8px;
  }
`;