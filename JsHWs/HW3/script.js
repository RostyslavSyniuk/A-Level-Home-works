// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.

//
// for(i = 1; i <= 10; i++){
// let i
//     if(i % 3 == 0){
//         console.log(i, 'FizBuz');
//     }else if(i % 2 == 0){
//         console.log(i, 'Fiz');
//     }else if(i % 2 != 0){
//         console.log(i, 'Buz');
//     }
// }

// 2) Написати логіку знаходження факторіалу числа 10.

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }

//   console.log(factorial(10));

// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів? Без використання заокруглень

// const sheetsInReamPaper = 500;
// let consumptionPerWeek = 1200;
// let weeksAmount = 8;
// const totalEight = consumptionPerWeek*weeksAmount;
// let result = totalEight/sheetsInReamPaper;
// if(totalEight%sheetsInReamPaper===0){
//     console.log(result )
// }else{
//   result = (totalEight-totalEight%sheetsInReamPaper)/sheetsInReamPaper +1;
//     console.log(result);
// }

// 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3

// function searchFlat(flat) {
//     let porch = flat / 27;
//     let floor = flat / 3;
//     while (floor > 9) {
//         floor -= 9;
//     }
//       console.log(Math.ceil(porch), Math.ceil(floor));
// }
// searchFlat(768);

// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків
// function myPyramid(rows)
// {
//     for (let i = 0; i < rows; i++) {
//         let lookPyramid = '';
//         for (let j = 0; j < rows - i; j++) lookPyramid += ' ';
//         for (let k = 0; k <= i; k++) lookPyramid += '8 ';
//         console.log(lookPyramid);
//     }
// }
// myPyramid(8);

// С помощью prompt спросить у пользователя его возраст и подсчитать год рождения. Год рождения вывести с помощью alert.

// prompt('Скільки вам років?');
// alert(`виходить ви ${2022 - prompt()} року народження`);

// С помощью prompt спросить у пользователя температуру в градусах Цельсия и перевести их в Фаренгейты и/или наоборот.

// function temperature() {
//     result = prompt('Яка температура повітря сьогодні?', '100');
//     if (prompt()) {
//         result = 32 + (9 / 5) * result;
//     }
//     alert(`За Фаренгейтом це складе ${result}`);
// }

// temperature()

// Сделайте калькулятор для расчета деления нацело двух чисел. Используйте Math.floor или альтернативы.

// function calculate(a, b) {
//     let result = a / b;
//     console.log(Math.round(result))
// }
// calculate(15, 7);

// Напишите код, который вычисляет обмен валют по курсу, заданному с помощью константы const rate = КУРС ВАЛЮТЫ
// Считайте значение в одной валюте с помощью prompt, после чего умножите / поделите это число на rate.
// Выведите результат используя alert.Ограничьте количество знаков после запятой двумя(нас не волнуют дробные части центов / копеек)

// function exchange(currency) {
//   const rate = 36.57;
//   let chooseCurrency = prompt(`Виберіть валюту, UAH USD `);
//   if (chooseCurrency == "uah") {
//     prompt(`Введіть суму`);
//     currency = alert(Number(prompt()) / rate);
//   } else if (chooseCurrency == "usd") {
//     prompt(`Введіть суму`);
//     currency = alert(rate * Number(prompt()));
//     }
// }
// exchange();

// С помощью prompt организуйте ввод трех констант red, green, blue в десятичной системе.
// Создайте из них CSS - цвет в формате #RRGGBB используя шестнадцатиричную систему счисления.Значения меньше 16ти пока можно не учитывать.

// let red, green, blue, sum;
// red = prompt("Enter red");
// green = prompt("Enter green");
// blue = prompt("Enter blue");
// sum = red + green + blue;
// ;
// console.log(Number(sum).toString(16));

// Попросите пользователя ввести строку через prompt. Используя split и join сделайте что бы после любой запятой следовало слово блин, .

// prompt('Будь ласка, введіть довільне речення=)');

// console.log(prompt().split(' ').join(',блін '));

// Спросите у пользователя имя, и поприветствуйте его с помощью alert.

// let saHello = prompt('what is your name?')
// alert("Hello, " + `${saHello}. ` + "I want you to be my friend!!! =)");

// Преобразуйте строку, введенную пользователем, таким образом, что бы первая буква становилась большой, а остальные - маленькими.

// let str = "cANBerRa";
// let result = str.toUpperCase()[0] + str.toLowerCase().slice(1);
// console.log(result);

// Посчитайте количество слов в строке. Используйте разбиение по пробелам. Длина массива называется так же, как и длина строки.

// let str = "Посчитайте количество слов в строке. Используйте разбиение по пробелам. Длина массива называется так же, как и длина строки";
// console.log(str.split(' ').length);

// Спросите у пользователя ФИО, используя prompt трижды. Выкиньте лишние пробелы, используя .trim
// Используя String: capitalize сделайте так, что бы каждое слово в ФИО было с большой буквы, а остальные - маленькие
// Объедините эти три строки в одну переменную fullName и выведите куда-то(alert, console.log). Не забудьте пробелы между словами.

// let name = prompt('Enter name');
// let father = prompt('Enter father name');
// let surname = prompt('Enter surname');
// let fullName = name.trim().toUpperCase()[0] + name.trim().slice(1) +
//     " " + father.trim().toUpperCase()[0] + father.trim().slice(1) +
//     " " + surname.trim().toUpperCase()[0] + surname.trim().slice(1);
// console.log(fullName);

// Не используя .replace замените слово пиво в строке на слово чай

