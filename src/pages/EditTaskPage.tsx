import { useParams } from "react-router";

function EditTaskPage() {
  let { id } = useParams();

  return (
    <div>
      <h1>Edit Task Page</h1>
      <p>Editing task with ID: {id}</p>
      <p>Form to edit the task will go here.</p>
    </div>
  );
}

export default EditTaskPage;
