import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Card from "components/ui/Card";
import Typography from "components/ui/Typography";
import Button from "components/ui/Button";
import { Course, CourseStatus } from "types/Course";
import { useCourseStatusTranslation } from "components/hooks/useCourseStatusTranslation";
import { getSmallestPrice } from "utils/getSmallestPrice";
import { CardWrapper, Title, CourseCardTypes } from "../CourseCards.styled";
import * as Styled from "./PublicCourseCard.styled";

interface OwnProps {
  course: Course;
}

export const PublicCourseCard: React.FC<OwnProps> = ({ course }) => {
  const { t } = useTranslation();

  const { actionButtonText, text } = useCourseStatusTranslation(
    course.startDate,
    course.status
  );

  const isActionAvailable =
    course.status !== CourseStatus.Unknown &&
    course.status !== CourseStatus.NotAvailable;

  return (
    <CardWrapper>
      <Card.Content>
        <Title type={CourseCardTypes.Default}>
          <Typography variant="h5">{course.title}</Typography>
        </Title>
        <Typography variant="body2">{course.description}</Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          {t("general.courseProgram")}
        </Typography>
        <Styled.CourseProgram>
          {course.modules.map((module) => (
            <Typography key={module.id}>
              {t("general.module")} {module.order}: {module.title}
            </Typography>
          ))}
        </Styled.CourseProgram>
        <Typography sx={{ marginTop: "1rem" }} variant="h6">
          {t("general.priceFrom")} {getSmallestPrice(course.tariffs)}{" "}
          {course.currency}
          <Link
            to={`/course/${course.id}`}
            style={{ fontSize: "16px", marginLeft: "0.5rem" }}
          >
            {t("general.moreDetails")}
          </Link>
        </Typography>
      </Card.Content>
      <Card.Actions sx={{ padding: "16px" }}>
        <Typography variant="body1" fontWeight="bold">
          {text}
        </Typography>
        {isActionAvailable && (
          <Button variant="contained" sx={{ marginLeft: "auto" }}>
            {actionButtonText}
          </Button>
        )}
      </Card.Actions>
    </CardWrapper>
  );
};
