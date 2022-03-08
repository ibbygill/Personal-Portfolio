import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: 20,
          }}
        >
          <Image
            src="/images/Logo-IG.png"
            alt="brand-logo"
            className="brand-logo"
          />
          <Span className="brand-name">Ibjyot Gill</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li id="nav-projects">
        <Link href="#projects"
         passHref>
          <NavLink>Projects</NavLink>
        </Link>
        <div className="nav-effect projects"></div>
      </li>
      <li id="nav-tech">
        <Link href="#tech"
         passHref >
          <NavLink>About</NavLink>
        </Link>
        <div className="nav-effect tech"></div>
      </li>
      <li id="nav-contact">
        <Link href="#contact"
         passHref>
          <NavLink>Contact</NavLink>
        </Link>
        <div className="nav-effect contact"></div>
      </li>
    </Div2>
    <Div3>
      <SocialIcons 
      href="https://github.com/ibbygill" 
      target="_blank"
      passHref
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/ibjyot-gill-02619b141/"
        target="_blank"
        passHref
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/ibjyot1"
       target="_blank"
       passHref
       >
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;