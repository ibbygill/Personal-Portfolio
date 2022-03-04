import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  margin: 0 auto;
  min-height: ${(props) => props.contact && '50vh'};
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
`;

export const SectionTitle = styled.h1`
  font-weight: 800;
  font-size: ${(props) => (props.main ? '65px' : '56px')};
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  width: max-content;
  max-width: 100%;
  background: radial-gradient(#ffffff, rgba(255, 255, 255, 0.4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: ${(props) => (props.noMarginTop ? '0' : '16px')};
  margin-bottom: ${(props) => (props.noMarginBottom ? '0' : '16px')};
  padding: ${(props) => (props.main ? '20px 0 16px 0' : '0')};
  background-size: 200% auto;
  /* animation: ${backgroundTransition} 3s linear infinite; */

`;

export const SectionSubTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? '65px' : '56px')};
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  width: max-content;
  max-width: 100%;
  background: radial-gradient(#ffffff, rgba(255, 255, 255, 0.4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? '58px 0 16px' : '0')};
  background-size: 200% auto;
  /* animation: ${backgroundTransition} 3s linear infinite; */

`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
      : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

  margin: ${(props) => (props.divider ? '4rem 0' : '')};
`;
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
`;
export const SecondaryBtn = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
`;

export const ButtonBack = styled.div`
  width: ${({ alt }) => (alt ? '150px' : '262px')};
  height: ${({ alt }) => (alt ? '52px' : '64px')};
  border-radius: 50px;
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? '0' : '0 0 80px')};
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)'
      : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #667eea,
    #764ba2,
    #6b8dd6,
    #8e37d7
  );
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  /* transition: 0.4s ease; */
  background-size: 300% 100%;
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)'
      : 'none'};
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 0;
    background-position: 80% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? '24px' : '16px')};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? '32px' : '24px')};
`;