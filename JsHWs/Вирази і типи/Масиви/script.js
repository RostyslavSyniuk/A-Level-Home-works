"Confirms";
// Сохраните в массив ответы на вопросы, заданные с помощью confirm.
// Используйте литеральный(декларативный) синтаксис массивов([...., ...., ....])

// const arr = [];
// arr.push(confirm('Ти українець?'));
// arr.push(confirm('ти повнолітній?'));
// arr.push(confirm('Слава Україні!'));
// console.log(arr);

"Prompts";
// Сохраните в массив ответы на вопросы, заданные с помощью prompts.
// Используйте доступ к массиву по индексу и присвоение(arr[....] = ....)

// const arr = [];
// arr[0] = prompt('what"s your name?');
// arr[1] = prompt('how old are you?');
// arr[2] = prompt('where are you from?');
// console.log(arr);

"Item access";
// Попросите пользователя ввести(prompt) индекс в массиве.
// Выведите значение элемента по этому индексу.Попробуйте так же ввести индекс "length".

// const arr = ['candle', 'snikers', 'bounty', 'milky way', 'cake', 'ice-cream', 'chocolate', 'bisquite', 'pie', 'caramel'];
// console.log(arr[+prompt("enter number, i'll give you something sweet")]);

"Item change";
// Попросите пользователя ввести(prompt) индекс в массиве, а так же значение для этого индекса.
// Присвойте в введенный индекс введенное значение

// const arr = ['candle', 'snikers', 'bounty', 'milky way', 'cake', 'ice-cream', 'chocolate', 'bisquite', 'pie', 'caramel'];
// const indx = prompt('Enter indx');
// const value = prompt('Enter value');
// arr[indx] = value;
// console.log(arr)

"Multiply table";
// Создайте таблицу умножения 5x5 используя декларативный синтаксис вложенных массивов const arr = [[....], [....], [....], .....].
// Числа во вложенных массивах должны быть равны произведению индекса внешнего массива на индекс внутреннего массива: arr[2][3] === 6

// const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
// console.log(arr[2][3]);

"Multiply table slice";
// Используя slice создайте массив массивов (другую таблицу/матрицу) из таблицы умножения, в которой не будет нулей

// const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
// const arr2 = [];
// for (let elem of arr) {
//   arr2.push(elem.slice(1));
// }
// console.log(arr2.slice(1));

"IndexOf Word";
// Спросите у пользователя строку из нескольких слов.
// Спросите у него искомое слово.Выведите, каким по счету является это слово в строке из нескольких слов.
// Если слово не найдено, выведите сообщение об этом(а не - 1)

// const str = prompt('I need you to write any sentence');
// const arr = str.split(' ');
// console.log(arr);
// const word = prompt('Enter word from sentence and i show you it place');
// const indx = alert(`It is ${arr.indexOf(word)+1} from start`);

"Reverse";
// Добавьте в массив пять введенных пользователем через prompt элементов(используйте push).
// Создайте другой массив с этими же элементами в обратном порядке.Для этого извлекайте элементы из первого массива используя pop, добавляйте их во второй используя push

// const arr = [];
// const pushed = [];
// for (i = 0; i < 5; i++) {
//   const elem = prompt("Here must be some elem of arr");
//   arr.push(elem);
// }
// for (j = 0; j < 5; j++) {
//   const pop = arr.pop();
//   pushed.push(pop);
// }

// console.log(arr);
// console.log(pushed);

"Reverse 2";
// Переверните второй массив из предыдущего задания еще раз (последовательность будет как в первом массиве), используя shift и unshift

// const arr = [];
// const pushed = [];
// for (i = 0; i < 5; i++) {
//   const elem = prompt("Here must be some elem of arr");
//   arr.unshift(elem);
// }
// for (j = 0; j < 5; j++) {
//   const shift = arr.shift();
//   pushed.unshift(shift);
// }

// console.log(arr);
// console.log(pushed);

"Copy";
// Скопируйте массив созданный в задании Multiply table неглубоко

// const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
// const arr2 = [...arr];
// arr2[0].push(999);
// console.log(arr)
// console.log(arr2);

"Deep Copy";
// Скопируйте массив созданный в задании Multiply table включая вложенные массивы (глубокая копия)

