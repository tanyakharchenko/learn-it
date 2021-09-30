import { createSlice } from "@reduxjs/toolkit";
import { CourseState } from "./types";
import {
  setLessonStepAction,
  setModuleTemporaryIdAction,
  setLessonTemporaryIdAction,
  editLessonStepAction,
  setLessonInfoAction,
  deleteLessonAction,
  deleteModuleAction,
  setModuleInfoAction
} from "./actions";

const initialState: CourseState = {
  title: "",
  description: "",
  modules: [],
};

export const newCourseSlice = createSlice({
  name: "newCourse",
  initialState,
  reducers: {
    setLessonStep: setLessonStepAction,
    setModuleTemporaryId: setModuleTemporaryIdAction,
    setLessonTemporaryId: setLessonTemporaryIdAction,
    editLessonStep: editLessonStepAction,
    setLessonInfo: setLessonInfoAction,
    deleteLesson: deleteLessonAction,
    deleteModule: deleteModuleAction,
    setModuleInfo: setModuleInfoAction
  },
});

export const {
  setLessonStep,
  setModuleTemporaryId,
  setLessonTemporaryId,
  editLessonStep,
  setLessonInfo,
  deleteLesson,
  deleteModule,
  setModuleInfo
} = newCourseSlice.actions;

export default newCourseSlice.reducer;
