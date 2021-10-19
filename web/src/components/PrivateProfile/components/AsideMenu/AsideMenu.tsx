import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import { UserRoles } from "types/general";
import List from "components/ui/List";
import Divider from "components/ui/Divider";
import * as Styled from "./AsideMenu.styled";

interface OwnProps {
  role: UserRoles;
  learningProfileURL: string;
  coursesProfileURL: string;
  studentsProfileURL: string;
  purchasesProfileURL: string;
}

const MenuItem = ({
  text,
  href,
  selected,
}: {
  text: string;
  href: string;
  selected?: boolean;
}) => {
  return (
    <List.Item disablePadding selected={selected}>
      <Link
        to={href}
        style={{ textDecoration: "none", color: "black", width: "100%" }}
      >
        <List.Button>
          <List.Text>{text}</List.Text>
        </List.Button>
      </Link>
    </List.Item>
  );
};

export const AsideMenu: React.FC<OwnProps> = ({
  role,
  learningProfileURL,
  coursesProfileURL,
  studentsProfileURL,
  purchasesProfileURL,
}) => {
  const { t } = useTranslation();

  const location = useLocation();

  const isLearningTabActive = !!matchPath(location.pathname, {
    path: learningProfileURL,
  });
  const isCoursesTabActive = !!matchPath(location.pathname, {
    path: coursesProfileURL,
  });
  const isStudentsTabActive = !!matchPath(location.pathname, {
    path: studentsProfileURL,
  });
  const isPurchasesTabActive = !!matchPath(location.pathname, {
    path: purchasesProfileURL,
  });

  return (
    <Styled.Wrapper>
      <List.Container>
        <MenuItem
          selected={isLearningTabActive}
          text={t("privateProfile.myLearning")}
          href={learningProfileURL}
        />
        {role === UserRoles.Author && (
          <>
            <Divider />
            <MenuItem
              selected={isCoursesTabActive}
              text={t("privateProfile.myCourses")}
              href={coursesProfileURL}
            />
            <MenuItem
              selected={isStudentsTabActive}
              text={t("privateProfile.myStudents")}
              href={studentsProfileURL}
            />
            <MenuItem
              selected={isPurchasesTabActive}
              text={t("privateProfile.purchaseHistory")}
              href={purchasesProfileURL}
            />
            <Divider />
            <MenuItem text={t("privateProfile.addCourse")} href="/new-course" />
          </>
        )}
      </List.Container>
    </Styled.Wrapper>
  );
};
