import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 17rem;
    position: fixed;
    right: 3rem;
    top: 20%;
    border-left: ${(props) => `1px solid ${props.theme.colors.lightGrey}`};
`;