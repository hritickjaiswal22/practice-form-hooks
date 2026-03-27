import React, { type ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    <input
      className={`${styles.inputField} ${error ? styles.inputError : ""}`}
      {...props}
    />
    {error && <p className={styles.errorMessage}>{error}</p>}
  </div>
);

export default Input;
