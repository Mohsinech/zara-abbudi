import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./website.module.css";

const Project = ({ img, href, bg }) => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setOffset(rect.top * 0.2); // Adjust 0.2 for parallax strength
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.website} ref={containerRef}>
      <div className={styles.inner_container}>
        <Image
          src={bg}
          alt="background"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        {/* Site */}
        <div
          style={{
            transform: `translateY(${offset}px)`,
            transition: "transform 0.1s linear",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Image
            src={img}
            alt="website"
            width={900}
            height={700}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
