import React from "react";
import { useTranslation } from "react-i18next";
import { FinishedCourse, InProgressCourse, PlannedCourse } from "types/User";
import Typography from "components/ui/Typography";
import { InProgressCourseCard } from "components/CourseCards/InProgressCourseCard";
import { PlannedCourseCard } from "components/CourseCards/PlannedCourseCard";
import { FinishedCourseCard } from "components/CourseCards/FinishedCourseCard";
import { PrivateProfileWrapper } from "../../PrivateProfile.styled";

interface OwnProps {
  inProgressCourses: InProgressCourse[];
  plannedCourses: PlannedCourse[];
  finishedCourses: FinishedCourse[];
}

export const MyLearning: React.FC<OwnProps> = ({
  inProgressCourses,
  plannedCourses,
  finishedCourses,
}) => {
  const { t } = useTranslation();

  return (
    <PrivateProfileWrapper>
      {inProgressCourses && (
        <Typography variant="h4">{t("privateProfile.inProgress")}</Typography>
      )}
      {inProgressCourses.map(({ course, progress }) => (
        <InProgressCourseCard
          course={course}
          progress={progress}
          key={course.id}
        />
      ))}
      {plannedCourses && (
        <Typography variant="h4" sx={{ marginTop: "2rem" }}>
          {t("privateProfile.planned")}
        </Typography>
      )}
      {plannedCourses.map(({ course }) => (
        <PlannedCourseCard course={course} key={course.id} />
      ))}
      {finishedCourses && (
        <Typography variant="h4" sx={{ marginTop: "2rem" }}>
          {t("privateProfile.finished")}
        </Typography>
      )}
      {finishedCourses.map(({ course }) => (
        <FinishedCourseCard
          course={course}
          key={course.id}
        />
      ))}
    </PrivateProfileWrapper>
  );
};
