export enum StepType {
  Video,
  Notes,
  Homework,
}

export enum Currency {
  Uah = "UAH",
  Usd = "USD",
  Rub = "RUB",
}

export enum UserRoles {
  Regular, // user that can observe courses
  Author, // user that can observe courses + create courses
  Moderator // user that can moderate other courses, observe and create courses
}
