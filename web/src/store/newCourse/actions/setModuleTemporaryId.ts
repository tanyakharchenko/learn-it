import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, SetModuleTemporaryIdPayload } from "../types";

export const setModuleTemporaryIdAction: CaseReducer<
  CourseState,
  PayloadAction<SetModuleTemporaryIdPayload>
> = (state, action) => {
  const isCurrentModuleAlreadyExist = state.modules.some(
    (module) => module.temporaryModuleId === action.payload.temporaryModuleId
  );

  if (isCurrentModuleAlreadyExist) {
    return;
  }

  state.modules.push({
    temporaryModuleId: action.payload.temporaryModuleId,
  });
};
