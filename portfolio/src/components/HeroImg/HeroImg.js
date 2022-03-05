import React from "react";
import { motion } from "framer-motion";
import { AvatarContainer } from "./HeroImgStyles";


const HeroImg = () => {
    return (
      <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
      <AvatarContainer>
        {/* add animation here */}
        <img src="/images/" alt="hero image" loading="eager" />
      </AvatarContainer>
    </motion.div>
    );
  };
export default HeroImg;