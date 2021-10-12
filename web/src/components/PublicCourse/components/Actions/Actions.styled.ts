import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  border-radius: 4px;
  box-shadow: ${(props) => `0 0 10px ${props.theme.colors.lightGrey}`};
`;

export const Colorfull = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.colors.secondary};
  flex-grow: 1;
  border-radius: 4px;
`;

export const ColorLess = styled.div`
  padding: 1rem;
  background: white;
`;
