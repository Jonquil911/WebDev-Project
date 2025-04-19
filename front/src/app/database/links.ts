import {FILE} from './files';

export interface LINK {
  // id: number;
  name: string; // the name that will be displayed
  link: string;
  course: string; // short name parameter in course
  description: string; // short description where will link go
}

//
// export const links: LINK[] = [
//
//   {
//     id: 0,
//     name: 'Lecture samples',
//     link: 'https://github.com/askarakshabayev/PP1-2018',
//     course: 'PP1',
//     description: 'All lecture samples from lector Askar Akshabaev '
//   },
//   {
//     id: 1,
//     name: 'quiz 1 solutions',
//     link: 'https://github.com/ramanqul/pp2018/tree/master/quiz1',
//     course: 'PP1',
//     description: ''
//   },
//   {
//     id: 2,
//     name: 'cplusplus.com',
//     link: 'http://www.cplusplus.com/',
//     course: 'PP1',
//     description: 'c++ documentation'
//   },
//   {
//     id: 3,
//     name: 'informatics.ru',
//     link: 'https://informatics.mccme.ru/',
//     course: 'PP1',
//     description: 'website for practicing'
//   },
//   {
//     id: 4,
//     name: 'informatics.ru',
//     link: 'https://informatics.mccme.ru/',
//     course: 'PP1',
//     description: 'website for practicing'
//   },
// // DS
//   {
//     id: 5,
//     name: 'Slader',
//     link: 'https://www.slader.com/textbook/9780073383095-discrete-mathematics-with-applications-7th-edition/',
//     course: 'DS',
//     description: 'The best website for скатывать дз ever'
//   },
//   {
//     id: 6,
//     name: 'Stepik',
//     link: 'https://stepik.org/course/83/promo',
//     course: 'DS',
//     description: 'May help with some basic concepts of DS in russian'
//   },
//   {
//     id: 7,
//     name: 'YouTube4ik',
//     link: 'https://www.youtube.com/watch?v=rMV6pMntwaw&list=PLaDfqLmBYDQY0DpCpULawav_0qm2WGrXY&index=3',
//     course: 'DS',
//     description: 'Video after which Dina began to understand Propositional Logic well(не точно)'
//   },
//   {
//     id: 8,
//     name: 'Telegram',
//     link: 'https://t.me/joinchat/FxeZAlCKxmYk10oKtokv3g',
//     course: 'DS',
//     description: 'This is our 18BD chat, here all possible questions are asked, ' +
//       'the answers are given in all kinds of languages, there is even Isakhov !!!!)))))'
//   },
//   {
//     id: 9,
//     name: 'GOOGLE',
//     link: 'https://www.google.com/',
//     course: 'DS',
//     description: 'To be honest, this is the best link in your entire life ever. God bless the creators of Google!'
//   },
// // OOP
//   {
//     id: 10,
//     name: 'CodingBat',
//     link: 'https://codingbat.com/java',
//     course: 'OOP',
//     description: 'Website with many problems to practice Java. Do not forget to register!!'
//   },
//   {
//     id: 11,
//     name: 'What is OOP and why do we need it?',
//     link: 'https://habr.com/ru/post/148015/',
//     course: 'OOP',
//     description: 'For those who do not understand why they entered the university'
//   },
//   {
//     id: 12,
//     name: 'StackOverllow',
//     link: 'https://ru.stackoverflow.com/',
//     course: 'OOP',
//     description: 'The main thing for any programmer'
//   },
//   {
//     id: 13,
//     name: 'Telegram Channel',
//     link: 'https://t.me/oop18BD',
//     course: 'OOP',
//     description: 'The best OOP channel with the best Lector'
//   },
//   {
//     id: 14,
//     name: 'Sorting Algorithms with Music',
//     link: 'https://www.youtube.com/playlist?list=PLZh3kxyHrVp_AcOanN_jpuQbcMVdXbqei',
//     course: 'OOP',
//     description: 'Strange way to understand sorting algorithms youtube videos'
//   },
//
//   {
//     id: 15,
//     name: 'PostgreSql Tutorial',
//     link: 'https://www.postgresqltutorial.com/',
//     course: 'DB',
//     description: 'The most useful website for the course'
//   },
//   {
//     id: 16,
//     name: 'Piazza',
//     link: 'https://piazza.com/class/k02c4s6mvau3j0',
//     course: 'DB',
//     description: 'Piazza link to the course, code: DB101, I suppose...'
//   },
//   {
//     id: 17,
//     name: 'Answers to labs',
//     link: 'https://github.com/MagiaGroz/Database-KBTU-',
//     course: 'DB',
//     description: 'Someone"s gitHub account with all answers, bless you '
//   },
//   {
//     id: 18,
//     name: 'PostgreSQL sample database',
//     link: 'https://www.postgresqltutorial.com/postgresql-sample-database/',
//     course: 'DB',
//     description: 'Do not really know why someone will need this info'
//   },
//   {
//     id: 19,
//     name: 'W3schools',
//     link: 'https://www.w3schools.com/sql/',
//     course: 'DB',
//     description: 'Cool website to learn SQL'
//   },
//   {
//     id: 20,
//     name: 'KhanAcademy',
//     link: 'https://www.khanacademy.org/science/physics',
//     course: 'Physics',
//     description: 'The best website with explanations'
//   },
//   {
//     id: 21,
//     name: '5terka',
//     link: 'https://5terka.com/reshebniki_fizika',
//     course: 'Physics',
//     description: 'Will always help with labs and homework if your professor is Umarov'
//   },
//   {
//     id: 22,
//     name: 'Antigtu',
//     link: 'http://antigtu.ru/fizika/',
//     course: 'Physics',
//     description: 'Here you can find cheat sheets'
//   },
//   {
//     id: 23,
//     name: 'Domashka',
//     link: 'http://domashka.su/gdz/klass11/fizika/book28/4738',
//     course: 'Physics',
//     description: 'You can find many similar tasks with your hw in Russian with explanations'
//   },
//   {
//     id: 24,
//     name: 'NewScientist',
//     link: 'https://www.newscientist.com/subject/physics//',
//     course: 'Physics',
//     description: 'A site with lots of cool articles if you are interested in physics'
//   }
//
//   ];





