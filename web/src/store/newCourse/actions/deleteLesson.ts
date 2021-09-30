import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, DeleteLessonPayload } from "../types";

export const deleteLessonAction: CaseReducer<
  CourseState,
  PayloadAction<DeleteLessonPayload>
> = (state, action) => {
  state.modules = state.modules.map((module) => {
    if (module.temporaryModuleId === action.payload.temporaryModuleId) {
      return {
        ...module,
        lessons: module.lessons?.filter((lesson) => lesson.temporaryLessonId !== action.payload.temporaryLessonId),
      };
    }

    return module;
  });
};
