import styled from 'styled-components';

export const TopInfoWrapper = styled.div`
    display: flex;
    box-shadow: ${(props) => `0 0 10px ${props.theme.colors.lightGrey}`};
    padding: 2rem;
`;

export const TopInfoTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AvatarWrapper = styled.div`
    margin-left: auto;
`;

export const Socials = styled.div`
    margin-top: auto;
`;