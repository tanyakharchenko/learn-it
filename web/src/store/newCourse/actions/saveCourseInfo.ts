import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, SaveCourseInfo } from "../types";

export const saveCourseInfoAction: CaseReducer<
  CourseState,
  PayloadAction<SaveCourseInfo>
> = (state, action) => {
  return state = {
    ...state,
    title: action.payload.title,
    description: action.payload.description,
    temporaryCourseId: action.payload.temporaryCourseId,
    currency: action.payload.currency,
    tariffs: action.payload.tariffs,
  };
};
