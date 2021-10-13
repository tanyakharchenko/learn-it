export interface AuthorByCourse { // предполагаю, что запрос будет такой /authors/${userId}/${courseId}
    id: string;
    fullName: string;
    avatarUrl: string;
    coursesSelfDescription: string;
}