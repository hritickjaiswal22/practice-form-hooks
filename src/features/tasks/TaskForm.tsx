import React, { useState } from "react";

import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Checkbox from "../../components/Checkbox/Checkbox";
import styles from "./TaskForm.module.css";
import type { Task } from "../../contexts/Taskcontext";

interface TaskFormProps {
  onSubmit: (task: Omit<Task, "id">) => void;
  initialValues?: Omit<Task, "id">;
  ctaText?: string;
  headerText?: string;
  clearFormAfterSubmit?: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
  ctaText = "Submit",
  initialValues = {
    completed: false,
    description: "",
    title: "",
  },
  headerText = "",
  clearFormAfterSubmit = false,
}) => {
  const [title, setTitle] = useState(initialValues.title || "");
  const [description, setDescription] = useState(
    initialValues.description || "",
  );
  const [completed, setCompleted] = useState(initialValues.completed || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, completed });

    if (clearFormAfterSubmit) {
      setTitle("");
      setDescription("");
      setCompleted(false);
    }
  };

  return (
    <div className={styles.formCard}>
      {headerText ? (
        <header className={styles.header}>
          <h2>{headerText}</h2>
        </header>
      ) : null}

      <form onSubmit={handleSubmit}>
        <Input
          label="What are you planning?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Finish the UI Design"
          required
        />
        <Textarea
          label="Details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Briefly describe the objective..."
          required
        />
        <Checkbox
          label="Is completed ?"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <button type="submit" className={styles.submitBtn}>
          {ctaText}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
