import React from "react";
import IconButton from "components/ui/IconButton";
import CloseIcon from "components/icons/Close";
import DoneIcon from "components/icons/Done";
import { StepType, NewLessonStep } from "types/course";
import { StepFields } from "../StepFields";
import * as Styled from "./EditStep.styled";

interface OwnProps {
  step: NewLessonStep;
  closeEditMode: () => void;
  saveEditedStep: ({
    title,
    description,
    file,
    temporaryStepId,
    stepType,
  }: {
    title: string;
    description: string;
    file: File | null;
    temporaryStepId: string;
    stepType: StepType;
  }) => void;
}

export const EditStep: React.FC<OwnProps> = ({
  step,
  closeEditMode,
  saveEditedStep,
}) => {
  const [newStepInfo, setNewStepInfo] = React.useState({
    title: step.title,
    description: step.description,
    file: step.file,
  });

  const fileRef = React.useRef(HTMLInputElement);

  const removeUploadedFile = () => {
    setNewStepInfo({ ...newStepInfo, file: null });
  };

  const cancelEdit = () => {
    setNewStepInfo({
      title: step.title,
      description: step.description,
      file: step.file,
    });
    closeEditMode();
  };

  const saveChanges = () => {
    const fileRefCurrent = (fileRef.current as unknown) as HTMLInputElement;
    const file =
      newStepInfo.file ||
      (fileRefCurrent && fileRefCurrent.files ? fileRefCurrent.files[0] : null);

    saveEditedStep({
      title: newStepInfo.title,
      description: newStepInfo.description,
      file,
      temporaryStepId: step.temporaryStepId,
      stepType: step.stepType,
    });

    closeEditMode();
  };

  return (
    <Styled.EditModeWrapper>
      <Styled.EditStepButtons>
        <IconButton onClick={saveChanges}>
          <DoneIcon color="primary" fontSize="small" />
        </IconButton>
        <IconButton onClick={cancelEdit}>
          <CloseIcon color="secondary" fontSize="small" />
        </IconButton>
      </Styled.EditStepButtons>
      <StepFields
        titleValue={newStepInfo.title}
        titleOnChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewStepInfo({ ...newStepInfo, title: event.target.value })
        }
        descriptionValue={newStepInfo.description}
        descriptionOnChange={(event) =>
          setNewStepInfo({
            ...newStepInfo,
            description: event.target.value,
          })
        }
        fileRef={fileRef}
        fileUploaded={newStepInfo.file}
        removeUploadedFile={removeUploadedFile}
      />
    </Styled.EditModeWrapper>
  );
};
