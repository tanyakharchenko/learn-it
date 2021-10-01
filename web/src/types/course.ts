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
  order?: string;
}

interface Course {
  title: string;
  description: string;
  price: {
    withDiscount: string;
    withoutDiscount: string;
    currency: Currency;
  }
}

export interface NewLessonStep extends LessonStep {
  file: File | null;
  temporaryStepId: string;
}

export interface NewLesson extends Lesson {
  steps?: NewLessonStep[];
  temporaryLessonId?: string;
}

export interface NewModule extends Module {
  lessons?: NewLesson[];
  temporaryModuleId?: string;
}

export interface NewCourse extends Course {
  modules: NewModule[];
  temporaryCourseId: string;
}

export enum StepType {
  Video, 
  Notes,
  Homework
}

export enum Currency {
  Uah = 'UAH',
  Usd = 'USD',
  Rub = 'RUB'
}
