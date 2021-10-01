import React from "react";
import { NewLessonStep, StepType } from "types/course";
import TextField from "components/ui/TextField";
import IconButton from "components/ui/IconButton";
import CloseIcon from "components/icons/Close";
import Pencil from "components/icons/Pencil";
import { EditStep } from "../EditStep";
import * as Styled from "./CreatedStep.styled";

interface OwnProps {
  step: NewLessonStep;
  onEditStart: () => void;
  onEditEnd: () => void;
  deleteStep: (temporaryStepId: string) => void;
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

export const CreatedStep: React.FC<OwnProps> = ({
  step,
  onEditStart,
  onEditEnd,
  saveEditedStep,
  deleteStep
}) => {
  const [isEditMode, setIsEditMode] = React.useState(false);

  const editStep = () => {
    onEditStart();
    setIsEditMode(true);
  };

  const closeEditMode = () => {
    onEditEnd();
    setIsEditMode(false);
  };

  const onStepDelete = () => {
    deleteStep(step.temporaryStepId);
    closeEditMode();
  };

  return (
    <>
      {isEditMode ? (
        <EditStep
          step={step}
          closeEditMode={closeEditMode}
          saveEditedStep={saveEditedStep}
        />
      ) : (
        <Styled.CreatedStep>
          <TextField
            sx={{ marginTop: "0.5rem" }}
            value={step.title}
            disabled
            size="small"
          />
          <Styled.CreatedStepButtons>
            <IconButton onClick={editStep}>
              <Pencil color="primary" fontSize="small" />
            </IconButton>
            <IconButton onClick={onStepDelete}>
              <CloseIcon color="secondary" fontSize="small" />
            </IconButton>
          </Styled.CreatedStepButtons>
        </Styled.CreatedStep>
      )}
    </>
  );
};
