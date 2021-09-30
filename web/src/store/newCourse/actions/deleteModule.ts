import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, DeleteModulePayload } from "../types";

export const deleteModuleAction: CaseReducer<
  CourseState,
  PayloadAction<DeleteModulePayload>
> = (state, action) => {
  state.modules = state.modules.filter(
    (module) => module.temporaryModuleId !== action.payload.temporaryModuleId
  );
};
