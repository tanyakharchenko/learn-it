import { Lesson } from './Lesson';
import { Test } from './Test';

export interface Module {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
    ending: Lesson;
    test: Test;
}