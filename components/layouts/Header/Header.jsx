import Link from "next/link";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const Header = () => {
  //
  const scrollY = useScroll().scrollY;
  const Y = useTransform(scrollY, [0, 50], [0, -100]);
  //
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
      className={styles.header}
      style={{ y: Y }}
    >
      <Link href="/" className={styles.logo}>
        &copy; Code By Zara
      </Link>
      <Link
        href="mailto:#"
        className={`animate group ${styles.scrolling_div_line}`}
      >
        <span className={styles.mail}>Email Me</span>
      </Link>
    </motion.header>
  );
};

export default Header;
