import React from "react";

interface TaskListItemProps {
  task: string;
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  return <p>{task}</p>;
};
