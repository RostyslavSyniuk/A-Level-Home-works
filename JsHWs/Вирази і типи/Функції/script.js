// Temperature
// Оформите Temperature как функцию, в которую параметром передается температура в одной системе, а возвращается в другой.
// Никаких prompt и console.log в коде быть не должно, если вы хотите в дальнейшем пользоваться этой функцией где угодно в коде удобно.
// Нужен ли блок кода в функции для решения этой задачи ?

// let farengate = (celsius) => 32 + (9 / 5) * celsius;
// farengate();

// RGB
// Оформите Number: RGB как функцию, в которую параметрами передаются три числа(r, g, b) => .
// Функция должна возвращать строку в нотации #RRGGBB.
// Используя условия или тернарный оператор добейтесь что бы в результате всегда было 7 символов, даже когда значение цвета меньше 15ти.
// Нужен ли блок кода этой функции ?

// function rgb(r, g, b) {
//     if ((r >= 15 && g >= 15 && b >= 15)) {
//         return '#' + r.toString(16) + g.toString(16) + b.toString(16);
//     } else if (r < 15 || g < 15 || b < 15) {
//       return '#' + r.toString(16) + g.toString(16) + b.toString(16) + '*';
//     }
// }

// rgb()

// Flats
// Оформите Number: flats как функцию.Продумайте достаточное количество параметров для решения задачи.
// Функция должна возвращать объект вида { entrance, floor }, где entrance - номер падика, floor - номер этажа на котором находится квартира.

// function getFlat(flat) {
//     entrance = Math.ceil(flat / 36);
//     floor = Math.ceil(flat / 4);
//     while (floor > 9) {
//       floor -= 9;
//     }
//     return `Your flat is in ${entrance} entrance and on ${floor} floor`;

// }
// getFlat(81)
// console.log(`Your flat is in ${entrance} entrance and on ${floor} floor`);

// Credentials
// Оформите задание String: credentials как функцию без параметров.
// Используйте функцию capitalize из домашнего задания по массивам.
// Функция должна содержать вызовы prompt и возвращать объект вида { name, surname, fatherName, fullName }

// function credentials() {
//     const entering = ["name", "surname", "fatherName"];
//     let data;
//     const full = [];
//     for (elem of entering) {
//         data = prompt(`enter your ${elem}`);
//         full.push(data);

//     }
//     let fullName = full[0] + ' ' + full[1]+ ' ' + full[2];
//     full.push(fullName);
//     console.log(full)
//     return full;

// }
// credentials();

// New line
// Оформите задание String: new line как функцию с параметром - строкой.
// Функция должна возвращать строку с настоящими переносами.

// function newLine(str) {
//     str = prompt('Enter smth. if you will enter \\n i will move the word to a new line');
//     return alert(str.split('\\n').join('\n'));
// }
// newLine();

// Prompt OR
// Оформите задание Prompt: OR как функцию, которая принимает строку для prompt и значение по умолчанию.
// Функция должна возвращать введенный текст или значение по умолчанию в случае отказа пользователя вводить что - либо.
// Используйте функцию без блока кода(функцию в одно выражение)

// let entering = (str = console.log('wtf?')) => str = prompt('') ? alert(prompt('enter here')) : str;
// entering();

// Login And Password
// Оформите задание Login And Password как функцию, которая принимает два параметра - правильный логин и пароль
// и возвращает true если логин и пароль введенные пользователями верны, или false если пользователь не смог.
// Функция должна содержать в себе вызовы prompt для ввода логина и пароля пользователем.

// function loginAndPassword(login, password) {
//     const enteringLog = prompt('Enter your login')
//     const enteringPass = prompt('Enter your password')
//     if (enteringLog == login && enteringPass == password) {
//         return console.log('true')
//     } else {
//         return console.log("false");
//     }
// }
// loginAndPassword('Rost', '170797');

// For Table
// Оформите задание For Multiply Table как функцию, которая принимает любой массив с массивами,
//     а возвращает строку HTML с тэгом < table > и всякими tr и td.

