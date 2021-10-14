import { CourseStatus, Course, PublishedStatus } from "../types/Course";
import { Currency, StepType } from "../types/general";

export const course1Mock: Course = {
  id: "000000001",
  title: "HTML and CSS Basics",
  description:
    "Курс предназначен для тех кто хочет познакомиться с миром веб-разработки. Мы начнем с самых основ построения веб страницы и создадим свой первый проект",
  modules: [
    {
      id: "0000000001",
      title: "Введение в веб",
      description:
        'В данном небольшом модуле вы узнаете про то для чего используются HTML, CSS и JS, принцип работы "клиент-сервер" и познакомитесь с инструментами для разработки',
      order: 1,
      lessons: [
        {
          id: "00000000001",
          title: "Введение в веб",
          description:
            "Данное занятие включает в себя видео и заметки к презентации, для лучшего усвоения материала нужно детально со всем ознакомиться :)",
          order: 1,
          steps: [
            {
              id: "000000000001",
              title: "Введение в веб: видео",
              description: "",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
            {
              id: "000000000002",
              title: "Введение в веб: заметки",
              description: "",
              stepType: StepType.Notes,
              file: "notefilehere.pdf",
            },
          ],
        },
      ],
    },
    {
      id: "0000000002",
      title: "Работа с Git",
      description:
        "До того как начать писать код вы научитесь работать с системами контроля версий для того, чтобы было легче отслеживать изменения, сделанные в коде, работать в командах и многое другое",
      order: 2,
      lessons: [
        {
          id: "00000000002",
          title: "Работа с Git",
          description:
            "Данное занятие включает в себя видео и заметки к презентации, для лучшего усвоения материала нужно детально со всем ознакомиться :)",
          order: 1,
          steps: [
            {
              id: "000000000003",
              title: "Работа с Git: видео",
              description:
                "В данном видео вы узнаете про то, что такое системы контроля версий, создатите свой первый репозиторий и узнаете что значит сделать коммит",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
            {
              id: "000000000004",
              title: "Введение в веб: заметки",
              description: "",
              stepType: StepType.Notes,
              file: "notefilehere.pdf",
            },
          ],
        },
      ],
    },
    {
      id: "0000000033",
      title: "Основы HTML",
      description:
        "В данном модуле вы познакомитесь с языком для написания разметки веб-страниц",
      order: 3,
      lessons: [
        {
          id: "00000000003",
          title: "Базовые принципы верстки",
          description:
            "На этом занятии вы изучите базовые принципы верстки, узнаете что такое теги и атрибуты, а также что такое семантический код и зачем это нужно",
          order: 1,
          steps: [
            {
              id: "000000000005",
              title: "Базовые принципы верстки: видео",
              description: "",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
            {
              id: "000000000006",
              title: "Базовые принципы верстки: заметки",
              description: "",
              stepType: StepType.Notes,
              file: "notefilehere.pdf",
            },
          ],
        },
        {
          id: "00000000004",
          title: "Теги, атрибуты, ссылки и многое другое",
          description:
            "На занятии подробнее остановимся на том как работать с тегами и атрибутами, создавать ссылки, текст, формы, таблицы и многое другое",
          order: 2,
          steps: [
            {
              id: "000000000007",
              title: "Основы HTML: видео",
              description: "",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
            {
              id: "000000000008",
              title: "Основы HTML: заметки",
              description: "",
              stepType: StepType.Notes,
              file: "notefilehere.pdf",
            },
          ],
        },
        {
          id: "00000000005",
          title: "Подводим итоги. А что на интервью?",
          description:
            "На данном занятии мы повторим то, что было изучено в первых занятиях и обсудим какие вопросы чаще всего можно встретить на интервью",
          order: 3,
          steps: [
            {
              id: "000000000009",
              title: "Итоги",
              description: "",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
          ],
        },
      ],
    },
    {
      id: "0000000003",
      title: "Основы CSS",
      description:
        "В данном модуле вы узнаете, что такое CSS, и создадите свою первую веб-страничку",
      order: 4,
      lessons: [
        {
          id: "00000000006",
          title: "Что такое CSS?",
          description:
            "На занятии мы рассмотрим базовые принципы написания стилей, как CSS добавляется на страницу и какие бывают единицы измерения",
          order: 1,
          steps: [
            {
              id: "000000000011",
              title: "Что такое CSS: видео",
              description: "",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
            {
              id: "000000000012",
              title: "Что такое CSS: заметки",
              description: "",
              stepType: StepType.Notes,
              file: "notefilehere.pdf",
            },
          ],
        },
        {
          id: "00000000007",
          title: "Блочная модель и селекторы",
          description:
            "Учимся управлять блочной моделью элементов, работаем со свойством position и display, узнаем про специфичность селекторов",
          order: 2,
          steps: [
            {
              id: "000000000013",
              title: "Блочная модель и селекторы: видео",
              description: "",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
            {
              id: "000000000014",
              title: "Блочная модель и селекторы: заметки",
              description: "",
              stepType: StepType.Notes,
              file: "notefilehere.pdf",
            },
          ],
        },
        {
          id: "00000000008",
          title: "Шрифты, отступы, тени и цвет",
          description:
            "Большое занятие после которого вы научитесь пользоваться шрифтами, задавать фоны элементам, сгруглять их границы и многое другое",
          order: 3,
          steps: [
            {
              id: "000000000015",
              title: "Шрифты, отступы, тени и цвет: видео",
              description: "",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
            {
              id: "000000000016",
              title: "Шрифты, отступы, тени и цвет: заметки",
              description: "",
              stepType: StepType.Notes,
              file: "notefilehere.pdf",
            },
          ],
        },
        {
          id: "00000000009",
          title: "Методологии и препроцессоры",
          description:
            "На занятии вы узнаете что такое BEM, как можно облегчить работу с CSS и закончите создавать веб-страницу",
          order: 4,
          steps: [
            {
              id: "000000000015",
              title: "Методологии и препроцессоры: видео",
              description: "",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
            {
              id: "000000000016",
              title: "Методологии и препроцессоры: заметки",
              description: "",
              stepType: StepType.Notes,
              file: "notefilehere.pdf",
            },
          ],
        },
        {
          id: "00000000010",
          title: "Подводим итоги: А что на интервью?",
          description: "Разбираем популярные вопросы связанные с HTML и CSS",
          order: 5,
          steps: [
            {
              id: "000000000017",
              title: "Видео",
              description: "",
              stepType: StepType.Video,
              file: "videofilehere.mv4",
            },
          ],
        },
      ],
    },
  ],
  tariffs: [
    {
      title: "Базовый",
      description: "В тариф входит 21 урок и 5 прямых эфиров, доступна обратная связь под видео и на эфире. Доступ к видео 4 месяца",
      fullPrice: "2540",
      priceWithDiscount: "1990",
    },
    {
      title: "Продвинутый",
      description: "В тариф входит 21 урок и 5 прямых эфиров, доступна обратная связь под видео и на эфире. Доступ к видео 4 месяца. Доступ к видео 4 месяца. Доступ к видео 4 месяца. Доступ к видео 4 месяца. Доступ к видео 4 месяца",
      fullPrice: "2540",
      priceWithDiscount: "1001",
    },
    {
      title: "Супер-Продвинутый",
      description: "В тариф входит 21 урок и 5 прямых эфиров, доступна обратная связь под видео и на эфире. Доступ к видео 4 месяца. Доступ к видео 4 месяца. Доступ к видео 4 месяца. Доступ к видео 4 месяца. Доступ к видео 4 месяца",
      fullPrice: "2540",
      priceWithDiscount: "1001",
    },
  ],
  currency: Currency.Uah,
  status: CourseStatus.AvailableAlways,
  startDate: "29 Апреля",
  authorId: "000001",
  publishedStatus: PublishedStatus.Published
};
