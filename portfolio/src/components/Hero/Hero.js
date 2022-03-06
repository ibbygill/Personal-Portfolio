import React from "react";
import { motion } from "framer-motion";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection, HeroButton, HeroButton2 } from "./HeroStyles";
import Link from "next/link";
import { BsPaperclip } from "react-icons/bs";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <SectionTitle main center noMarginTop>
            Hi! I'm Ibby <br />
            Welcome To <br />
            My Portfolio
          </SectionTitle>
        </motion.div>
        <motion.div variants={item}>
          <SectionText>
            I'm a highly motivated Front-end Web Developer who is passionate about learning new technologies.
          </SectionText>
        </motion.div>
        <motion.div style={{ display: "flex", paddingBottom: 32 }} variants={item}>
          <Link href="#tech">
            <HeroButton>Learn More</HeroButton>
          </Link>
          <HeroButton2 href="" target="_blank">
            <BsPaperclip />
            Request CV
          </HeroButton2>
        </motion.div>
      </motion.div>
    </LeftSection>
  </Section>
);

export default Hero;