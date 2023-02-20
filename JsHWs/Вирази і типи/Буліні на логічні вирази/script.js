
'Number: odd'
// С помощью prompt узнайте число, введенное пользователем.С помощью if проверьте что число корректно преобразовано из строки.
// В случае ошибки выведите сообщение Выведите четное число или нет, используя if.

// let someNum = prompt('enter some number');
// if (isNaN(+someNum)) {
//     alert('I said "enter some NUMBER"')
//     } else if (+someNum ===0) {
//     alert(+someNum + ' is 0');
// } else if (+someNum % 2) {
//     alert(+someNum + ' is odd');
// } else {
//     alert(+someNum + " is even");
// }

'String: lexics'
// Спросите у пользователя текст, и проверьте его на наличие некорректного слова или нескольких некорректных слов.
// Используйте метод indexOf(или includes) строки:

// let correctText = prompt(
//   "Enter here.If you will enter any bad things, i will found it!!"
// );
// if (correctText.includes("блять", 0)) {
//   alert("I caught you, little pest. Now i will kick your ass");
// } else {
//   alert("Catched.Thank you for correct");
// }

'Boolean'
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

'Ternary'
// Спросите у пользователя пол (confirm). Выведите с помощью alert "Вы мужчина" или "Вы женщина". Используйте тернарный оператор.

// let sex = confirm('Ви чоловік?') ? alert('Ви чоловік') : alert('Ви жінка');

'Training'
// Просмотрите выражения ниже и попробуйте вычислить в уме их результат. Проверьте себя используя Console

// 2; //2
// 0; //0
// 1; //1
// or
// 2 || 1; //2
// 2 || 0; //2
//and
// 2 && 1; //1
// 1 && 2; //2
// 0 && 2; //0
// or and and difference
// 0 || 1 || 2; //1
// 0 && 1 && 2; //0
// 2 || 1 || 0; //2
// 2 && 1 && 0; //0
// confirm("left") || confirm("right"); //left
// confirm("left") && confirm("right"); //якщо перший конфірм тру, то покажеться другий
//null, undefined, so on
// null || 2; //2
// undefined && 1; //undefined
// alert("Hello") && confirm("Are you sexy?"); //Hello? алерт повертає underfined, тому покажеться тільки алерт
// alert("Hello") || confirm("Are you drunk?"); //Hello&Are you drunk? покажеться 2 операнда
//brackets and complex expressions
// (undefined || 2) && (3 || 0);
// (2 && 1) || (null && 0);
// (2 > 1) && "greater";
// (2 < 1) && null;
// null && 2 < 1;
// ternary operator
// 1 ? "one" : "not one"; //one
// 0 ? "zero" : "not zero"; //not zero
// "0" ? '"zero"' : "not `zero`"; //zero
// parseInt("0") ? "true" : "false"; //false
// ("" || 2) && (3 || "3.5") || (4 && 5)
// (-1 + 1) && "zero";
// "-1" + 1 && "oups"
// (typeof null === "object")?"null is object": "null is null"; //null is object, якщо поставити розділовий знак після "oups"
// ternary && ||
// Math.random() < 0.5 && "less" || "more"
// (a = Math.random()) < 0.5 && "less: " + a || "more: " + a; //те, що перше датсть тру
//in for array
// [2, 3, 5, 7, 11].indexOf(7) > -1 ? "prime" : "not found"; //prime

    'Prompt: or'
// Для задания Number: age используя ИЛИ || вывести сообщение об ошибке (alert) если пользователь не введет возраст или нажмет отмену (т. е. prompt выдаст пустую строку или null, интерпретируемую как false).

// const age = prompt('Скільки вам років?');
// const old = age? alert(`виходить ви ${2022 - age} року народження`) : alert('error!!!');

'Confirm: or this days'
// C помощью этого же трюка (использование ИЛИ для запуска альтернативы) сделайте капризного робота, который в confirm спрашивает "шопинг?", а в случае отказа - выводить alert "ты - бяка".

// const shoping = prompt('shoping?');
// const answer = shoping? alert('Юхууу, маю багато грошей') : alert('подумай ще раз');

