import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, SetModuleInfo } from "../types";

export const setModuleInfoAction: CaseReducer<
  CourseState,
  PayloadAction<SetModuleInfo>
> = (state, action) => {
  state.modules = state.modules.map((module) => {
    if (module.temporaryModuleId === action.payload.temporaryModuleId) {
        return {
            ...module,
            title: action.payload.title,
            description: action.payload.description,
            order: action.payload.order
        }
    }

    return module;
  });
};
