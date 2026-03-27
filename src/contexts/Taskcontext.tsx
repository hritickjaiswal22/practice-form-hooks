import { createContext, useState, useContext, type ReactNode } from "react";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, "id" | "completed">) => void;
  editTask: (id: number, updatedTask: Omit<Task, "id">) => void;
  toggleTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Design System Update",
      description: "Review the new brand colors and typography scale.",
      completed: true,
    },
    {
      id: 2,
      title: "API Integration",
      description:
        "Connect the task dashboard to the backend GraphQL endpoint.",
      completed: false,
    },
    {
      id: 3,
      title: "User Interview",
      description:
        "Sync with the UX team to discuss feedback from the beta group.",
      completed: false,
    },
  ]);
  const [taskId, setTaskId] = useState<number>(0);

  const addTask = (task: Omit<Task, "id" | "completed">) => {
    const newTask: Task = {
      id: taskId,
      completed: false,
      ...task,
    };
    setTasks((prev) => [...prev, newTask]);
    setTaskId((prev) => prev + 1);
  };

  const editTask = (id: number, updatedTask: Omit<Task, "id">) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
    );
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }

  return context;
}
