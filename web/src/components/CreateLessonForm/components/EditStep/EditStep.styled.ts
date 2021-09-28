import styled from "styled-components";

export const EditStepButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EditModeWrapper = styled.div`
  background: ${(props) => props.theme.colors.lightContrast};
  padding: 1rem;
  border-radius: 10px;
  margin-top: 0.5rem;
`;
