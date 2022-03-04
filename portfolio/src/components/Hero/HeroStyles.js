import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
`;

export const HeroButton = styled.button`
  width: 200px;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin: 0 20px 20px 5px;
  border: none;
  background-size: 300% 100%;
  height: 55px;
  text-align: center;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    #667eea,
    #764ba2,
    #6b8dd6,
    #8e37d7
  );
  box-shadow: 0 0 10px 0 rgba(116, 79, 168, 0.75);

  border-radius: 50px;
  moz-transition: all 0.8s ease-in-out;
  -o-transition: all 0.8s ease-in-out;
  -webkit-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
    -webkit-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
  }
`;

export const HeroButton2 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 0 20px 20px 0;
  height: 55px;
  text-align: center;
  background: transparent;
  border: 2px solid white;

  box-shadow: 0px 0px 5px 0 rgba(250, 240, 250, 1);
  -moz-box-shadow: 0px 0px 5px 0 rgba(250, 240, 250, 1);
  border-radius: 50px;
  -webkit-box-shadow: 0px 0px 5px 0 rgba(250, 240, 250, 1);

  -o-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
  moz-transition: all 0.8s ease-in-out;
  -webkit-transition: all 0.8s ease-in-out;
  
  &:hover {
      border: none;
      background: white;
      color: #0f1624;
    moz-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
    -webkit-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
  }
`;