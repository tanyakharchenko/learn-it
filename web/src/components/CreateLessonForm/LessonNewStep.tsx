import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import TextField from "components/ui/TextField";
import DoneIcon from "components/icons/Done";
import * as Styled from "./CreateLessonForm.styled";

interface OwnProps {
  text: string;
  saveStep: ({
    title,
    description,
    file,
    temporaryStepId,
  }: {
    title: string;
    description: string;
    file: File | null;
    temporaryStepId: string;
  }) => void;
}

export const LessonNewStep: React.FC<OwnProps> = ({ text, saveStep }) => {
  const { t } = useTranslation();
  const [areInputsOpen, setAreInputsOpen] = React.useState(false);
  const [stepInfo, setStepInfo] = React.useState({
    title: "",
    description: "",
  });

  const fileRef = React.useRef(HTMLInputElement);

  const openInputs = () => {
    setAreInputsOpen(true);
  };

  const closeInputs = () => {
    setAreInputsOpen(false);
  };

  const onStepSave = () => {
    const fileRefCurrent = (fileRef.current as unknown) as HTMLInputElement;
    const file =
      fileRefCurrent && fileRefCurrent.files ? fileRefCurrent.files[0] : null;
    saveStep({
      title: stepInfo.title,
      description: stepInfo.description,
      file,
      temporaryStepId: uuidv4(),
    });
  };

  return (
    <>
      <Styled.TextButtonBlock>
        <Styled.StepText>{text}</Styled.StepText>
        {areInputsOpen ? (
          <>
            <Styled.StepCloseOpenButton onClick={closeInputs}>
              -
            </Styled.StepCloseOpenButton>
            <Styled.DoneStepButton onClick={onStepSave} variant="contained">
              <DoneIcon />
            </Styled.DoneStepButton>
          </>
        ) : (
          <Styled.StepCloseOpenButton onClick={openInputs}>
            +
          </Styled.StepCloseOpenButton>
        )}
      </Styled.TextButtonBlock>
      {areInputsOpen && (
        <Styled.StepInputsWrapper>
          <TextField
            label={t("lessonStep.title")}
            fullWidth
            margin="dense"
            size="small"
            value={stepInfo.title}
            onChange={(event) => {
              setStepInfo({ ...stepInfo, title: event.target.value });
            }}
          />
          <TextField
            label={t("lessonStep.description")}
            fullWidth
            margin="dense"
            size="small"
            value={stepInfo.description}
            onChange={(event) => {
              setStepInfo({ ...stepInfo, description: event.target.value });
            }}
          />
          <TextField
            fullWidth
            margin="dense"
            size="small"
            type="file"
            inputRef={fileRef}
          />
          <Styled.StepText variant="body2">
            {t("lessonStep.changeItLater")}
          </Styled.StepText>
        </Styled.StepInputsWrapper>
      )}
    </>
  );
};
