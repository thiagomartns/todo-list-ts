import styled from "styled-components";

export const InputContainerStyles = styled.form`
  box-shadow: inset 0 1.75rem ${(props) => props.theme["gray-700"]};
  width: 100vw;
`;

export const Box = styled.div`
  display: flex;
  padding-bottom: 4rem;
  gap: 1rem;
  margin: 0 auto;
  max-width: 550px;

  @media (min-width: 375px) and (max-width: 996px) {
    max-width: 500px;
    padding: 0 2rem 4rem 2rem;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme["blue-dark"]};
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  font-weight: 700;
  line-height: 1.4;
  font-style: normal;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme["gray-500"]};
  border: none;
  border: 1px solid ${(props) => props.theme["gray-700"]};
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};
  padding: 1rem;
  width: 100%;
  line-height: 1.4;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme["purple-dark"]};
  }
  &::placeholder {
    color: ${(props) => props.theme["gray-300"]};
  }
`;
