import styled from 'styled-components';
import Typography from "components/ui/Typography";

export const FormWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 50%; 
    height: 100vh;
    box-shadow: ${(props) => `-5px 5px 5px ${props.theme.colors.lightGrey}`};
    overflow-y: scroll;
`;


export const Form = styled.div`
    max-width: 20rem;
    width: 100%;
`;

export const Text = styled(Typography)`
    color: ${(props) => props.theme.colors.secondaryText}
`;

export const TextButtonBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;