import styled from 'styled-components';
import IconButton from "components/ui/IconButton";

export const Form = styled.form`
    background: white;
    width: 20rem;
    height: 18rem;
    padding: 2rem;
    margin: 5rem auto;
    border-radius: 1rem;
    outline: none;
    position: relative
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
`;