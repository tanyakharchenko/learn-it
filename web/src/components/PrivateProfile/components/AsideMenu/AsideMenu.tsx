import React from "react";
import { useTranslation } from "react-i18next";
import { useRouteMatch, Link } from "react-router-dom";
import { UserRoles } from "types/general";
import List from "components/ui/List";
import Divider from "components/ui/Divider";
import * as Styled from "./AsideMenu.styled";

interface OwnProps {
  role: UserRoles;
}

const MenuItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <List.Item disablePadding>
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

export const AsideMenu: React.FC<OwnProps> = ({ role }) => {
  const { t } = useTranslation();
  const match = useRouteMatch();

  return (
    <Styled.Wrapper>
      <List.Container>
        <MenuItem
          text={t("privateProfile.myLearning")}
          href={`${match.url}/learning`}
        />
        <MenuItem
          text={t("privateProfile.editProfile")}
          href={`${match.url}/edit`}
        />
        {role === UserRoles.Author && (
          <>
            <Divider />
            <MenuItem
              text={t("privateProfile.myCourses")}
              href={`${match.url}/courses`}
            />
            <MenuItem
              text={t("privateProfile.myStudents")}
              href={`${match.url}/students`}
            />
            <MenuItem
              text={t("privateProfile.purchaseHistory")}
              href={`${match.url}/purchases`}
            />
            <Divider />
            <MenuItem text={t("privateProfile.addCourse")} href="/new-course" />
          </>
        )}
      </List.Container>
    </Styled.Wrapper>
  );
};