// let str = "Было жарко. Василий пил пиво вприкуску с креветками";
// let result = str.split(' ');
// result.splice(4, 1, 'чай');
// console.log(result.join(' '));

// Найдите в строке HTML тэг.Удалите, т.е.вырежьте его - создайте другую строку, в которой будет все символы до тэга и после него
// Тэг может быть любым.split и join не используйте, вместо этого используйте indexOf и slice. .replace не используйте

// let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
// let result = 0;
// result = str.slice(0, 39) + str.slice(46);
// console.log(result);

// На основе предыдущего задания сделайте тэг большими буквами.
// replace, split и join не используйте, вместо этого используйте indexOf и slice.

// let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
// let result = str.slice(0, 39) + str.slice(39, 46).toUpperCase() + str.slice(46);
// console.log(result);

// Попросите пользователя ввести строку через prompt.prompt не позволяет вводить многострочные строки.
// Дадим пользователю такую возможность - Пользователь может вводить \n в качестве маркера новой строки.
// Используя split и join сделайте эту строку воистину многострочной и выведите в консоль или через alert.

// let str = prompt("Write anything text(Double space is break to a new line):");
// console.log(str.split("  ").join("\n"));

// Пусть пользователь введет любой текст с ссылкой на youtube. Используя регулярное выражение извлеките из ссылки идентификатор видоса и создайте строку с встраиваемым блоком HTML. Добавьте блок на страницу.
// объявите константу с регулярным выражением
// используйте метод match, который вернет вам массив
// извлеките из массива элемент с идентификатором видео
// изучите HTML код встраивания видео в страницу на youtube.
// используя интерполяцию строк вклейте идентификатор видео в HTML код встраивания видео
// используя document.write отправьте полученную строку на страницу.

// let link = prompt('enter some link on Youtube');!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let myRe = /some code/gi;!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// С помощью prompt узнайте число, введенное пользователем.С помощью if проверьте что число корректно преобразовано из строки.
// В случае ошибки выведите сообщение Выведите четное число или нет, используя if.

// let someNum = prompt('enter some number');
// if (isNaN(+someNum)) {
//     alert('I said "enter some NUMBER"')
// } else if (+someNum % 2) {
//     alert(+someNum + ' is odd');
// } else {
//     alert(+someNum + " is even");
// }

// Спросите у пользователя текст, и проверьте его на наличие некорректного слова или нескольких некорректных слов.
// Используйте метод indexOf(или includes) строки:

// let correctText = prompt('Enter here.If you will enter any bad things, i will found it!!')
// if (!correctText.includes('блять', 'сука', 'хуй', 'мразь')) {
//     alert('Catched.Thank you for correct');
// } else {
//     alert("I caught you, little pest. Now i will kick your ass");
// }

// Напишите код, который спрашивает те или иные вопросы с ответом "да"/"нет" с помощью confirm, и сохраняет ответы в переменных.

// let sex = confirm('Ви чоловік?');
// if (sex) {
//     alert('Джентльмен');
//     console.log('.|.');
// } else {
//     alert("Мадмуазель");
//     console.log('(*)');
// }
// let firstQuestion = confirm('Ви бажаєте замовити столик?');
// let secondQuestion = confirm('Ви бажаєте відразу зробити замовлення?');
// let thirdQuestion = confirm('Для вас допустимо чекати більше 20хв замовлення?');
// let fourthQuestion = confirm('Нам було приємно вас обслуговувати.Ви ще прийдете до нас?');

// console.log(firstQuestion);
// console.log(secondQuestion);
// console.log(thirdQuestion);
// console.log(fourthQuestion);

// Просмотрите выражения ниже и попробуйте вычислить в уме их результат. Проверьте себя используя Console

// 2; //2
// 0; //0
// 1; //1
// // or
// 2 || 1; //2
// 2 || 0; //2
// //and
// 2 && 1; //1
// 1 && 2; //2
// 0 && 2; //0
// // or and and difference
// 0 || 1 || 2; //1
// 0 && 1 && 2; //0
// 2 || 1 || 0; //2
// 2 && 1 && 0; //0
// confirm("left") || confirm("right"); //left
// confirm("left") && confirm("right"); //left & right &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// //null, undefined, so on
// null || 2; //2
// undefined && 1; //undefined
// alert("Hello") && confirm("Are you sexy?"); //Hello? &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// alert("Hello") || confirm("Are you drunk?"); //Hello&Are you drunk? &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// //brackets and complex expressions
// (undefined || 2) && (3 || 0)(2 && 1) || (null && 0)(2 > 1) && "greater"(2 < 1) && null; //3 (ерор, бо між (3 || 0)(2 && 1) не стоїть розділовий знак)
// null && 2 < 1; //null
// // ternary operator
// 1 ? "one" : "not one"; //one
// 0 ? "zero" : "not zero"; //not zero
// "0" ? '"zero"' : "not `zero`"; //zero
// parseInt("0")
//    "true"
//   : ("false"("" || 2) && (3 || "3.5")) || ((4 && 5)(-1 + 1) && "zero"); //просто 3 без false&&&, якщо поставити розділовий знак після "false"&&&&&&&&&&&&&&&&&&&&&&&
// "-1" + 1 && "oups"(typeof null === "object")
//    "null is object"
//   : "null is null"; //null is object, якщо поставити розділовий знак після "oups"
// // ternary && ||
// (Math.random() < 0.5 && "less") || ("more" + ((a = Math.random())) < 0.5 && "less: " + a) || "more: " + a; //те, що перше датсть тру
//     //in for array
//     [2, 3, 5, 7, 11]
//   .indexOf(7) > -1 ? "prime" : "not found"; //prime

