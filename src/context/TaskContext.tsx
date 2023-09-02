import React, { ChangeEvent, FormEvent, createContext, useState } from "react";

interface AppContextType {
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
  handleChangeNewTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tasks: string[]; // Adicione as tarefas ao contexto
  newTask: string;
  setTasks: React.Dispatch<React.SetStateAction<string[]>>; // Adicione o setter das tarefas ao contexto
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
}

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextType>({
  handleSubmit: () => {},
  handleChangeNewTask: () => {},
  tasks: [],
  newTask: "",
  setTasks: () => {},
  setNewTask: () => {},
});

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleChangeNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const contextValue = {
    handleSubmit,
    handleChangeNewTask,
    tasks,
    setTasks,
    newTask,
    setNewTask,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
