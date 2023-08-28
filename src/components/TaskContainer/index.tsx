import { ClipboardText } from "@phosphor-icons/react";
import {
  CreatedTasks,
  DoneTasks,
  TaskContent,
  Tasks,
  TasksCounterStyles,
} from "./styles";

export const TaskContainer = () => {
  return (
    <Tasks>
      <TasksCounterStyles>
        <CreatedTasks>
          <p>Tarefas Criadas</p>
          <span>0</span>
        </CreatedTasks>
        <DoneTasks>
          <p>Concluidas</p>
          <span>0</span>
        </DoneTasks>
      </TasksCounterStyles>
      <TaskContent>
        <ClipboardText size={70} opacity={0.5} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p style={{ fontWeight: 400 }}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </TaskContent>
    </Tasks>
  );
};
