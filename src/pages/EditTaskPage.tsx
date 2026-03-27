import { useNavigate, NavLink, useParams } from "react-router";

import TaskForm from "../features/tasks/TaskForm";
import { useTask } from "../contexts/Taskcontext";

function EditTaskPage() {
  let { id } = useParams();
  const { editTask, tasks } = useTask();
  const navigate = useNavigate();

  const taskToEdit = tasks.find((task) => task.id === Number(id));

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
        headerText="Edit task"
        onSubmit={(task) => {
          editTask(Number(id), task);
          navigate("/");
        }}
        ctaText="Edit"
        initialValues={taskToEdit}
      />
    </div>
  );
}

export default EditTaskPage;
