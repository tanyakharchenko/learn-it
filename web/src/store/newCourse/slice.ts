import { createSlice } from "@reduxjs/toolkit";
import { Currency } from "types/general";
import { CourseState } from "./types";
import {
  setLessonStepAction,
  setModuleTemporaryIdAction,
  setLessonTemporaryIdAction,
  editLessonStepAction,
  setLessonInfoAction,
  deleteLessonAction,
  deleteModuleAction,
  setModuleInfoAction,
  deleteLessonStepAction,
  saveCourseInfoAction
} from "./actions";

const initialState: CourseState = {
  title: "",
  description: "",
  modules: [],
  temporaryCourseId: "",
  currency: Currency.Uah,
  tariffs: []
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
    setModuleInfo: setModuleInfoAction,
    deleteLessonStep: deleteLessonStepAction,
    saveCourseInfo: saveCourseInfoAction
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
  setModuleInfo,
  deleteLessonStep,
  saveCourseInfo
} = newCourseSlice.actions;

export default newCourseSlice.reducer;
