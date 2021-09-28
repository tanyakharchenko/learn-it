import React from "react";
import IconButton from "components/ui/IconButton";
import CloseIcon from "components/icons/Close";
import DoneIcon from "components/icons/Done";
import { LessonStepFields } from "components/CreateLessonForm/LessonStepFields";
import * as Styled from "./EditStep.styled";

interface OwnProps {
  title: string;
  description: string;
  file: File | null;
  closeEditMode: () => void;
}

export const EditStep: React.FC<OwnProps> = ({
  title,
  description,
  file,
  closeEditMode,
}) => {
  const [newStepInfo, setNewStepInfo] = React.useState({
    title,
    description,
    file,
  });

  const fileRef = React.useRef(HTMLInputElement);

  const removeUploadedFile = () => {
    setNewStepInfo({ ...newStepInfo, file: null });
  };

  const cancelEdit = () => {
    setNewStepInfo({
      title,
      description,
      file,
    });
    closeEditMode();
  };

  const saveChanges = () => {
    const fileRefCurrent = (fileRef.current as unknown) as HTMLInputElement;
    const file =
      fileRefCurrent && fileRefCurrent.files ? fileRefCurrent.files[0] : null;

    closeEditMode();
  };

  return (
    <Styled.EditModeWrapper>
      <Styled.EditStepButtons>
        <IconButton onClick={saveChanges}>
          <DoneIcon color="primary" fontSize="small" />
        </IconButton>
        <IconButton onClick={cancelEdit}>
          <CloseIcon color="error" fontSize="small" />
        </IconButton>
      </Styled.EditStepButtons>
      <LessonStepFields
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
