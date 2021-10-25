import styled from "styled-components";
import Card from "components/ui/Card";

export const CardWrapper = styled(Card.Wrapper)<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "48%")};
  margin-top: 1rem;

  &:hover {
    box-shadow: ${(props) => `0px 2px 10px ${props.theme.colors.lightGrey}`};
  }
`;


export enum CourseCardTypes {
  Default,
  Finished,
  Planned
}

export const Title = styled.div<{ type: CourseCardTypes }>`
  height: 3rem;
  background: ${(props) => props.type === CourseCardTypes.Default ? props.theme.colors.secondary : props.type === CourseCardTypes.Planned ? props.theme.colors.accent : props.theme.colors.grey };
  opacity: 0.7;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: white;
  border-radius: 4px;
  margin-bottom: 1rem;
`;
