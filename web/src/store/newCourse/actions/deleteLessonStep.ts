import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, DeleteLessonStepPayload } from "../types";

export const deleteLessonStepAction: CaseReducer<
  CourseState,
  PayloadAction<DeleteLessonStepPayload>
> = (state, action) => {
  state.modules = state.modules.map((module) => {
    if (module.temporaryModuleId === action.payload.temporaryModuleId) {
      return {
        ...module,
        lessons: module.lessons?.map((lesson) => {
          if (lesson.temporaryLessonId === action.payload.temporaryLessonId) {
            return {
              ...lesson,
              steps: lesson.steps?.filter(
                (step) =>
                  step.temporaryStepId !== action.payload.temporaryStepId
              ),
            };
          }
          return lesson;
        }),
      };
    }

    return module;
  });
};
