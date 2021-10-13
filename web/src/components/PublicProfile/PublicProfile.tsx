import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { publicMockUser } from "mocks/user";
import { course1Mock } from "mocks/course";
import { CourseCard } from "components/CourseCard";
import Typography from "components/ui/Typography";
import { TopInfo } from "./components/TopInfo";
import * as Styled from "./PublicProfile.styled";

interface RouteParams {
  userId: string;
}

export const PublicProfile = () => {
  const { t } = useTranslation();

  const { userId } = useParams<RouteParams>();
  const {
    userName,
    fullName,
    description,
    instagramLink,
    avatarUrl,
    createdCourses
  } = publicMockUser;

  return (
    <Styled.Wrapper>
      <TopInfo
        userName={userName}
        fullName={fullName}
        description={description}
        instagramLink={instagramLink}
        avatarUrl={avatarUrl}
      />
      <Typography variant="h4" marginTop="2rem">
        {t("publicProfile.myCourses")}
      </Typography>
      <Styled.CoursesWrapper>
        {createdCourses.map((course) => <CourseCard key={course.id} course={course} />)}
      </Styled.CoursesWrapper>
    </Styled.Wrapper>
  );
};
