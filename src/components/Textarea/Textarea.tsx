import React, { type ComponentPropsWithoutRef } from "react";
import styles from "./Textarea.module.css";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    <textarea className={styles.textAreaField} rows={4} {...props} />
  </div>
);

export default Textarea;
