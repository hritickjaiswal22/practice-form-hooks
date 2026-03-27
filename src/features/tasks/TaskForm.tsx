import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Checkbox from "../../components/Checkbox/Checkbox";
import styles from "./TaskForm.module.css";
import type { Task } from "../../contexts/Taskcontext";

// 1. Define the Validation Schema
const schema = yup
  .object({
    title: yup
      .string()
      .required("A title is required")
      .trim()
      .min(3, "Too short!"),
    description: yup.string().trim().required("Please add some details"),
    // .default(false) ensures it starts as false
    // .required() ensures TypeScript doesn't see it as optional
    completed: yup.boolean().required().default(false),
  })
  .required();

// Extract the type from the schema
type FormData = yup.InferType<typeof schema>;

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
  // 2. Initialize useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    if (clearFormAfterSubmit) {
      reset(); // Resets to defaultValues
    }
  };

  return (
    <div className={styles.formCard}>
      {headerText && (
        <header className={styles.header}>
          <h2>{headerText}</h2>
        </header>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* 3. Use register and pass error messages */}
        <Input
          label="What are you planning?"
          placeholder="e.g. Finish the UI Design"
          {...register("title")}
          error={errors.title?.message}
        />

        <Textarea
          label="Details"
          placeholder="Briefly describe the objective..."
          {...register("description")}
          error={errors.description?.message}
        />

        <Checkbox label="Is completed?" {...register("completed")} />

        <button type="submit" className={styles.submitBtn}>
          {ctaText}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
