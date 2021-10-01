import styled from 'styled-components';
import IconButton from "components/ui/IconButton";

export const Form = styled.form`
    background: white;
    width: 30rem;
    height: 25rem;
    padding: 3rem;
    margin: 5rem auto;
    border-radius: 1rem;
    outline: none;
    position: relative
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    right: 2rem;
    top: 1rem;
`;