import { UserRoles } from './general';
import { Course } from './Course';

interface BasicUser {
    id: string;
    userName: string;
    fullName: string;
    avatarUrl: string;
    description: string;
    instagramLink:  string;
    role: UserRoles,
}

export interface RegularUser extends BasicUser {
    plannedCourses: Course[];
    finishedCourses: Course[];
    inProgressCourses: Course[];
    isCoursesPublic: boolean;
}

export interface AuthorUser extends RegularUser {
    createdCourses: Course[]; // all courses, unpublished and moderated too
}

