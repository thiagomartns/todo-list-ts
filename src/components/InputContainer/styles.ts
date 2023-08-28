import styled from "styled-components";

export const InputContainerStyles = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5rem;
  gap: 2rem;
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
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme["gray-500"]};
  border: none;
  border: 1px solid ${(props) => props.theme["gray-700"]};
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};
  padding: 1rem;
  width: 30rem;
  line-height: 1.4;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme["purple-dark"]};
  }
  &::placeholder {
    color: ${(props) => props.theme["gray-300"]};
  }
`;
