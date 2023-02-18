// Сделайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.

// while (!confirm('press Ok')) {
// }

// Создайте пустой массив и добавляйте в него элементы, введенные пользователем, пока пользователь не нажмет Отмена в очередном prompt.
// Используйте push для удобства: push В массиве не должно быть null после работы цикла;

// let arr = [];
// let text;
// do {
//   text = prompt("");
//   arr.push(text);
// } while (text !== null);
// arr.pop();
// console.log(arr);

// Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.

// let arr = [];
// let text;
//  do{
//   text = prompt("Привіт");
//     arr[arr.length]= text;
// }while (text !== null)
// arr.pop();
// console.log(arr);

// Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9.
// Код должен подсчитывать количество итераций и вывести это число с помощью alert.

// let repeated = 0;
// for (let i = 1; ; i++) {
//     repeated++;
//     if (Math.random() > 0.9) {
//     break;
//     }
// }
// alert(`this circle repeated ${repeated-1} times`);

// Сделайте цикл с prompt, который прерывается по нажатию OK и продолжается по нажатию "Отмена" c пустым телом цикла.

//  while (prompt()===null){

// }

// Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3(1, 4, 7....) используя цикл for.
// Метод Гаусса не применять, наоборот, сделать максимально наивное решение.

// let count = 0;
// for (i = 1; i <= 10; i += 3) {
//     count += i;
// }
// console.log(count);

// Сформировать строку " # # # # # " с помощью цикла for. Длина строки может быть четной и нечетной, и указывается в одном месте в коде.

// let str = '';
// for (i = 0; i < 5; i++){
//   str += '# ';
// }
// console.log(str);

// Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n.

// let str = '';
// let substr = '';
// for (i=0; i < 9; i++){
//   str += i;
//   for (j = 0; j < 10; j++){
//       substr += j;
//   }
//   substr += '\n';
// }
// console.log(substr);

// Сформируйте строку с шахматной доской из вложенных циклов. Для перевода строки используйте \n. Код должен поддерживать легкое изменение размеров доски.

// var str = " x";
// var str2 = " o";
// var result = "";
// var row = true;
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5; j++) {
//     if ((j + row) % 2 == 0) {
//       result += str2;
//     } else {
//       result += str;
//     }
//   }
//   console.log(result);
//   result = "";
//   row = !row;
// }

// Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:

// function power(n) {
//     const arr = [];
// for (i = 0; i < n; i++){
//     arr[arr.length] = i ** 3;
// }
//     console.log(arr)
// }
// power(5);

// C помощью вложенного цикла сформируйте массив массивов "таблица умножения".
// Для инициализации вложенных массивов используйте

// let arr=[];
// for(i=0;i<10;i++)
// arr[i]=new Array();

// for(i=0;i<10;i++)
// for(j=0;j<10;j++)
// arr[i][j]=i*j;

// console.log(arr[2][5]);

// Напишите функцию readArrayOfObjects, которая циклически добавляет в массив объекты, которые ввел пользователь.
// Пользователь вводит ключи и значения(их в каждом объекте может быть любое количество), используя prompt.
// Когда пользователь нажимает "Отмена" в окне prompt, ввод объекта заканчивается и объект добавляется в массив.
// Перед вводом следующего объекта пользователю задается вопрос(используя confirm), хочет ли он продолжить это мучение ввод объектов.
// При утвердительном ответе, опять работает ввод любюго количества ключей для создания нового объекта
// Функция должна возвращать созданный массив с объектами.

// function readArrayOfObjects() {
//     let arr = [];
//     while(confirm('do you want enter some obj?')) {

//
//             arr.push({prompt});
//     }
//     prompt('Add your obj')
//     console.log(arr);
// }
// readArrayOfObjects();

// Сформировать следующую строку - ромбик:

// function romb(rows) {
//   for (i = 0; i < rows; i++) {
//     let str = "";
//     for (j = 0; j < rows -i; j++) str += ".";
//     for (k = 0; k <= i; k++) str += "х ";
//     for (j = 0; j < rows -i; j++) str += ".";
//     console.log(str);
//     }
//   for (i = 0; i <= rows; i++) {
//     let str = "";
//     for (j = rows; j < rows + i; j++) str += ".";
//     for (k = rows; k >= i; k--) str += "х ";
//     for (j = rows; j < rows + i; j++) str += ".";
//     console.log(str);
//   }
// }
// romb(5);

// Используя пример из задания Divide и функцию из Calc Func сделайте несколько полей ввода в HTML,
// меняя которые вы будете получать результат калькуляции в каком - то div.

// const span = document.createElement('span')
// span.innerText = `<i>Hello</i><strong>World</strong>`
// span.innerText = 'salut';
// document.body.prepend(span)
// console.log(span.children) //пара дочерних элементов - i и strong
