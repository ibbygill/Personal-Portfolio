import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';

import { SiFigma, SiHtml5, SiCss3, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionSubTitle,
} from '../../styles/GlobalComponents';
import SlideUpWhenVisible from '../../utils/SlideUpWhenVisible';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  IconList
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionSubTitle main>About</SectionSubTitle>
    <SlideUpWhenVisible>
      <SectionText>
        I'm a web developer specialized in the JavaScript environment. Using HTML5|CSS3
        design techniques to create dynamic designs. That are implemented with styled components 
        and react frameworks.
      </SectionText>
    </SlideUpWhenVisible>
    <SlideUpWhenVisible>
        <List>
            <ListItem>
            <IconList>
            <DiReact size="3rem" />
            <span> </span>
            <SiHtml5 size="3rem" />
            <span> </span>
            <SiCss3 size="3rem" />
            </IconList>
            <ListContainer>
                <ListTitle>Front-End</ListTitle>
                <ListParagraph>HTML5, CSS3, Next.js, Styled, Javascript, React, Node.js</ListParagraph>
            </ListContainer>
            </ListItem>
            <ListItem>
            <IconList>
            <SiFigma size="3rem" />
            <span></span>
            <SiAdobephotoshop size="3rem" />
            <span> </span>
            <SiAdobeillustrator size="3rem" />
            </IconList>
            <ListContainer>
                <ListTitle>Design</ListTitle>
                <ListParagraph>Figma,After Effects, Illustrator, Photoshop </ListParagraph>
            </ListContainer>
            </ListItem>
            <ListItem>
            <DiFirebase size="3rem" />
            <ListContainer>
                <ListTitle>Databases</ListTitle>
                <ListParagraph>MongoDb, MySql, PHP</ListParagraph>
            </ListContainer>
            </ListItem>
      </List>
    </SlideUpWhenVisible>
  </Section>
);

export default Technologies;