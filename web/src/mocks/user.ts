import { course1Mock } from "./course";
import { PublicProfile } from "../types/PublicProfile";
import { UserRoles } from "../types/general";
import { AuthorByCourse } from "../types/Author";
import { RegularUser, AuthorUser } from "../types/User";

export const publicMockUser: PublicProfile = {
  id: "123123",
  userName: "te.kharchenko",
  fullName: "Татьяна Харченко",
  avatarUrl:
    "https://media-exp1.licdn.com/dms/image/C5603AQGHW18AM6krGA/profile-displayphoto-shrink_800_800/0/1594733738366?e=1639008000&v=beta&t=JM3VDwUFJpBjLWtU9vDHxvy2Zs31_SO5sbfcq36TOZ8",
  description:
    "Создатель платформы LearnIt, и лучших курсов по программированию",
  instagramLink: "https://www.instagram.com/t.anya.kharchenko/",
  createdCourses: [course1Mock],
};

export const mockRegularUser: RegularUser = {
  id: "123123",
  userName: "te.kharchenko",
  fullName: "Татьяна Харченко",
  avatarUrl:
    "https://media-exp1.licdn.com/dms/image/C5603AQGHW18AM6krGA/profile-displayphoto-shrink_800_800/0/1594733738366?e=1639008000&v=beta&t=JM3VDwUFJpBjLWtU9vDHxvy2Zs31_SO5sbfcq36TOZ8",
  description:
    "Создатель платформы LearnIt, и лучших курсов по программированию",
  instagramLink: "https://www.instagram.com/t.anya.kharchenko/",
  role: UserRoles.Regular,
  plannedCourses: [
    {
      course: course1Mock,
    },
  ],
  finishedCourses: [
    {
      course: course1Mock,
      results: {
        score: 5,
        progressPercentage: 100,
      },
    },
  ],
  inProgressCourses: [
    {
      course: course1Mock,
      progress: {
        currentLessonId: "00000000001",
        currentModuleId: "0000000001",
        currentStepId: "000000000002",
        percentage: 20,
      },
    },
    {
      course: course1Mock,
      progress: {
        currentLessonId: "00000000001",
        currentModuleId: "0000000001",
        currentStepId: "000000000002",
        percentage: 20,
      },
    },
  ],
  isCoursesPublic: false,
};

export const mockAuthorUser: AuthorUser = {
  id: "123123",
  userName: "te.kharchenko",
  fullName: "Татьяна Харченко",
  avatarUrl:
    "https://media-exp1.licdn.com/dms/image/C5603AQGHW18AM6krGA/profile-displayphoto-shrink_800_800/0/1594733738366?e=1639008000&v=beta&t=JM3VDwUFJpBjLWtU9vDHxvy2Zs31_SO5sbfcq36TOZ8",
  description:
    "Создатель платформы LearnIt, и лучших курсов по программированию",
  instagramLink: "https://www.instagram.com/t.anya.kharchenko/",
  role: UserRoles.Author,
  plannedCourses: [
    {
      course: course1Mock,
    },
  ],
  finishedCourses: [
    {
      course: course1Mock,
      results: {
        score: 5,
        progressPercentage: 100,
      },
    },
  ],
  inProgressCourses: [
    {
      course: course1Mock,
      progress: {
        currentLessonId: "00000000001",
        currentModuleId: "0000000001",
        currentStepId: "000000000002",
        percentage: 20,
      },
    },
    {
      course: course1Mock,
      progress: {
        currentLessonId: "00000000006",
        currentModuleId: "0000000003",
        currentStepId: "000000000012",
        percentage: 80,
      },
    },
  ],
  isCoursesPublic: false,
  createdCourses: [course1Mock],
};

export const authorByCourseMock: AuthorByCourse = {
  id: "123123",
  fullName: "Татьяна Харченко",
  avatarUrl:
    "https://media-exp1.licdn.com/dms/image/C5603AQGHW18AM6krGA/profile-displayphoto-shrink_800_800/0/1594733738366?e=1639008000&v=beta&t=JM3VDwUFJpBjLWtU9vDHxvy2Zs31_SO5sbfcq36TOZ8",
  coursesSelfDescription:
    "У меня много опыта в разработке, и своим примером могу показать, что научиться можно чему угодно и другие всякие красивые слова",
};
