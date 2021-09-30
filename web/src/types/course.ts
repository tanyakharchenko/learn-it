interface LessonStep {
  title: string;
  description: string;
  stepType: StepType;
}

interface Lesson {
  title?: string;
  description?: string;
  order?: string;
}

interface Module {
  title?: string;
  description?: string;
}

interface Course {
  title: string;
  description: string;
}

export interface NewLessonStep extends LessonStep {
  file: File | null;
  temporaryStepId: string;
}

export interface NewLesson extends Lesson {
  steps?: NewLessonStep[];
  temporaryLessonId?: string;
}

interface NewModule extends Module {
  lessons?: NewLesson[];
  temporaryModuleId?: string;
}

export interface NewCourse extends Course {
  modules: NewModule[];
}

export enum StepType {
  Video, 
  Notes,
  Homework
}
