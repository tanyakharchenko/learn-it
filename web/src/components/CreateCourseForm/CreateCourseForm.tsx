import React from "react";
import { useTheme } from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from "react-i18next";
import TextField from "components/ui/TextField";
import IconButton from "components/ui/IconButton";
import PlusIcon from "components/icons/Plus";
import { CreateModuleForm } from "components/CreateModuleForm";
import * as Styled from "./CreateCourseForm.styled";

export const CreateCourseForm = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [temporaryCourseId, setTemporaryCourseId] = React.useState('');

  React.useEffect(() => {
    setTemporaryCourseId(uuidv4());
  }, [])

  return (
    <Styled.Form>
      <TextField
        variant="standard"
        label={t("courseForm.title")}
        fullWidth
        margin="normal"
      />
      <TextField
        variant="standard"
        label={t("courseForm.description")}
        multiline
        fullWidth
        margin="normal"
      />
      <Styled.TextButtonBlock>
        <Styled.Text variant="body1">{t("courseForm.modules")}</Styled.Text>
        <IconButton>
          <PlusIcon sx={{ color: theme.colors.blue }} />
        </IconButton>
      </Styled.TextButtonBlock>
      <CreateModuleForm temporaryCourseId={temporaryCourseId} />
    </Styled.Form>
  );
};
