import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, NewLessonStepPayload } from '../types';

export const setLessonStepAction: CaseReducer<CourseState, PayloadAction<NewLessonStepPayload>> = (
  state,
  action
) => {
  const { temporaryModuleId, temporaryLessonId, ...step } = action.payload;

  state.modules = state.modules.map((module) => {
    if (module.temporaryModuleId === temporaryModuleId) {
      return {
        ...module,
        lessons: module.lessons?.map((lesson) => {
          if (lesson.temporaryLessonId === temporaryLessonId) {
            return {
              ...lesson,
              steps: lesson.steps ? [...lesson.steps, step] : [step],
            };
          }
          return lesson;
        }),
      };
    }

    return module;
  });
};
