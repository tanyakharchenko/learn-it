import { Course } from './Course';

export interface PublicProfile {
    id: string;
    userName: string;
    fullName: string;
    avatarUrl: string;
    description: string;
    instagramLink: string;
    createdCourses: Course[]; // only published
}