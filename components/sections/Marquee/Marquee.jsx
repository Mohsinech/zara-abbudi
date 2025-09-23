"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import styles from "./marquee.module.css";

const MARQUEE_SPEED = 1.5;

const Marquee = () => {
  const x = useMotionValue(0);
  const direction = useRef("ltr");
  const trackRef = useRef(null);
  const lastScrollY = useRef(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        direction.current = "ltr";
      } else if (currentScrollY < lastScrollY.current) {
        direction.current = "rtl";
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useAnimationFrame(() => {
    const trackWidth = trackRef.current?.scrollWidth
      ? trackRef.current.scrollWidth / 2
      : 0;
    let next =
      x.get() + (direction.current === "ltr" ? MARQUEE_SPEED : -MARQUEE_SPEED);
    if (Math.abs(next) >= trackWidth) {
      next = 0;
    }
    x.set(next);
  });

  return (
    <section className={styles.wrapper}>
      <motion.div className={styles.track} ref={trackRef} style={{ x }}>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>

        {/* Duplicate for seamless loop */}
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
        <span>More Projects — More Projects</span>
      </motion.div>
    </section>
  );
};

export default Marquee;
