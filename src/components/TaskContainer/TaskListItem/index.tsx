import React, { useState, useContext } from "react";
import { ListItemStyles } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { Checkbox } from "@mantine/core";
import { defaultTheme } from "../../../styles/themes/default";
import { AppContext } from "../../../context/TaskContext";

interface TaskListItemProps {
  task: string;
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { completedCount, setCompletedCount } = useContext(AppContext);

  const handleChangeIsChecked = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setCompletedCount(completedCount + 1);
    } else {
      setCompletedCount(completedCount - 1);
    }
  };

  return (
    <ListItemStyles>
      <Checkbox
        checked={isChecked}
        onChange={handleChangeIsChecked}
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
      <p className={isChecked ? "checked" : ""}>{task}</p>
      <Trash size={28} className="icon" />
    </ListItemStyles>
  );
};
