"use client";

import React from "react";
import { Projects } from "../../../constants/data";
import { Project } from "../../layouts/index";
import styles from "./work.module.css";

const Work = () => {
  return (
    <section className={styles.work_section}>
      <div className={styles.project_container}>
        {Projects.map((project) => (
          <Project key={project.href} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