'Confirm: if this days'
// Сделать тоже самое с помощью if.

// const shoping = prompt('shoping?');
// if (shoping) {
//     alert('тааак, давай витратим всі гроші')
// } else {
//     alert('ну чомуууу?????')
// }

'Default: or'
// Попросите пользователя ввести ФИО в три разныe переменныe.Используя ИЛИ || добавьте строки по умолчанию, которые будут сохраняться во внутренних переменных если пользователь ввел пустую строку или нажал "Отмена".
//     Например, если вы на шаге ввода Фамилии нажмете Escape, фамилия будет "Иванов"

// const name = prompt('enter your name') || "Василь";
// const surname = prompt("enter your surname") || "Васильович";
// const fathername = prompt("enter your fathername") || "Васько";

// console.log(name + " " + surname + " " + fathername);

'Login and password'
// Напишите код, который спрашивает логин, проверяет его на верность, в случае если логин верен, просит ввести пароль и проверяет его.
// В случае несовпадения логина или пароля выводить alert с текстом ошибки.В случае успешного логина - alert с поздравлением.
// Правильные логин: admin и пароль: qwerty.Используйте вложенные if и else.

// const login = "admin";
// const pass = "qwerty";
// let enterLogin = prompt('your login');

// if (enterLogin == 'admin') {
//     alert("Yeaah!!!");
//     let enterPass = prompt("your pass");
//     if (enterPass == "qwerty") {
//         alert('Yeaah!!!')
//     } else {
//         alert("Noooo");
//     }
// } else if(enterLogin != 'admin'){
//     alert('Noooo')
// }

'Currency exchange'
// Попросите пользователя ввести валюту (например, usd, eur, другие валюты добавить по вкусу) с помощью prompt.
// Также поинтересуйтесь купить или продать он желает (используйте confirm).
// С помощью нескольких if и тернарного оператора внутри каждого из if задайте переменную rate, определяющую курс конкретной валюты на покупку или продажу.
// Обратите внимание на место объявления переменной rate - она должна быть доступна в коде после всех этих if.
// Попросите пользователя ввести сумму на обмен
// Посчитайте и выведите результат путем умножения или деления на rate
// Дайте возможность пользователю вводить названия валют в любом регистре (UsD, eUR). Для этого в if используйте toUpperCase (или toLowerCase)

// const currency = prompt("What currency you want to exchange?\n USD, EUR, GBP").toLowerCase();
// const exchangeType = confirm('Buy or sell? Enter "Ok" if buy') ? "Buy" : "sell";
// let rate;
// if (currency == "USD".toLowerCase() && exchangeType == "Buy") {
//   rate = 39.84;
// } else if (currency == "USD".toLowerCase() && exchangeType == "sell") {
//   rate = 39.75;
// } else if (currency == "EUR".toLowerCase() && exchangeType == "Buy") {
//   rate = 42.35;
// } else if (currency == "EUR".toLowerCase() && exchangeType == "sell") {
//   rate = 42.2;
// } else if (currency == "GBP".toLowerCase() && exchangeType == "Buy") {
//   rate = 48;
// } else if (currency == "GBP".toLowerCase() && exchangeType == "sell") {
//   rate = 47.2;
// }
// const value = prompt("enter value");
// const result = alert(`${(rate * value).toFixed(2)} uah`);

'Scissors'
// Сделайте игру "камень-ножницы-бумага".
// Пользователь вводит свой вариант через prompt, программа генерирует свой вариант через Math.random() и выводит через alert.
// Следующий alert выводит имя победителя или "ничья"

// const words = ["rock", "scissors", "paper"];
// const p1 = prompt('Player1, your choice');
// const p2 = words[Math.floor(Math.random() * words.length)];
// const result = alert(p2)
// if (p1 == p2) alert("Draw!");
// else if(p1 == "rock" && p2 == "scissors") alert("Player 1 won!");
// else if (p1 == "scissors" && p2 == "paper") alert("Player 1 won!");
// else if (p1 == "paper" && p2 == "rock") alert("Player 1 won!");
// else alert("Player 2 won!");
// console.log(p2)


