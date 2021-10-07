import styled from "styled-components";
import Card from "components/ui/Card";

export const CardWrapper = styled(Card.Wrapper)`
  width: 48%;
  margin-top: 1rem;
  
  &:hover {
    box-shadow: ${(props) => `0px 2px 10px ${props.theme.colors.lightGrey}`};
  }
`;

export const CourseProgram = styled.div`
  max-height: 5rem;
  overflow-y: scroll;
  padding: 1rem;
`;

export const Title = styled.div`
  height: 3rem;
  background: ${(props) => props.theme.colors.secondary};
  opacity: 0.7;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: white;
  border-radius: 4px;
  margin-bottom: 1rem;
`;