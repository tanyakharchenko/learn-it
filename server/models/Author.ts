import { Course } from './Course';

export interface Author {
    id: string;
    name: string;
    avatar: string;
    courses: Course[]
}