// const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
// const arr2 = JSON.parse(JSON.stringify(arr));
// arr[3].push(999)

// console.log(arr)
// console.log(arr2);

"Array Equals";
// Создайте код, в котором будет две переменных с массивами (arr1 и arr2), которые равны друг другу (arr1 === arr2)

// arr1 = [1, 'cat', true, [1, 2, 3]];
// arr2 = arr1;
// console.log(arr1===arr2)

"Flat";
// Соберите все элементы всех вложенных массивов из задания Multiply table в один массив.
// Его длина должна быть равна 25. Используйте spread - оператор

// const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
// const arr1 = [...arr[1].slice(1), ...arr[2].slice(1), ...arr[3].slice(1), ...arr[4].slice(1)];
// console.log(arr1);

"Destruct";
// Извлеките первую, пятую и девятую букву из строки, введенной пользователем, используя деструктуризацию.
// Выведите их

// const str = prompt('Enter some sentence');
// const [a, , , , b, , , , c,] = str;
// if (str.length < 9 || str.includes(' ')) {
//     alert('Please enter more and without spaces')
// } else {
//     alert(`show you 1-st "${a}", 5-th "${b}" and 9-th "${c}" letters`)
// }

"Destruct default";
// Извлеките вторую, четвертую и пятую букву из строки, введенной пользователем, используя деструктуризацию.
// Если в строке таких букв не окажется задайте переменным значение по умолчанию!(восклицательный знак).
// Выведите эти переменные

// const str = prompt('Enter some sentence');
// const [, a = '!', , b = '!', c = '!',] = str;
// alert(`show you 2-nd "${a}", 4-th "${b}" and 5-th "${c}" letters`);

"Multiply table rest";
// Реализуйте задание Multiply table slice, используя оператор rest при деструктуризации.
// Используйте вложенную деструктуризацию.
// После получения четырех обрезанных вложенных массивов - соберите общий массив без нулей

// const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
// const [, [a, ...arr1], [b, ...arr2], [c, ...arr3], [d, ...arr4]] = arr;
// const multyArr = [...arr1, ...arr2, ...arr3, ...arr4];

// console.log(multyArr);

"For Alert";
// Есть массив["John", "Paul", "George", "Ringo"].
// Выведите каждое имя отдельным alert(), используя цикл for ....of

// const arr = ["John", "Paul", "George", "Ringo"];
// for (elem of arr) {
//     alert(elem)
// }

"For Select Option";
// Используя заготовку, создайте выпадающий список с валютами.Элементы выпадающего списка создаются с помощью тэга < option >

// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// for (let currency of currencies) {
//   str += `<option value="${currency}">${currency}</option>`;
// }
// str += "</select>";
// document.write(str);

"For Table Horizontal";
// Аналогично, добейтесь вывода имен в ячейки таблицы по горизонтали(одна строка с четырьмя ячейками)

// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table>";
// for (const name of names) {
//   str += "<td>" + name + "</td>";
// }
// str += "</table>";
// document.write(str);

("For Table Vertical");
// Аналогично, добейтесь вывода имен в ячейки таблицы по вертикали(одна колонка с четырьмя строками, в каждой строке - одна ячейка)

// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table>";
// for (const name of names) {
//   str += "<tr><td>" + name + "</td></tr>";
// }
// str += "</table>";
// document.write(str);

("For Table Letters");
// Используя заготовку выше, создайте таблицу 3x4.
// В каждой строке по три ячейки с буквами, четыре строки, так как 4 валюты в массиве.

// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<table>";
// for (let i = 0; i < currencies.length; i++) { //цикл создает строки таблицы
//   str += "<tr>"; //вставляємо новий рядок в таблицю
//   for (let j = 0; j < 3; j++) { //цикл создает ячейки в одной строке таблицы
//     let letter = currencies[i][j]; //отримуємо поточну літеру валюти
//     str += "<td>" + letter + "</td>"; //створюємо та додаємо ячейку з літерою валюти в рядок таблиці
//   }
//   str += "</tr>"; //закриваємо рядок таблиці
// }
// str += "</table>";
// document.write(str); //відображаємо таблицю на сторінці

("For Multiply Table");
// Выведите таблицу умножения 5x5 из задания Multiply table в таблицу, используя вложенные for .... of и document.write

