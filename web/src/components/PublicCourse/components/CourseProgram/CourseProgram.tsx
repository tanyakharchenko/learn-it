import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "components/ui/Typography";
import { Module } from "types/Course";
import * as Styled from "./CourseProgram.styled";

interface OwnProps {
  modules: Module[];
}

export const CourseProgram: React.FC<OwnProps> = ({ modules }) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Typography variant="h5">{t("general.courseProgram")}</Typography>
      <Styled.CourseModules>
        {modules.map((module) => (
          <Styled.CourseModule key={module.id}>
            <Typography>{module.title}</Typography>
            <Typography variant="body2">{module.description}</Typography>
          </Styled.CourseModule>
        ))}
      </Styled.CourseModules>
    </Styled.Wrapper>
  );
};
