import { Box, Button, Input, InputContainerStyles } from "./styles";
import { PlusCircle } from "@phosphor-icons/react";

export const InputContainer = () => {
  return (
    <InputContainerStyles>
      <Box>
        <Input placeholder="Adicione uma nova tarefa" type="text" />
        <Button>
          Criar <PlusCircle size={20} />
        </Button>
      </Box>
    </InputContainerStyles>
  );
};
