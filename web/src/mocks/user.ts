import { course1Mock } from './course';
import { PublicProfile } from '../types/PublicProfile';
import { UserRoles } from '../types/general';
import { AuthorByCourse } from '../types/Author';
import { RegularUser, AuthorUser } from '../types/User';

export const publicMockUser: PublicProfile = {
    id: '123123',
    userName: 'te.kharchenko',
    fullName: 'Татьяна Харченко',
    avatarUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQGHW18AM6krGA/profile-displayphoto-shrink_800_800/0/1594733738366?e=1639008000&v=beta&t=JM3VDwUFJpBjLWtU9vDHxvy2Zs31_SO5sbfcq36TOZ8',
    description: 'Создатель платформы LearnIt, и лучших курсов по программированию',
    instagramLink: 'https://www.instagram.com/t.anya.kharchenko/',
    createdCourses: [course1Mock]
};

export const mockRegularUser: RegularUser = {
    id: '123123',
    userName: 'te.kharchenko',
    fullName: 'Татьяна Харченко',
    avatarUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQGHW18AM6krGA/profile-displayphoto-shrink_800_800/0/1594733738366?e=1639008000&v=beta&t=JM3VDwUFJpBjLWtU9vDHxvy2Zs31_SO5sbfcq36TOZ8',
    description: 'Создатель платформы LearnIt, и лучших курсов по программированию',
    instagramLink: 'https://www.instagram.com/t.anya.kharchenko/',
    role: UserRoles.Regular,
    plannedCourses: [course1Mock],
    finishedCourses: [course1Mock],
    inProgressCourses: [course1Mock],
    isCoursesPublic: false
};

export const mockAuthorUser: AuthorUser = {
    id: '123123',
    userName: 'te.kharchenko',
    fullName: 'Татьяна Харченко',
    avatarUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQGHW18AM6krGA/profile-displayphoto-shrink_800_800/0/1594733738366?e=1639008000&v=beta&t=JM3VDwUFJpBjLWtU9vDHxvy2Zs31_SO5sbfcq36TOZ8',
    description: 'Создатель платформы LearnIt, и лучших курсов по программированию',
    instagramLink: 'https://www.instagram.com/t.anya.kharchenko/',
    role: UserRoles.Author,
    plannedCourses: [course1Mock],
    finishedCourses: [course1Mock],
    inProgressCourses: [course1Mock],
    isCoursesPublic: false,
    createdCourses: [course1Mock]
};

export const authorByCourseMock: AuthorByCourse = {
    id: '123123',
    fullName: 'Татьяна Харченко',
    avatarUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQGHW18AM6krGA/profile-displayphoto-shrink_800_800/0/1594733738366?e=1639008000&v=beta&t=JM3VDwUFJpBjLWtU9vDHxvy2Zs31_SO5sbfcq36TOZ8',
    coursesSelfDescription: 'У меня много опыта в разработке, и своим примером могу показать, что научиться можно чему угодно и другие всякие красивые слова'
};