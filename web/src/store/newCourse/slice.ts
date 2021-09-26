import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewCourse, NewLessonStep } from "../../types/course";

interface CourseState extends NewCourse {}

const initialState: CourseState = {
  title: "",
  description: "",
  modules: [],
};

export const newCourseSlice = createSlice({
  name: "newCourse",
  initialState,
  reducers: {
    setLessonStep: (state, action: PayloadAction<NewLessonStepPayload>) => {
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
    },
    setModuleTemporaryId: (
      state,
      action: PayloadAction<SetModuleTemporaryIdPayload>
    ) => {
      const isCurrentModuleAlreadyExist = state.modules.some(
        (module) =>
          module.temporaryModuleId === action.payload.temporaryModuleId
      );
      if (isCurrentModuleAlreadyExist) {
        return;
      }

      state.modules.push({
        temporaryModuleId: action.payload.temporaryModuleId,
      });
    },
    setLessonTemporaryId: (
      state,
      action: PayloadAction<SetLessonTemporaryIdPayload>
    ) => {
      state.modules = state.modules.map((module) => {
        if (module.temporaryModuleId === action.payload.temporaryModuleId) {
          return {
            ...module,
            lessons: module.lessons ? module.lessons.map((lesson) => {
              if (lesson.temporaryLessonId === action.payload.temporaryLessonId) {
                return lesson;
              }

              return {
                temporaryLessonId: action.payload.temporaryLessonId
              }
            }) : [{
              temporaryLessonId: action.payload.temporaryLessonId
            }]
          }
        }

        return module;
      });
    },
  },
});

export const { setLessonStep, setModuleTemporaryId, setLessonTemporaryId } = newCourseSlice.actions;

interface NewLessonStepPayload extends NewLessonStep {
  temporaryModuleId: string;
  temporaryLessonId: string;
}

interface SetModuleTemporaryIdPayload {
  temporaryModuleId: string;
}

interface SetLessonTemporaryIdPayload {
  temporaryModuleId: string;
  temporaryLessonId: string;
}

export default newCourseSlice.reducer;
