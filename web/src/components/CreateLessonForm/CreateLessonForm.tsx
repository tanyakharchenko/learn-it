import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import {
  setLessonTemporaryId,
  setLessonInfo,
  deleteLesson,
} from "store/newCourse/slice";
import { useAppDispatch } from "store/hooks";
import TextField from "components/ui/TextField";
import DoneIcon from "components/icons/Done";
import CloseIcon from "components/icons/Close";
import { CreateLessonStep } from "./CreateLessonStep";
import * as Styled from "./CreateLessonForm.styled";

interface OwnProps {
  temporaryModuleId: string;
  closeLessonForm: () => void;
}

export const CreateLessonForm: React.FC<OwnProps> = ({
  temporaryModuleId,
  closeLessonForm,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [temporaryLessonId, setTemporaryLessonId] = React.useState("");
  const [lesson, setLesson] = React.useState({
    title: "",
    description: "",
    order: "1",
  });

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

  const onLessonSave = () => {
    dispatch(
      setLessonInfo({
        title: lesson.title,
        description: lesson.description,
        temporaryLessonId,
        temporaryModuleId,
        order: lesson.order,
      })
    );
    closeLessonForm();
  };

  const onLessonClose = () => {
    dispatch(
      deleteLesson({
        temporaryLessonId,
        temporaryModuleId,
      })
    );
    closeLessonForm();
  };

  const isSaveEnabled = !!lesson.title;

  return (
    <Styled.Form>
      <TextField
        variant="standard"
        label={t("lessonForm.title")}
        fullWidth
        value={lesson.title}
        onChange={(event) =>
          setLesson({ ...lesson, title: event.target.value })
        }
      />
      <TextField
        variant="standard"
        label={t("lessonForm.description")}
        fullWidth
        margin="dense"
        value={lesson.description}
        onChange={(event) =>
          setLesson({ ...lesson, description: event.target.value })
        }
      />
      <TextField
        label={t("general.order")}
        type="number"
        margin="dense"
        variant="standard"
        inputProps={{ min: 1 }}
        value={lesson.order}
        onChange={(event) =>
          setLesson({ ...lesson, order: event.target.value })
        }
      />
      <CreateLessonStep
        temporaryLessonId={temporaryLessonId}
        temporaryModuleId={temporaryModuleId}
      />
      <Styled.ActionButtons>
        <Styled.ActionButton
          onClick={onLessonSave}
          variant="contained"
          disabled={!isSaveEnabled}
        >
          <DoneIcon />
        </Styled.ActionButton>
        <Styled.ActionButton
          onClick={onLessonClose}
          variant="contained"
          color="secondary"
        >
          <CloseIcon />
        </Styled.ActionButton>
      </Styled.ActionButtons>
    </Styled.Form>
  );
};
