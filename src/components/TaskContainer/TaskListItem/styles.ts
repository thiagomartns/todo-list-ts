import { styled } from "styled-components";

export const ListItemStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 100%;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme["gray-500"]};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  border: 1px solid ${(props) => props.theme["gray-400"]};

  p {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme["gray-100"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4;
  }

  .checked {
    text-decoration: line-through;
    color: ${(props) => props.theme["gray-300"]};
  }

  .icon {
    padding: 5px 5.522px 5px 6px;
    background-color: transparent;
    font-size: 1rem;
    border-radius: 4px;
    &:hover {
      color: ${(props) => props.theme.danger};
      background-color: ${(props) => props.theme["gray-400"]};
      cursor: pointer;
    }
  }
`;
