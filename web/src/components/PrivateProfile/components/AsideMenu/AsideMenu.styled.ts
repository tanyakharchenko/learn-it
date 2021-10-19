import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 20%;
    position: fixed;
    right: 0;
    padding-right: 3rem;
    top: 20%;
    border-left: ${(props) => `1px solid ${props.theme.colors.lightGrey}`};
`;