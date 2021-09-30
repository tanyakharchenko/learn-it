import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { StepType } from "types/course";
import DoneIcon from "components/icons/Done";
import { StepFields } from "../StepFields";
import * as Styled from "./NewStep.styled";

interface OwnProps {
  text: string;
  stepType: StepType;
  isCreationDisabled: boolean;
  saveStep: ({
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

export const NewStep: React.FC<OwnProps> = ({
  text,
  saveStep,
  stepType,
  isCreationDisabled,
}) => {
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
    setStepInfo({
      title: "",
      description: "",
    });
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
      stepType,
    });
    closeInputs();
  };

  const isSaveAvailable = stepInfo.title;

  if (isCreationDisabled) {
    return (
      <Styled.TextButtonBlock>
        <Styled.StepText>{text}</Styled.StepText>
      </Styled.TextButtonBlock>
    );
  }

  return (
    <>
      <Styled.TextButtonBlock>
        <Styled.StepText>{text}</Styled.StepText>
        {areInputsOpen ? (
          <>
            <Styled.StepCloseOpenButton onClick={closeInputs}>
              -
            </Styled.StepCloseOpenButton>
            <Styled.DoneStepButton
              onClick={onStepSave}
              variant="contained"
              disabled={!isSaveAvailable}
            >
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
          <StepFields
            titleValue={stepInfo.title}
            titleOnChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setStepInfo({ ...stepInfo, title: event.target.value })
            }
            descriptionValue={stepInfo.description}
            descriptionOnChange={(event) =>
              setStepInfo({ ...stepInfo, description: event.target.value })
            }
            fileRef={fileRef}
          />
          <Styled.StepText variant="body2">
            {t("lessonStep.changeItLater")}
          </Styled.StepText>
        </Styled.StepInputsWrapper>
      )}
    </>
  );
};
