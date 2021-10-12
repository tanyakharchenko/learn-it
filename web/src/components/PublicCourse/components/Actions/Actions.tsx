import React from "react";
import { useTranslation } from "react-i18next";
import { CourseStatus } from "types/Course";
import { useCourseStatusTranslation } from "components/hooks/useCourseStatusTranslation";
import Typography from "components/ui/Typography";
import Button from "components/ui/Button";
import * as Styled from "./Actions.styled";

interface OwnProps {
  status: CourseStatus;
  startDate: string;
}

export const Actions: React.FC<OwnProps> = ({ status, startDate }) => {
  const { t } = useTranslation();

  const { actionButtonText, text } = useCourseStatusTranslation(
    startDate,
    status
  );

  return (
    <Styled.Wrapper>
      <Styled.Colorfull>
        <Typography variant="h4">{text}</Typography>
      </Styled.Colorfull>
      {status !== CourseStatus.Unknown && (
        <Styled.ColorLess>
          <Button color="secondary" variant="contained" sx={{ marginLeft: "auto", minWidth: "15rem" }} size="large">
            {actionButtonText}
          </Button>
        </Styled.ColorLess>
      )}
    </Styled.Wrapper>
  );
};
