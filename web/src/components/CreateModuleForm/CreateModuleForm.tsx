import React from "react";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setModuleTemporaryId } from "store/newCourse/slice";
import { newCourseCurrentModuleLessons } from "store/newCourse/selectors";
import TextField from "components/ui/TextField";
import Container from "components/ui/Container";
import IconButton from "components/ui/IconButton";
import UploadedFile from "components/ui/UploadedFile";
import PlusIcon from "components/icons/Plus";
import CloseIcon from "components/icons/Close";
import DoneIcon from "components/icons/Done";
import { CreateLessonForm } from "components/CreateLessonForm";
import { LessonCard } from "components/LessonCard";
import * as Styled from "./CreateModuleForm.styled";

interface OwnProps {
  temporaryCourseId: string;
}

export const CreateModuleForm: React.FC<OwnProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const [temporaryModuleId, setTemporaryModuleId] = React.useState("");
  const [isCreateLessonOpen, setIsCreateLessonOpen] = React.useState(false);
  const [moduleInfo, setModuleInfo] = React.useState({
    title: "",
    description: "",
    order: "1",
    file: null as File | null,
  });

  const fileRef = React.useRef(HTMLInputElement);
  const [inputKey, setInputKey] = React.useState("1");

  const lessons = useAppSelector((state) =>
    newCourseCurrentModuleLessons(state, temporaryModuleId)
  );

  React.useEffect(() => {
    const temporaryId = uuidv4();
    dispatch(setModuleTemporaryId({ temporaryModuleId: temporaryId }));
    setTemporaryModuleId(temporaryId);
  }, [dispatch]);

  const openLessonForm = () => {
    setIsCreateLessonOpen(true);
  };

  const closeLessonForm = () => {
    setIsCreateLessonOpen(false);
  };

  const removeUploadedFile = () => {
    setInputKey(Math.random().toString());
    setModuleInfo({
      ...moduleInfo,
      file: null,
    });
  };

  return (
    <Styled.FormWrapper>
      <Container>
        <Styled.Form>
          <TextField
            variant="standard"
            label={t("moduleForm.title")}
            fullWidth
            margin="normal"
            onChange={(event) =>
              setModuleInfo({ ...moduleInfo, title: event.target.value })
            }
          />
          <TextField
            variant="standard"
            label={t("moduleForm.description")}
            fullWidth
            margin="normal"
            onChange={(event) =>
              setModuleInfo({ ...moduleInfo, description: event.target.value })
            }
          />
          <TextField
            label={t("general.order")}
            type="number"
            margin="dense"
            variant="standard"
            inputProps={{ min: 1 }}
            onChange={(event) =>
              setModuleInfo({ ...moduleInfo, order: event.target.value })
            }
          />
          <Styled.TextButtonBlock>
            <Styled.Text variant="body1">{t("moduleForm.lessons")}</Styled.Text>
            <IconButton onClick={openLessonForm} disabled={isCreateLessonOpen}>
              <PlusIcon sx={{ color: theme.colors.blue }} />
            </IconButton>
          </Styled.TextButtonBlock>
          {isCreateLessonOpen && (
            <CreateLessonForm
              temporaryModuleId={temporaryModuleId}
              closeLessonForm={closeLessonForm}
            />
          )}
          {lessons?.map((lesson) => (
            <LessonCard lesson={lesson} key={lesson.temporaryLessonId} />
          ))}
          <Styled.TestBlock>
            <Styled.Text variant="body1">{t("general.test")}</Styled.Text>
            <TextField
              type="file"
              margin="dense"
              variant="standard"
              onChange={(event) =>
                // @ts-ignore
                setModuleInfo({ ...moduleInfo, file: event.target.files[0] })
              }
              inputRef={fileRef}
              key={inputKey}
            />
            {moduleInfo.file && (
              <UploadedFile
                fileName={moduleInfo.file?.name}
                onRemove={removeUploadedFile}
              />
            )}
            <Styled.Text variant="body2">
              {t("moduleForm.changeTestLater")}
            </Styled.Text>
          </Styled.TestBlock>
          <Styled.ActionButtons>
            <Styled.ActionButton
              onClick={() => {}}
              variant="contained"
              disabled={false}
            >
              Сохранить
              <DoneIcon />
            </Styled.ActionButton>
            <Styled.ActionButton
              onClick={() => {}}
              variant="contained"
              color="secondary"
            >
              Отменить
              <CloseIcon />
            </Styled.ActionButton>
          </Styled.ActionButtons>
        </Styled.Form>
      </Container>
    </Styled.FormWrapper>
  );
};
