import { NewCourse, NewLessonStep } from "../../types/course";

export interface CourseState extends NewCourse {}

export interface NewLessonStepPayload extends NewLessonStep {
  temporaryModuleId: string;
  temporaryLessonId: string;
}

export interface SetModuleTemporaryIdPayload {
  temporaryModuleId: string;
}

export interface SetLessonTemporaryIdPayload {
  temporaryModuleId: string;
  temporaryLessonId: string;
}

export interface SetLessonInfo {
  title: string;
  description: string;
  order: string;
  temporaryModuleId: string;
  temporaryLessonId: string;
}

export interface DeleteLessonPayload {
  temporaryLessonId: string;
  temporaryModuleId: string;
}

export interface DeleteModulePayload {
  temporaryModuleId: string;
}

export interface DeleteLessonStepPayload {
  temporaryModuleId: string;
  temporaryLessonId: string;
  temporaryStepId: string;
}

export interface SetModuleInfo {
  title: string;
  description: string;
  order: string;
  temporaryModuleId: string;
  file: File | null;
}