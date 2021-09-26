import React from "react";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "store/hooks";
import { setModuleTemporaryId } from "store/newCourse/slice";
import TextField from "components/ui/TextField";
import Container from "components/ui/Container";
import IconButton from "components/ui/IconButton";
import PlusIcon from "components/icons/Plus";
import { CreateLessonForm } from "components/CreateLessonForm";
import * as Styled from "./CreateModuleForm.styled";

interface OwnProps {
  temporaryCourseId: string;
}

export const CreateModuleForm: React.FC<OwnProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const [temporaryModuleId, setTemporaryModuleId] = React.useState("");

  React.useEffect(() => {
    const temporaryId = uuidv4();
    dispatch(setModuleTemporaryId({ temporaryModuleId: temporaryId }));
    setTemporaryModuleId(temporaryId);
  }, [dispatch]);

  return (
    <Styled.FormWrapper>
      <Container>
        <Styled.Form>
          <TextField
            variant="standard"
            label={t("moduleForm.title")}
            fullWidth
            margin="normal"
          />
          <TextField
            variant="standard"
            label={t("moduleForm.description")}
            fullWidth
            margin="normal"
          />
          <Styled.TextButtonBlock>
            <Styled.Text variant="body1">{t("moduleForm.lessons")}</Styled.Text>
            <IconButton>
              <PlusIcon sx={{ color: theme.colors.blue }} />
            </IconButton>
          </Styled.TextButtonBlock>
          <CreateLessonForm temporaryModuleId={temporaryModuleId} />
        </Styled.Form>
      </Container>
    </Styled.FormWrapper>
  );
};
