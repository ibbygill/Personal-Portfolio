import React from "react";
import { motion } from "framer-motion";

const HeroImg = () => {
    return (
      <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
          {svgBg.animatedBg}
          <img src="/images/" alt="hero image" loading="eager" />
      </motion.div>
    );
  };
export default HeroImg;