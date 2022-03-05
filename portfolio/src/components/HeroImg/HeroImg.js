import React from "react";
import { motion } from "framer-motion";
import { AvatarContainer } from "./HeroImgStyles";
import { svgBg } from "../Animation.js/Animation";


const HeroImg = () => {
    return (
      <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
      <AvatarContainer>
        {svgBg.animatedBg}
        <img src="/images/" alt="hero image" loading="eager" />
      </AvatarContainer>
    </motion.div>
    );
  };

export default HeroImg;