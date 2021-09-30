import styled from "styled-components";
import Typography from "components/ui/Typography";
import Button from "components/ui/Button";

export const StepText = styled(Typography)`
  margin: 0;
`;

export const StepCloseOpenButton = styled(Button)`
  padding: 0;
`;


export const StepInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DoneStepButton = styled(Button)`
  padding: 0;
  margin-left: auto;
`;

export const TextButtonBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;