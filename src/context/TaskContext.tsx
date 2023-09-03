import React, { ChangeEvent, FormEvent, createContext, useState } from "react";

interface AppContextType {
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
  handleChangeNewTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tasks: string[];
  newTask: string;
  completedCount: number;
  setCompletedCount: React.Dispatch<React.SetStateAction<number>>;
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  removeTask: (task: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextType>({
  handleSubmit: () => {},
  handleChangeNewTask: () => {},
  tasks: [],
  newTask: "",
  completedCount: 0,
  setCompletedCount: () => {},
  setTasks: () => {},
  setNewTask: () => {},
  removeTask: () => {},
});

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [completedCount, setCompletedCount] = useState<number>(0);

  const handleChangeNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const removeTask = (taskToRemove: string) => {
    const updatedTasks = tasks.filter((task) => task !== taskToRemove);

    setTasks(updatedTasks);

    if (completedCount > 0) {
      setCompletedCount(completedCount - 1);
    }
  };

  const contextValue = {
    handleSubmit,
    handleChangeNewTask,
    tasks,
    setTasks,
    newTask,
    setNewTask,
    completedCount,
    setCompletedCount,
    removeTask,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
