import { ClipboardText } from "@phosphor-icons/react";

export const EmptyTaskList = () => {
  return (
    <>
      <ClipboardText size={70} opacity={0.5} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p style={{ fontWeight: 400 }}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </>
  );
};
