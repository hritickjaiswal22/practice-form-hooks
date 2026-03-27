import TaskForm from "../features/tasks/TaskForm";
import { useTask } from "../contexts/Taskcontext";
import { NavLink } from "react-router";

function NewTaskPage() {
  const { addTask } = useTask();

  return (
    <div>
      <div
        style={{
          maxWidth: "480px",
          margin: "2rem auto",
        }}
      >
        <NavLink to="/">Back to Task List</NavLink>
      </div>

      <TaskForm
        headerText="Add tasks"
        onSubmit={(task) => {
          addTask(task);
        }}
        ctaText="Add"
        clearFormAfterSubmit={true}
      />
    </div>
  );
}

export default NewTaskPage;
