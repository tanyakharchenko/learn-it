import styled from "styled-components";
import Typography from "components/ui/Typography";
import Button from "components/ui/Button";

export const Form = styled.div`
  box-shadow: ${(props) => `0 0 10px ${props.theme.colors.lightGrey}`};
  padding: 1rem;
`;

export const Text = styled(Typography)`
  color: ${(props) => props.theme.colors.secondaryText};
  margin-top: 1rem;
`;

export const TextButtonBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1rem;
`;

export const ActionButton = styled(Button)`
  padding: 0;
  margin-left: 1rem;
`;
