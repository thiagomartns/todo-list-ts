import styled from "styled-components";

export const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const TasksCounterStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TasksCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  p {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span {
    border-radius: 999px;
    background-color: ${(props) => props.theme["gray-400"]};
    padding: 2px 8px;
    color: ${(props) => props.theme["gray-200"]};
    font-size: 0.75rem;
  }
`;

export const CreatedTasks = styled(TasksCounter)`
  p {
    color: ${(props) => props.theme.blue};
  }
`;

export const DoneTasks = styled(TasksCounter)`
  p {
    color: ${(props) => props.theme.purple};
  }
`;

export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme["gray-300"]};
    font-style: normal;
    font-weight: 700;
    line-height: 1.4;
  }
`;
