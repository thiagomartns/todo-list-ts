import React from "react";
import { ListItemStyles } from "./styles";
import { Trash } from "@phosphor-icons/react";

interface TaskListItemProps {
  task: string;
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  return (
    <ListItemStyles>
      <input type="checkbox" />
      <p>{task}</p>
      <Trash />
    </ListItemStyles>
  );
};
