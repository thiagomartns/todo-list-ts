import { useContext } from "react";
import { Box, Button, Input, InputContainerStyles } from "./styles";
import { PlusCircle } from "@phosphor-icons/react";
import { AppContext } from "../../context/TaskContext";

export const InputContainer = () => {
  const { handleSubmit, handleChangeNewTask, newTask } = useContext(AppContext);

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
