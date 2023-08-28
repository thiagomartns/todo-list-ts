import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  background-color: ${(props) => props.theme["gray-700"]};
`;
