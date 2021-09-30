import styled from 'styled-components';
import Typography from "components/ui/Typography";

export const Form = styled.form`
    width: 50%;
`;

export const Text = styled(Typography)`
    color: ${(props) => props.theme.colors.secondaryText}
`;

export const TextButtonBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;
