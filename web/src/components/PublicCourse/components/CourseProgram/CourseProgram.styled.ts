import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    background: ${(props) => props.theme.colors.lightContrast};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
`;

export const CourseModules = styled.div`
    margin-top: 1rem;
`;

export const CourseModule = styled.div`
    padding: 1rem 0;
    background: white;  
    margin-top: 0.5rem; 
    padding: 1rem;   
`;