import { UserRoles } from "./general";
import { Course } from "./Course";

interface BasicUser {
  id: string;
  userName: string;
  fullName: string;
  avatarUrl: string;
  description: string;
  instagramLink: string;
  role: UserRoles;
}

export interface CourseProgress {
  currentModuleId: string;
  currentLessonId: string;
  currentStepId: string;
  percentage: number;
}

export interface CourseResults {
  progressPercentage: number;
  score: number;
}

export interface InProgressCourse {
  progress: CourseProgress;
  course: Course;
}

export interface PlannedCourse {
  course: Course;
}

export interface FinishedCourse {
  results: CourseResults;
  course: Course;
}

export interface RegularUser extends BasicUser {
  plannedCourses: PlannedCourse[];
  finishedCourses: FinishedCourse[];
  inProgressCourses: InProgressCourse[];
  isCoursesPublic: boolean;
}

export interface AuthorUser extends RegularUser {
  createdCourses: Course[]; // all courses, unpublished and moderated too
}
