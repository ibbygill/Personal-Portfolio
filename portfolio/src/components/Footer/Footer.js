import React from "react";

import { Section } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  FooterWrapper,
  LinkList,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Section>
      <FooterWrapper>
        <LinkList>
          <Slogan>
            Work In Progress
          </Slogan>
          <SocialContainer>
            <SocialIconsContainer>
              <SocialIcons href="https://github.com/ibbygill" target="_blank">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons
                href="https://www.linkedin.com/in/ibjyot-gill-02619b141/"
                target="_blank"
              >
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons
                href="https://twitter.com/ibjyot1"
                target="_blank"
              >
                <AiFillTwitterCircle size="3rem" />
              </SocialIcons>
            </SocialIconsContainer>
          </SocialContainer>
        </LinkList>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;