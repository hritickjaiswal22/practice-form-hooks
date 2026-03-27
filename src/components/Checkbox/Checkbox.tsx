import React, { type ComponentPropsWithoutRef } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => (
  <label className={styles.wrapper}>
    <input type="checkbox" className={styles.input} {...props} />
    <span className={styles.label}>{label}</span>
  </label>
);

export default Checkbox;
