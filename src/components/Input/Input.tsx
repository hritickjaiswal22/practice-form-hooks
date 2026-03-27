import React, { type ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    <input className={styles.inputField} {...props} />
  </div>
);

export default Input;
