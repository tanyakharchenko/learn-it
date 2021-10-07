import React from "react";
import { useTranslation } from "react-i18next";
import Card from "components/ui/Card";
import Typography from "components/ui/Typography";
import Button from "components/ui/Button";
import { Course, CourseStatus } from "types/Course";
import * as Styled from "./CourseCard.styled";

interface OwnProps {
  course: Course;
}

export const CourseCard: React.FC<OwnProps> = ({ course }) => {
  const { t } = useTranslation();

  const mapStatusToTranslation = {
    [CourseStatus.AvailableAlways]: {
      text: t("courseCard.availableAlways"),
      actionButtonText: t("courseCard.availableAlwaysAction"),
    },
    [CourseStatus.AvailableSoon]: {
      text: t("courseCard.availableSoon"),
      actionButtonText: t("courseCard.availableSoonAction"),
    },
    [CourseStatus.RegistrationOpen]: {
      text: `${t("courseCard.startDate")} ${course.startDate}`,
      actionButtonText: t("courseCard.startDateAction"),
    },
    [CourseStatus.InProgress]: {
      text: t("courseCard.inProgress"),
      actionButtonText: t("courseCard.inProgressAction"),
    },
    [CourseStatus.Unknown]: {
      text: t("courseCard.unknown"),
      actionButtonText: t("courseCard.inProgressAction"),
    },
  };

  const currentStatus = mapStatusToTranslation[course.status];

  return (
    <Styled.CardWrapper>
      <Card.Content>
        <Styled.Title>
          <Typography variant="h5">{course.title}</Typography>
        </Styled.Title>
        <Typography variant="body2">{course.description}</Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          {t("courseCard.courseProgram")}
        </Typography>
        <Styled.CourseProgram>
          {course.modules.map((module) => (
            <Typography key={module.id}>
              {t("general.module")} {module.order}: {module.title}
            </Typography>
          ))}
        </Styled.CourseProgram>
      </Card.Content>
      <Card.Actions sx={{ padding: "16px" }}>
        <Typography variant="body1" fontWeight="bold">
          {currentStatus.text}
        </Typography>
        {course.status !== CourseStatus.Unknown && (
          <Button variant="contained" sx={{ marginLeft: "auto" }}>
            {currentStatus.actionButtonText}
          </Button>
        )}
      </Card.Actions>
    </Styled.CardWrapper>
  );
};
