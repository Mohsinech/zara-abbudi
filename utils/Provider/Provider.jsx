"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./provider.module.css";

export default function Provider() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // simulate loading duration
    const timeout = setTimeout(() => setIsVisible(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.loader}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.65, 0.05, 0, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 430 1132"
            preserveAspectRatio="none"
          >
            <motion.path
              fill="#F1F1F1"
              stroke="none"
              initial={{ d: "M0 0 L430 0 L430 1132 Q215 1132 0 1132 L0 0" }}
              animate={{ d: "M0 0 L430 0 L430 1132 Q215 932 0 1132 L0 0" }}
              exit={{ d: "M0 0 L430 0 L430 1132 Q215 1132 0 1132 L0 0" }}
              transition={{ duration: 1.2, ease: [0.65, 0.05, 0, 1] }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
