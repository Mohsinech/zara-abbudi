"use client";

import React from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_right_col}>
        <div className={styles.h1_div}>
          <motion.h1
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.65, 0.05, 0, 1],
            }}
            className={styles.h1}
          >
            Zara.
          </motion.h1>
        </div>
        <div className={styles.h1_div}>
          <motion.h1
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.65, 0.05, 0, 1],
            }}
            className={styles.h1}
          >
            Abbudi.
          </motion.h1>
        </div>
      </div>
      {/*  */}
      <div className={styles.hero_left_col}>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.65, 0.05, 0, 1],
          }}
          className={styles.intro}
        >
          Hi, I&apos;m zara, a creative full-stack web developer passionate
          about crafting user-friendly and innovative web experiences.
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
