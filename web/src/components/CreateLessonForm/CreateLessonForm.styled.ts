import styled from 'styled-components';
import Typography from "components/ui/Typography";
import Button from 'components/ui/Button';

export const Form = styled.div`
    width: 80%;
    box-shadow: ${(props) => `0 0 10px ${props.theme.colors.lightGrey}`};
    padding: 0 1rem 1rem;
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

export const StepCloseOpenButton = styled(Button)`
    padding: 0;
`;

export const DoneStepButton = styled(Button)`
    padding: 0;
    margin-left: auto;
`;

export const StepText = styled(Text)`
    margin: 0;
`;

export const StepInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;