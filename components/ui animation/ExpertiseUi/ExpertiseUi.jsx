import React from "react";
import styles from "./expertise.module.css";

const ExpertiseUi = ({
  label,
  description,
  techone,
  techtwo,
  techthree,
  techfour,
}) => {
  const techs = [techone, techtwo, techthree, techfour];

  return (
    <div className={styles.container}>
      <div className={styles.head_container}>
        <h1 className={styles.head_container_h1}>{label}</h1>
        <p className={styles.head_container_p}>{description}</p>
      </div>

      <div className={styles.flex_col_data}>
        {techs.map((tech, index) => (
          <div key={index} className={`group ${styles.tech_flex_col}`}>
            <h2
              className={`transition-colors duration-300 group-hover:text-dark ${styles.tech_label}`}
            >
              {tech}
            </h2>
            <div className={`${styles.tech_line} `}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseUi;
