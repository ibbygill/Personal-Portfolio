import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from 'react-icons/di';
import { FaServer } from 'react-icons/fa';
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
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionSubTitle main>About</SectionSubTitle>
    <SlideUpWhenVisible>
      <SectionText>
        I'm a web developer specialized in the JavaScript environment. For the
        front-end I use React.js and for the back-end I use Node.js,
        particularly with the Express framework.
      </SectionText>
    </SlideUpWhenVisible>
    <SlideUpWhenVisible>
      <List>
          <DiReact size="3rem" />
          <ListContainer>
           {/* add in front end tools i use */}
          </ListContainer>
        <ListItem>
          <DiNodejsSmall size="3rem" />
          <ListContainer>
            {/* add in baack end tools i use */}
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            {/* add in database tools i use */}
          </ListContainer>
        </ListItem>
      </List>
    </SlideUpWhenVisible>
  </Section>
);

export default Technologies;