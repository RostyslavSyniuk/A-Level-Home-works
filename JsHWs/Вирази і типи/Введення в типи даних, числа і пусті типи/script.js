// Number: age
// С помощью prompt спросить у пользователя его возраст и подсчитать год рождения. Год рождения вывести с помощью alert.

// const age = prompt('Скільки вам років?');
// alert(`виходить ви ${2022 - age} року народження`);

// Number: temperature
// С помощью prompt спросить у пользователя температуру в градусах Цельсия и перевести их в Фаренгейты и/или наоборот.

// function temperature() {
//     result = prompt('Яка температура повітря сьогодні?', '100');
//     if (result) {
//       result = 32 + (9 / 5) * result;
//     }
//     alert(`За Фаренгейтом це складе ${result}`);
// }

// temperature()

// Number: divide
// Сделайте калькулятор для расчета деления нацело двух чисел. Используйте Math.floor или альтернативы.

// function calculate(a, b) {
//     let result = a / b;
//     console.log(Math.round(result))
// }
// calculate(15, 2);

// Number: currency
// Напишите код, который вычисляет обмен валют по курсу, заданному с помощью константы const rate = КУРС ВАЛЮТЫ
// Считайте значение в одной валюте с помощью prompt, после чего умножите / поделите это число на rate.
// Выведите результат используя alert.Ограничьте количество знаков после запятой двумя(нас не волнуют дробные части центов / копеек)

// function exchange() {
//   const rate = 36.57;
//   let chooseCurrency = prompt(`Виберіть валюту, UAH USD `);
//   let currency;
//   if (chooseCurrency == "uah") {
//     enterUah = prompt(`Введіть суму`);
//     currency = alert((Number(enterUah) / rate).toFixed(2));;
//   } else if (chooseCurrency == "usd") {
//     enterUsd = prompt(`Введіть суму`);
//     currency = alert((rate*Number(enterUsd)).toFixed(2));;
//   }
//   return currency;
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

// Number: flats
// Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3

// function searchFlat(flat) {
//     let porch = flat / 27;
//     let floor = flat / 3;
//     while (floor > 9) {
//         floor -= 9;
//     }
//       console.log(Math.ceil(porch), Math.ceil(floor));
// }
// searchFlat(768);
