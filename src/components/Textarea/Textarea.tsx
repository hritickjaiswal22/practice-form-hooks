import React, { type ComponentPropsWithoutRef } from "react";
import styles from "./Textarea.module.css";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, error, ...props }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    <textarea
      className={`${styles.textAreaField} ${error ? styles.areaError : ""}`}
      rows={4}
      {...props}
    />
    {error && <p className={styles.errorMessage}>{error}</p>}
  </div>
);

export default Textarea;
