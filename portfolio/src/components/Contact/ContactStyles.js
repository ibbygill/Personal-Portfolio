import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContContainer = styled.div`
  position: relative;
  /* min-width: 1100px; */
  min-height: 550px;
  display: flex;
  z-index: 1000;
  margin-top: 20px;
`;

export const ContInfo = styled.div`
  position: absolute;
  width: 350px;
  height: calc(100% - 120px);
  background-color: #212d45;
  background-image: linear-gradient(315deg, #212d45 50%, #4d566a 94%);
  margin: 58px 0 16px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 10px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  height: 50%;
  h2 {
    margin-bottom: 20px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  h5 {
    margin-left: 20px;
  }
`;

export const ContactForm = styled.form`
  position: absolute;
  padding: 70px 50px;
  padding-left: 250px;
  margin-left: 150px;
  width: calc(100% - 150px);
  height: 100%;
  background: #fff;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.25);

  h2 {
    color: black;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const FormBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 30px;
  .css-18btcsr {
    margin-left: 25px;
    bottom: 15px;
    background: #fff;
  }
`;