import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import TaskListPage from "./pages/TaskListPage";
import NewTaskPage from "./pages/NewTaskPage";
import EditTaskPage from "./pages/EditTaskPage";

function App() {
  return (
    <>
      <Routes>
        {/* Redirect root to /tasks */}
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/new" element={<NewTaskPage />} />
        <Route path="/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </>
  );
  return <h1>Hello World</h1>;
}

export default App;
