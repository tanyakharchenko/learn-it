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
    price: {
        withDiscount: action.payload.priceWithDiscount,
        withoutDiscount: action.payload.price,
        currency: action.payload.currency
    }
  };
};
