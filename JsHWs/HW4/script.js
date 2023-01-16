// 1) Даний об'єкт з містами та країнами. Вивести масив значення в якому будуть рядки перетворені на цей формат: <Столиця> - це <Країна>.


// const countries = {
//     'Ukraine' : 'Kyiv',
//     'Poland' : 'Warsaw',
//     'USA' : 'Washington',
//     'United Kingdom' : 'London',
//     'Lithuania' : 'Vilnius'
// }
// const arr = Object.entries(countries);
// arr.forEach(([key, value]) => {
//   console.log(value + "- is the capital of " + key);
// });

// 2) Створити функцію яка виведе багатовимірний масив A. Даний масив містить список інших масивів B. Масиви B повинні містити по 3 значення. Та вивести його максимальне значення

// const A_array = [[23,51,36],[22,11,33],[7,9,11],[10,1,24],[46,24,2]];
// function multiArr(A_array){
//     let maxValue = A_array[0][0];
//     for (i of A_array) {
//       for (j of i) {
//         if (j > maxValue) {
//           maxValue = j;
//         }
//         }
//     }
//   console.log(maxValue);
// }
// multiArr(A_array);

// 3) Створити об'єкт із назвами днів тижня. Де ключами будуть uk і en, a значенням властивості uk буде масив із назвами днів тижня українською, а en - англійською. Після написати функцію яка буде виводити в консоль назву дня тижня, користуючись вище створеним об'єктом. Усі дні тижня починаються з 1 і закінчуються цифрою 7 (1- понеділок, 7 - неділя). Функція отримує змінну lang – назву мови дня тижня та змінну day – число дня тижня.

// const days = {
//     'UA': ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'],
//     'EN': ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
// }
// function getDay(lang, day) {
//     const rank = day - 1;
//     if (isNaN(day) || day < 1 || day > 7) {
//         console.log('Please enter day number 1-7');
//     } else if (days.hasOwnProperty(lang)) {
//         console.log(days[lang][rank]);
//     } else {
//         console.log('Choose UA or EN option');
//     }
// }
// getDay('EN', 2);

// 4) Створіть функцію, яка повертає суму двох найменших позитивних чисел із масиву мінімум 4 позитивних цілих чисел. Не передаються числа з плаваючою комою або непозитивні цілі числа.

// const arrayOfNumbers = [1, 5, 5.5, 17, 22, -1, -2, 1.2, 3, 55];

// function getArrayMinSum(array) {
//   let arr = [];
//     while(arr.length < 2) {
//         let temp = array[0];
//         let index = 0;
//         for(let i = 0; i < array.length; i++) {
//             if(!Number.isInteger(array[i]) || array[i] < 1) {
//                 continue;
//             }
//             if(array[i] < temp) {
//                 temp = array[i];
//                 index = i;
//             }
//         }
//         arr.push(temp);
//         array.splice(index,1);
//     }

//     const add = arr => arr.reduce((a, b) => a + b, 0);
//     let sum = add(arr);
//     console.log(sum);
// }
// getArrayMinSum(arrayOfNumbers);

// 5) Даний масив одиниць і нулів, перетворіть еквівалентне двійкове значення ціле число.
// Наприклад: [0, 0, 0, 1] розглядається як 0001 двійкове уявлення 1.

// const binaryArr = ["1", "1", "1", "0", "0"];
// const str = binaryArr.join("");
// let transform = parseInt(str, 2);

// console.log(transform);