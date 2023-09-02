import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, Input, InputContainerStyles } from "./styles";
import { PlusCircle } from "@phosphor-icons/react";

export const InputContainer = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleChangeNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    console.log(newTask);

    console.log(tasks);
  };

  return (
    <InputContainerStyles onSubmit={handleSubmit}>
      <Box>
        <Input
          placeholder="Adicione uma nova tarefa"
          type="text"
          onChange={handleChangeNewTask}
          value={newTask}
        />
        <Button>
          Criar <PlusCircle size={20} />
        </Button>
      </Box>
    </InputContainerStyles>
  );
};
