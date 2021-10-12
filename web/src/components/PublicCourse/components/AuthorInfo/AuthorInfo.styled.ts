import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 2rem;
    box-shadow: ${(props) => `0 0 10px ${props.theme.colors.lightGrey}`};
    padding: 1rem;
    border-radius: 4px;
    display: flex;
`;

export const TextBlock = styled.div`
    margin-left: 2rem;
`;