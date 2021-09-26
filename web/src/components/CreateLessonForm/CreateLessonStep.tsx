import React from 'react';
import { useTranslation } from "react-i18next";
import { setLessonStep } from "store/newCourse/slice";
import { useAppDispatch } from "store/hooks";
import { LessonNewStep } from "./LessonNewStep";

interface OwnProps {
    temporaryLessonId: string;
    temporaryModuleId: string;
}

export const CreateLessonStep: React.FC<OwnProps> = ({temporaryLessonId, temporaryModuleId}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const saveStep = ({
    title,
    description,
    file,
    temporaryStepId,
  }: {
    title: string;
    description: string;
    file: File | null;
    temporaryStepId: string;
  }) => {
    dispatch(setLessonStep({
     title,
     description,
     file,
     temporaryModuleId,
     temporaryLessonId,
     temporaryStepId 
    }))
  };

  return (
    <>
      <LessonNewStep saveStep={saveStep} text={t("general.video")} />
      <LessonNewStep saveStep={saveStep} text={t("general.notes")} />
      <LessonNewStep saveStep={saveStep} text={t("general.homework")} />
    </>
  );
};
