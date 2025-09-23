import React from "react";
import { ButtonWhite } from "../../ui animation/index";
import styles from "./toggle.module.css";

const ToggleClose = ({ handleClose }) => {
  return (
    <div onClick={handleClose}>
      <ButtonWhite label="Close" classes={styles.toggle} />
    </div>
  );
};

export default ToggleClose;
