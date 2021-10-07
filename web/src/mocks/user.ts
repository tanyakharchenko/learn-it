export interface PublicProfile {
    id: string;
    userName: string;
    fullName: string;
    avatarUrl: string;
    description: string;
    createdCourses: [];
    coursesInProgress: [];
    passedCourses: [],
    subscribedCourses: [],
    education?: any;
}

export const publicMockUser = {
    id: '123123',
    userName: 'te.kharchenko',
    fullName: 'Татьяна Харченко',
    avatarUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQGHW18AM6krGA/profile-displayphoto-shrink_800_800/0/1594733738366?e=1639008000&v=beta&t=JM3VDwUFJpBjLWtU9vDHxvy2Zs31_SO5sbfcq36TOZ8',
    description: 'Создатель платформы LearnIt, и лучших курсов по программированию',
    instagramLink: 'https://www.instagram.com/t.anya.kharchenko/'
}