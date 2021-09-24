import { LessonStep } from './LessonStep';

export interface Lesson {
    id: string;
    title: string;
    description: string;
    steps: LessonStep[]
}