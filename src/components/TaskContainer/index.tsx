import { ClipboardText } from "@phosphor-icons/react";
import {
  CreatedTasks,
  DoneTasks,
  TaskContent,
  Tasks,
  TasksCounterStyles,
} from "./styles";
import { AppContext } from "../../context/TaskContext";
import { useContext } from "react";

export const TaskContainer = () => {
  const { tasks } = useContext(AppContext);

  return (
    <Tasks>
      <TasksCounterStyles>
        <CreatedTasks>
          <p>Tarefas Criadas</p>
          <span>{tasks.length}</span>
        </CreatedTasks>
        <DoneTasks>
          <p>Concluidas</p>
          <span>0</span>
        </DoneTasks>
      </TasksCounterStyles>
      <TaskContent>
        {tasks.length === 0 && (
          <>
            <ClipboardText size={70} opacity={0.5} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p style={{ fontWeight: 400 }}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </>
        )}
        {tasks.length > 0 &&
          tasks.map((task) => (
            <div key={task}>
              <p>{task}</p>
            </div>
          ))}
      </TaskContent>
    </Tasks>
  );
};
