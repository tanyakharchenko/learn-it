import React from "react";
import { NewLessonStep } from "types/course";
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
}

export const CreatedStep: React.FC<OwnProps> = ({
  step,
  onEditStart,
  onEditEnd,
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

  return (
    <>
      {isEditMode ? (
        <EditStep
          title={step.title}
          description={step.description}
          file={step.file}
          closeEditMode={closeEditMode}
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
            <IconButton>
              <CloseIcon color="error" fontSize="small" />
            </IconButton>
          </Styled.CreatedStepButtons>
        </Styled.CreatedStep>
      )}
    </>
  );
};
