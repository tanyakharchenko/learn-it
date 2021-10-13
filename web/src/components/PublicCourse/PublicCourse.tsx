import React from "react";
import { useParams } from "react-router-dom";
import { course1Mock } from "mocks/course";
import { authorByCourseMock } from "mocks/user";
import { AuthorInfo } from "./components/AuthorInfo";
import { CourseProgram } from "./components/CourseProgram";
import { Tariffs } from "./components/Tariffs";
import { Actions } from "./components/Actions";
import Typography from "components/ui/Typography";

interface RouteParams {
  courseId: string;
}

export const PublicCourse = () => {
  const { courseId } = useParams<RouteParams>();

  const course = course1Mock; // тут запрос за курсом
  // тут еще запрос на автора по course.authorId

  return (
    <>
      <Typography variant="h3" marginTop="2rem">
        {course.title}
      </Typography>
      <Typography variant="body1" marginTop="2rem">
        {course.description}
      </Typography>
      <AuthorInfo author={authorByCourseMock} />
      <CourseProgram modules={course.modules} />
      <Tariffs tariffs={course.tariffs} currency={course.currency} />
      <Actions status={course.status} startDate={course.startDate} />
    </>
  );
};
