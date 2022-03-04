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
            Made with Next
          </Slogan>
          <SocialContainer>
            <SocialIconsContainer>
              <SocialIcons href="" target="_blank">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons
                href=""
                target="_blank"
              >
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons
                href=""
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