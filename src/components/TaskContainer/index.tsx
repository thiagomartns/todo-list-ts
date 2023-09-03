import {
  CreatedTasks,
  DoneTasks,
  TaskContent,
  Tasks,
  TasksCounterStyles,
} from "./styles";
import { AppContext } from "../../context/TaskContext";
import { useContext } from "react";
import { EmptyTaskList } from "./EmptyTaskList";
import { TaskListItem } from "./TaskListItem";

export const TaskContainer = () => {
  const { tasks, completedCount } = useContext(AppContext);

  return (
    <Tasks>
      <TasksCounterStyles>
        <CreatedTasks>
          <p>Tarefas Criadas</p>
          <span>{tasks.length}</span>
        </CreatedTasks>
        <DoneTasks>
          <p>Concluidas</p>
          <span>
            {tasks.length > 0 ? `${completedCount} de ${tasks.length}` : `${0}`}
          </span>
        </DoneTasks>
      </TasksCounterStyles>
      <TaskContent>
        {tasks.length === 0 && <EmptyTaskList />}
        {tasks.length > 0 &&
          tasks.map((task) => <TaskListItem key={task} task={task} />)}
      </TaskContent>
    </Tasks>
  );
};
