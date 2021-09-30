import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, SetLessonInfo } from "../types";

export const setLessonInfoAction: CaseReducer<
  CourseState,
  PayloadAction<SetLessonInfo>
> = (state, action) => {
  state.modules = state.modules.map((module) => {
    if (module.temporaryModuleId === action.payload.temporaryModuleId) {
      return {
        ...module,
        lessons: module.lessons?.map((lesson) => {
              if (
                lesson.temporaryLessonId === action.payload.temporaryLessonId
              ) {
                return {
                  ...lesson,
                  title: action.payload.title,
                  description: action.payload.description,
                  order: action.payload.order
                };
              }

              return lesson;
            }),
      };
    }

    return module;
  });
};
