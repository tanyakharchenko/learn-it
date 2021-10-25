import React from "react";
import { useTranslation } from "react-i18next";
import { Course } from "types/Course";
import { CourseProgress } from "types/User";
import Card from "components/ui/Card";
import Typography from "components/ui/Typography";
import LinearProgress from "components/ui/LinearProgress";
import Button from "components/ui/Button";
import { CardWrapper, Title, CourseCardTypes } from "../CourseCards.styled";
import * as Styled from "./InProgressCourseCard.styled";

interface OwnProps {
  course: Course;
  progress: CourseProgress;
}

const findTitlesById = (progress: CourseProgress, course: Course) => {
  const currentModule = course.modules.find(
    (module) => module.id === progress.currentModuleId
  );
  const currentLesson = currentModule?.lessons.find(
    (lesson) => lesson.id === progress.currentLessonId
  );
  const currentStep = currentLesson?.steps.find(
    (step) => step.id === progress.currentStepId
  );

  return [currentModule?.title, currentLesson?.title, currentStep?.title];
};

export const InProgressCourseCard: React.FC<OwnProps> = ({
  course,
  progress,
}) => {
  const { t } = useTranslation();

  const [moduleTitle, lessonTitle, stepTitle] = findTitlesById(
    progress,
    course
  );
  return (
    <CardWrapper width="100%">
      <Card.Content>
        <Title type={CourseCardTypes.Default}>{course.title}</Title>
        <Styled.Wrapper>
          <Styled.CourseProgress>
            <Typography>
              {t("privateProfile.currentModule")} {moduleTitle}
            </Typography>
            <Typography>
              {t("privateProfile.currentLesson")} {lessonTitle}
            </Typography>
            <Typography sx={{marginBottom: '0.5rem'}}>
              {t("privateProfile.currentStep")} {stepTitle}
            </Typography>
            <LinearProgress.WithLabel value={progress.percentage} />
          </Styled.CourseProgress>
          <Styled.RightBlock>
            <Button variant="contained">
              {t("privateProfile.toLearning")}
            </Button>
          </Styled.RightBlock>
        </Styled.Wrapper>
      </Card.Content>
    </CardWrapper>
  );
};
