import styled from "styled-components";

export const CourseProgress = styled.div`
    width: 50%;
    height: 5rem;
    border-right: ${(props) => `1px solid ${props.theme.colors.lightGrey}`};
    padding: 1rem;
`;

export const RightBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

export const Wrapper = styled.div`
    display: flex;
`;