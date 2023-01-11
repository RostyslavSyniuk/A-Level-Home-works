// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
// let weight = '88.3';
// let height = '1.75';

// const bmi = Number(weight) / Number(height)**2
// console.log(bmi); // 28.8

//-----------------------------------

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевірте, що буде в консолі при значеннях 27.3 і 27.9.
// let value = 27.3
// console.log(Math.floor(value))

// console.log(Math.ceil(value))

// console.log(Math.round(value))

// value = 27.9
// console.log(Math.floor(value))

// console.log(Math.ceil(value))

// console.log(Math.round(value))
// -----------------------------------

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;
// let minutes = totalMinutes % 60
// let hours = Math.floor(totalMinutes/ 60)
// let formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

// console.log(formatted)

//-----------------------------------

/*
 * Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
 * Результат виконання модального вікна записати в змінну, значення якої вивести в консоль.
 * */

// let result = prompt('Enter the number');

// console.log(result)
//-----------------------------------

/*
 * За допомогою модального вікна prompt отримати від користувача два числа.
 * Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного.
 * */

// const firstNumber = Number(prompt("Enter the first number"));
// const secondNumber = Number(prompt("Enter your second number"));
// console.log(firstNumber + secondNumber);
// console.log(firstNumber - secondNumber);
// console.log(firstNumber * secondNumber);
// console.log(firstNumber / secondNumber);
// console.log(firstNumber % secondNumber);
