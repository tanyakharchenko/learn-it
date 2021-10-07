import { Tariff } from "./Course";
import { StepType, Currency } from "./general";

export interface NewLessonStep {
  title: string;
  description: string;
  stepType: StepType;
  file: File | null;
  temporaryStepId: string;
}

export interface NewLesson {
  title?: string;
  description?: string;
  order?: string;
  steps?: NewLessonStep[];
  temporaryLessonId?: string;
}

export interface NewModule {
  title?: string;
  description?: string;
  order?: string;
  lessons?: NewLesson[];
  temporaryModuleId?: string;
}

export interface NewCourse {
  title: string;
  description: string;
  tariffs: Tariff;
  currency: Currency;
  modules: NewModule[];
  temporaryCourseId: string;
}
