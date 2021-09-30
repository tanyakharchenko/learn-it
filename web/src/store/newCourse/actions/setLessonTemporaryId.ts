import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, SetLessonTemporaryIdPayload } from "../types";

export const setLessonTemporaryIdAction: CaseReducer<
  CourseState,
  PayloadAction<SetLessonTemporaryIdPayload>
> = (state, action) => {
  state.modules = state.modules.map((module) => {
    if (module.temporaryModuleId === action.payload.temporaryModuleId) {
      return {
        ...module,
        lessons: module.lessons
          ? [
              ...module.lessons,
              {
                temporaryLessonId: action.payload.temporaryLessonId,
              },
            ]
          : [
              {
                temporaryLessonId: action.payload.temporaryLessonId,
              },
            ],
      };
    }

    return module;
  });
};
