// 1. blocks

// let a = 10
// {
//   let b = 20;
//   {
//         let c = 30;
//         let d;
//     // a = 10,b = 20,c = 30,d = underfined
//         console.log(a,b,c,d)
//     b++;
//     a *= 10;
//   }
//   {
//         let c = 50;
//         let d;
// a = 100,b = 21,c = 50,d = underfined
//         console.log(a, b, c, d);
//     b += 500;
//   }
//   {
//     const a = 100500;
//         const d = "value";
//         let c;
// a = 100500,b = 521,c = underfined,d = 'value'
// console.log(a, b, c, d);
// {
//   let a = -50;
//         b = 1000;
//         let c;
// a = -50,b = 1000,c = underfined,d = 'value'
//     console.log(a, b, c, d);
// }
// a = 100500,b = 1000,c = underfined,d = 'value'
//     console.log(a, b, c, d);
// }
// let c;
// let d;
// a = 100,b = 1000,c = underfined,d = underfined
//     console.log(a, b, c, d);
// }
// let b;
// let c;
// let d;
// a =100,b = underfined,c = underfined,d = underfined
// console.log(a, b, c, d);

// 2.comparison if

// var age = +prompt("Скільки вам років?", "");
// if (age < 0) {
//     alert("Бенжамін, це ти?");
// }else if(age < 18) {
//   alert("школяр");
// } else if (age < 30) {
//     alert("молодь");
// } else if (age < 45) {
//   alert("зрілий");
// } else if (age < 60) {
//   alert("досвідчений");
// } else if (age > 60) {
//   alert("як пенсія?");
// } else {
//   alert("мабуть кіборг");
// }

// 3.switch: if

// let color = prompt("Введіть колір", "");
// if (color == "red") {
//     document.write("<div style='background-color: red;'>червоний</div>");
//     document.write("<div style='background-color: black; color: white;'>черный</div>");
// } else if (color == "black") {
//     document.write("<div style='background-color: black; color: white;'>черный</div>");
// } else if (color == "blue") {
//     document.write("<div style='background-color: blue;'>синий</div>");
//     document.write("<div style='background-color: green;'>зеленый</div>");
// } else if (color == 'green') {
//   document.write("<div style='background-color: green;'>зеленый</div>");
// } else {
//   document.write("<div style='background-color: gray;'>Я не понял</div>");
// }

// 4.Напишите функцию noSwitch, которая принимает объект со значениями - функциями,
//     ключ для объекта и запускает одну из функций из объекта если ключ найден, иначе - запускает default:

// const drink = prompt("Что вы любите пить");
// noSwitch(drink, {
//   воду: () => console.log("Самый здоровый выбор!"),
//   чай() {
//     console.log("Вкусная и полезная штука. Не переусердствуйте с сахаром");
//   },
//   пиво: () => console.log("Хорошо летом, да в меру"),
//   виски: function () {
//     console.log("Да вы, батенька, эстет! Не забудьте лед и сигару");
//   },
//   default() {
//     console.log("шото я не понял");
//   },
// });
// noSwitch(пиво, this.чай)

// 5.closure calc

fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    for (i = 0; i < 10; i++){
      const btn = document.createElement("button");
      document.write('<p></p>')
      document.body.append(btn);
      let entering;
      btn.onclick = () => {
          entering = prompt("Enter current currrency");
          };
      let value = 36.7 * entering;
      btn.innerText = `${value}  uah`;
    }
    console.log(data); //изучите структуру, получаемую с сервера в консоли
  });
