import { StepType, Currency } from "./general";

export interface Tariff {
    title: string;
    description: string;
    fullPrice: string;
    priceWithDiscount: string;
  }

export enum CourseStatus {
    Unknown,
    AvailableSoon,
    AvailableAlways,
    RegistrationOpen,
    InProgress,
}

export interface Step {
    id: string;
    title: string;
    description: string;
    stepType: StepType;
    file: string;
    order?: number;
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    steps: Step[];
    order: number;
}

export interface Module {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
    order: number;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    modules: Module[];
    status: CourseStatus;
    startDate: string;
    tariffs: Tariff[];
    currency: Currency;
}