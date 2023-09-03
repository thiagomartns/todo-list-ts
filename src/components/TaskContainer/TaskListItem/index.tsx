import React from "react";
import { ListItemStyles } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { Checkbox } from "@mantine/core";
import { defaultTheme } from "../../../styles/themes/default";

interface TaskListItemProps {
  task: string;
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  return (
    <ListItemStyles>
      <Checkbox
        radius="xl"
        styles={{
          input: {
            backgroundColor: "transparent",
            borderColor: defaultTheme.blue,
            "&:hover": {
              borderColor: defaultTheme["blue-dark"],
              cursor: "pointer",
            },
            "&:checked": {
              backgroundColor: defaultTheme["purple-dark"],
              color: defaultTheme["gray-100"],
              border: "none",
              "&:hover": {
                backgroundColor: defaultTheme.purple,
              },
            },
          },
        }}
      />
      <p>{task}</p>
      <Trash size={28} className="icon" />
    </ListItemStyles>
  );
};
