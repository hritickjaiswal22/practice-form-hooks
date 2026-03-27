import React from "react";
import { NavLink } from "react-router";
import styles from "./TaskList.module.css";
import { useTask } from "../../contexts/Taskcontext";

const TaskList: React.FC = () => {
  // Example mock data - in a real app, this might come from an API or props
  const { tasks, toggleTask } = useTask();

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        <header className={styles.header}>
          <h1>Task Overview</h1>
          <p>
            You have {tasks.filter((t) => !t.completed).length} pending items
            for today.
          </p>

          <NavLink to="/new" className={styles.addButton}>
            <span className={styles.plusIcon}>+</span>
            Create Task
          </NavLink>
        </header>

        <section className={styles.list}>
          {tasks.map((task) => (
            <article key={task.id} className={styles.taskCard}>
              <div
                onClick={() => toggleTask(task.id)}
                className={styles.checkboxContainer}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  readOnly
                  className={styles.checkbox}
                />
              </div>

              <div className={styles.content}>
                <h3
                  className={`${styles.title} ${task.completed ? styles.completedText : ""}`}
                >
                  {task.title}
                </h3>
                <p className={styles.description}>{task.description}</p>
              </div>

              <div>
                <div
                  className={`${styles.badge} ${task.completed ? styles.doneBadge : ""}`}
                >
                  {task.completed ? "Done" : "ToDo"}
                </div>

                <NavLink to={`/edit/${task.id}`} className={styles.editLink}>
                  Edit
                </NavLink>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default TaskList;
