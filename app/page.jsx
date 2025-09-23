"use client";

import React from "react";

import {
  About,
  Expertise,
  Hero,
  Services,
  Testimonials,
  Work,
} from "../components/sections/index";
import Marquee from "../components/sections/Marquee/Marquee";
import styles from "./app.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className={styles.wrapper}>
        <div className={styles.title}>
          <h1 className="overflow-hidden">
            {"Projects".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%", skewY: 10 }}
                whileInView={{ y: 0, skewY: 0 }}
                viewport={{ once: false }}
                transition={{
                  delay: index * 0.1,
                  ease: [0.65, 0.05, 0, 1],
                  duration: 0.8,
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>
      </section>
      <Work />
      <About />
      <Marquee />
      <Expertise />
      <Services />
      <Testimonials />
    </main>
  );
}
