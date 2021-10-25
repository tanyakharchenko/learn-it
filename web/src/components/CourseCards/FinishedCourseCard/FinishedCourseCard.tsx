import React from "react";
import { useTranslation } from "react-i18next";
import { Course } from "types/Course";
import Card from "components/ui/Card";
import Typography from "components/ui/Typography";
import Button from "components/ui/Button";
import { CardWrapper, Title, CourseCardTypes } from "../CourseCards.styled";
import * as Styled from "./FinishedCourseCard.styled";

interface OwnProps {
  course: Course;
}

export const FinishedCourseCard: React.FC<OwnProps> = ({
  course,
}) => {
  const { t } = useTranslation();

  return (
    <CardWrapper width="100%">
      <Card.Content>
        <Title type={CourseCardTypes.Finished}>{course.title}</Title>
        <Styled.Wrapper>
          <Styled.CourseProgress>
            <Typography>
              {course.description}
            </Typography>
          </Styled.CourseProgress>
          <Styled.RightBlock>
            <Button variant="contained">
              {t("privateProfile.toMaterials")}
            </Button>
          </Styled.RightBlock>
        </Styled.Wrapper>
      </Card.Content>
    </CardWrapper>
  );
};