// const numArr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
// let str = "<table>";
// for (let numbers of numArr){ //цикл создает строки
//     str += "<tr>";
//     for (let num of numbers){ //цикл создает ЯЧЕЙКИ в ОДНОЙ СТРОКЕ
//         str += `<td>${num}</td>`;
//     }
//     str += "</tr>";
// }
// str += "</table>";
// document.write(str) //document.write отобразит ваш HTML на странице

("Function Capitalize");
// Реализуйте задачу String: capitalize как отдельную функцию:

// const capitalize = str => {
//     let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
//     return result //именно этот код обеспечит возврат результата функции
// }
// console.log(capitalize("cANBerRa")) //Canberra

("Map Capitalize");
// Пусть пользователь вводит строку.
// Разбейте её по пробелам.Используя map и capitalize создайте массив в котором каждое слово будет с большой буквы.
// Соберите массив в строку обратно

// const str = prompt('Enter some sentence for me to transform into array');
// const arr = str.split(' ').map(x=> x[0].toUpperCase()+ x.slice(1))
// console.log(arr);

("Filter Lexics");
// Пусть пользователь вводит строку.Разбейте её по пробелам.
// Используя filter верните true если элемент массива не состоит в определенном массиве недопустимых слов.
// Если же элемент массива - недопустимое слово, функция, переданная в filter должна возвращать false.
// Соберите массив в строку обратно.

// const arrOfBadWords = ["орк", "росія", "бля", "дурень"];
// const str = prompt("Enter some sentence for me to filter it");
// const filtered = str.split(" ").filter((x) => !arrOfBadWords.includes(x));

// console.log(filtered);

("Beep Lexics");
// Пусть пользователь вводит строку.
// Разбейте её по пробелам.Используя map и тернарный оператор верните из функции слово без изменений, если оно не состоит в каком - то другом массиве запрещенных слов.
// Если же слово состоит в этом списке, функция должна вернуть слово BEEP.Соберите массив обратно в строку через пробел.
// Таким образом вы сможете реализовать замену нескольких запрещенных слов на BEEP.

// const arrOfBadWords = ["орк", "росія", "бля", "дурень"];
// const str = prompt("Enter some sentence for me to filter it");
// const maped = str.split(" ").map((x) => !arrOfBadWords.includes(x) ? x : 'BEEP');

// console.log(maped);

("Reduce HTML");
// Реализуйте задачу For Select Option используя reduce:

// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// str += currencies.reduce((a, b) => {
//     return a + `<option>${b}</option>`;
// }, "");
// str += "</select>"
// document.write(str);

("For Brackets Hell Check");
// Пусть пользователь вводит строку с любыми парными скобками в ней, например[[]() { { { []() } } }].
// Найдите место возможной ошибки(непарности) в этой строке.
// Для этого, каждую открывающую скобку добавляйте в стек.
// При нахождении закрывающей она должна соответствовать вершине стека.
// Если она не соответстует, выведите сообщение об ошибке и позицию в строке.
// Если соответствует - уберите скобку из стека.Если строка ошибок не содержит, порадуйте пользователя.

// const line = prompt();
// const bracketsStack = [];
// let i = 0;

// for (let character of line) {
//   if (character === "[" || character === "(" || character === "{") {
//     bracketsStack.push({ character, position: i });
//   } else if (character === "]" || character === ")" || character === "}") {
//       const lastBracket = bracketsStack.pop();
//       console.log(lastBracket);
//     if (!lastBracket) {
//       console.log(`Ошибка: лишняя закрывающая скобка в позиции ${i}`);
//       break;
//     } else if (
//       (character === "]" && lastBracket.character !== "[") ||
//       (character === ")" && lastBracket.character !== "(") ||
//       (character === "}" && lastBracket.character !== "{")
//     ) {
//       console.log(`Ошибка: несоответствие скобок в позиции ${i}`);
//       break;
//     }
//   }
//   i++;
// }

// if (bracketsStack.length) {
//   const lastBracket = bracketsStack.pop();
//   console.log(`Ошибка: недостаточное количество закрывающих скобок после позиции ${lastBracket.position}`);
// } else {
//   console.log("Все скобки в порядке");
// }