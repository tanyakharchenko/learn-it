import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { setLessonTemporaryId } from "store/newCourse/slice";
import { useAppDispatch } from "store/hooks";
import TextField from "components/ui/TextField";
import { CreateLessonStep } from "./CreateLessonStep";
import * as Styled from "./CreateLessonForm.styled";

interface OwnProps {
  temporaryModuleId: string;
}

export const CreateLessonForm: React.FC<OwnProps> = ({ temporaryModuleId }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [temporaryLessonId, setTemporaryLessonId] = React.useState("");

  React.useEffect(() => {
    const temporaryId = uuidv4();
    dispatch(
      setLessonTemporaryId({
        temporaryModuleId,
        temporaryLessonId: temporaryId,
      })
    );
    setTemporaryLessonId(temporaryId);
  }, [dispatch, temporaryModuleId]);

  return (
    <Styled.Form>
      <TextField variant="standard" label={t("lessonForm.title")} fullWidth />
      <TextField
        variant="standard"
        label={t("lessonForm.description")}
        fullWidth
        margin="dense"
      />
      <CreateLessonStep
        temporaryLessonId={temporaryLessonId}
        temporaryModuleId={temporaryModuleId}
      />
    </Styled.Form>
  );
};
