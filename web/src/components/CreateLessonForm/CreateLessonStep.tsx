import React from "react";
import { useTranslation } from "react-i18next";
import { StepType } from "types/course";
import { setLessonStep, editLessonStep } from "store/newCourse/slice";
import { newCourseCurrentLessonSteps } from "store/newCourse/selectors";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { NewStep } from "./components/NewStep";
import { CreatedStep } from "./components/CreatedStep";

interface OwnProps {
  temporaryLessonId: string;
  temporaryModuleId: string;
}

const stepTypes = [StepType.Video, StepType.Notes, StepType.Homework];

export const CreateLessonStep: React.FC<OwnProps> = ({
  temporaryLessonId,
  temporaryModuleId,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isCreationDisabled, setIsCreationDisabled] = React.useState(false);

  const onEditStart = () => {
    setIsCreationDisabled(true);
  };

  const onEditEnd = () => {
    setIsCreationDisabled(false);
  };

  const lessonSteps = useAppSelector((state) =>
    newCourseCurrentLessonSteps(state, {
      currentLessonId: temporaryLessonId,
      currentModuleId: temporaryModuleId,
    })
  );

  const saveStep = ({
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
  }) => {
    dispatch(
      setLessonStep({
        title,
        description,
        file,
        temporaryModuleId,
        temporaryLessonId,
        temporaryStepId,
        stepType,
      })
    );
  };

  const saveEditedStep = ({
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
  }) => {
    dispatch(
      editLessonStep({
        title,
        description,
        file,
        temporaryModuleId,
        temporaryLessonId,
        temporaryStepId,
        stepType,
      })
    );
  };

  const mapTranslationToStep = {
    [StepType.Video]: t("general.video"),
    [StepType.Notes]: t("general.notes"),
    [StepType.Homework]: t("general.homework"),
  };

  return (
    <>
      {stepTypes.map((stepType) => {
        const createdCurrentStepType = lessonSteps?.filter(
          (step) => step.stepType === stepType
        );
        return (
          <React.Fragment key={stepType}>
            <NewStep
              key={stepType}
              saveStep={saveStep}
              text={mapTranslationToStep[stepType]}
              stepType={stepType}
              isCreationDisabled={isCreationDisabled}
            />
            {createdCurrentStepType?.map((step) => (
              <CreatedStep
                step={step}
                key={step.temporaryStepId}
                onEditStart={onEditStart}
                onEditEnd={onEditEnd}
                saveEditedStep={saveEditedStep}
              />
            ))}
          </React.Fragment>
        );
      })}
    </>
  );
};
