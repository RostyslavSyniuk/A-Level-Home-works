"Literals";
// Найдите несколько окружающих объектов реального мира и создайте соответственные объекты Javascript.

// const person = {
//   name: "Rost",
//   surname: "Syniuk",
//   age: 25,
//   hair: "black",
//   like: confirm("do you like him?"),
//   girlfriend: {
//     name: "Vika",
//     surname: "Plotnitska",
//     age: 20,
//     [prompt('enter key')]: confirm("do you like her?"),
//   },
// };
// const car = {
//   model: "audi",
//   year: 2017,
//   color: "blue",
//   whiles: 4,
//   price: prompt("enter price you want"),
//   [prompt("enter key")]: confirm("do you like it?"),
// };
// console.log(person, car);

"Literals copy";
// Пусть пользователь введет еще одно свойство в переменную.
// Вставьте в новый объект эту переменную.Скопируйте объект из предыдущего задания в новый объект.

// car.mileage = 200;
// const newCar = { ...car };
// console.log(newCar);

"Html tree";
// Сделайте декларативную JSON-структуру для тэгов выше, в которой:
// каждый тэг будет объектом
// имя тэга будет полем tagName
// вложенные тэги будут в поле children
// набор аттрибутов тэга будет в поле attrs.

// var body = {
//   tagName: "body",
//   children: [
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "span",
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "name",
//           },
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "surname",
//           },
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "button",
//           attrs: {
//             id: "ok",
//           },
//           children: ["OK"],
//         },
//         {
//           tagName: "button",
//           attrs: {
//             id: "cancel",
//           },
//           children: ["CANCEL"],
//         },
//       ],
//     },
//   ],
// };

// console.log(body.children[1].children[1].children[0]);
// console.log(body.children[0].children[2].attrs.id);

("Parent");
// Добавьте каждому объекту тэга из предыдущего задания связь с родителем, используя свойство parent и присвоение

// console.log(body.children[0].father = body);
// body.children[1].father = body;
// console.log(body.children[0].children[0].father = body.children[0]);
// body.children[0].children[1].father = body.children[0];
// body.children[0].children[2].father = body.children[0];
// console.log(body.children[1].children[0].father = body.children[1]);
// body.children[1].children[1].father = body.children[1];

("Change OK");
// Добавьте(или измените) любой введенный пользователем атрибут тэга < button id = 'ok' > из задания HTML Tree.
// Пользователь также вводит значение этого атрибута.

// body.children[1].children[0].attrs[prompt("Enter new button attr")] = prompt("Enter this attr value");
// console.log(body.children[1].children[0]);

("Destructure");
// Используя деструктуризацию структуры из задания HTML Tree,
//   Выведите значения текста в тэге span,
//   Выведите значения текста во второй кнопке и
//   Выведите значение атрибута id во втором input.

// const { tagName, children: [{ children: [{ children }] },{children: [{},{children:[]}]}] } = body;
// console.log(children);
// const { children: [child1, { children: [child2, { children}] }] } = body;
// console.log(children[0]);
// const { children: [{ children: [child, child1, { attrs:{id} }] }] } = body;
// console.log(id);

("Destruct array");

// Напишите код, который используя деструктуризацию положит:
// четные числа в переменные even1, even2,
// нечетные в odd1, odd2, odd3,
// буквы в отдельный массив

// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
// [odd1, even1, odd2, even2, odd3, ...restOfArr] = arr;
// console.log(odd1, odd2, odd3);
// console.log(even1, even2);
// console.log(restOfArr);

("Destruct string");
// Напишите код, который используя деструктуризацию положит:
// число в переменную number
// букву a в переменную s1
// букву b в переменную s2
// букву c в переменную s3

// let arr = [1, "abc"];
// [number, [s1, s2, s3]] = arr;
// console.log(s1, s2, s3);
// console.log(number);

("Destruct 2");
// Извлеките используя деструктуризацию имена детей в переменные name1 и name2

// let obj = {
//   name: "Ivan",
//   surname: "Petrov",
//   children: [{ name: "Maria" }, { name: "Nikolay" }],
// };
// const { children: [{name:name1}, {name:name2}] } = obj;
// console.log(name1, name2);

("Destruct 3");
// Извлеките используя деструктуризацию объектов два первых элемента и длину массива в переменные a, b и length

// let arr = [1, 2, 3, 4, 5, 6, 7, 10]
// const { 0: a,1:b, length } = arr;
// console.log(a,b, length)

("Copy delete");
// Сделайте копию одного из объектов из задания Literals без ключа, который введет пользователь.

// const car = {
//   model: "audi",
//   year: 2017,
//   color: "blue",
//   whiles: 4,
// price: prompt("enter price you want"),
// [prompt("enter key")]: confirm("do you like it?"),
// };

// const { model, ...car1 } = car;
// car1.model = prompt('enter model')

// console.log(car1);

("Currency real rate");
// Ниже приведен код, который скачивает актуальную информацию о курсах валют. Скопируйте ссылку из него вставьте в браузер интереса ради. Реализуйте калькулятор обмена валют следующим образом:
// Пользователь вводит исходную валюту
// Пользователь вводит валюту, в которую происходит конвертация
// Пользователь вводит сумму в исходной валюте
// Пользовател видит результат конвертации

// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//       const cur = prompt('Enter currency ro exchange').toUpperCase();
//       const cur2 = prompt("Enter currency exchange to").toUpperCase();
//       const value = +prompt('Enter value');
//       const result = cur in data.rates && cur2 in data.rates ? alert(+value*(data.rates[cur]/data.rates[cur2])) : alert('Enter currency please');

//     console.log(data); //изучите структуру, получаемую с сервера в консоли
//   });

("Currency drop down");
// Сделайте выпадающий список с названиями всех валют, используя код из прошлого задания и накопление HTML - тэгов в строковой переменной.
// Для выпадающих списков в HTML предусмотрены тэги < select > и < option >

// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     let select = '<select>';
//     for (let cur in data.rates) {
//       select += `<option>${cur}</option>`;
//     }
//     select += '</select>';
//     document.write(select);
//   });

("Currency table");
// Сделайте двумерную таблицу с курсами между всеми возможными парами валют по типу таблицы Пифагора, используя заготовку из задания Currency real rate:

// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     let table = '<table>';
//     // table += '<td width="10px"> </td>';
//     for (keys in data.rates) {
//       table += "<tr>" + keys + "</tr > ";
//     }
//     for (key in data.rates) {
//       [] = [{ data }];

//     }
//     table += '</table>';
//     console.log(data);
//     document.write(table);
//   });

// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     const rates = data.rates;
//     const currencies = Object.keys(rates);
//     const table = [];

//     // Заполнение первой строки таблицы
//     const firstRow = ["Currency", ...currencies];
//     table.push(firstRow);

//     // Заполнение остальных строк таблицы
//     for (let i = 0; i < currencies.length; i++) {
//       const row = [];
//       row.push(currencies[i]);

//       for (let j = 0; j < currencies.length; j++) {
//         const rate = (1 / rates[currencies[i]]) * rates[currencies[j]];
//         row.push(rate.toFixed(2));
//       }

//       table.push(row);
//     }

//     // Вывод таблицы в консоль
//     for (let i = 0; i < table.length; i++) {
//       document.write(table[i].join("\t"));
//     }
//   })
//   .catch((error) => console.log(error));

("Form");
// Напишите код, который из любого объекта создает форму HTML.
// Например для такого объекта

// const car = {
//   Name: "chevrolet chevelle malibu",
//   Cylinders: 8,
//   Displacement: 307,
//   Horsepower: 130,
//   Weight_in_lbs: 3504,
//   Origin: "USA",
//   in_production: false,
// };

// function getHtmlForm(obj) {
//   const arrOfValues = Object.values(obj);
//   console.log(arrOfValues);
//   const form = document.createElement("form");
//   document.body.append(form);
//   let i = 0;
//   for (const key in obj) {
//     const label = document.createElement("label");
//     form.appendChild(label);
//     label.textContent = `${key}`;
//     const input = document.createElement("input");
//     label.appendChild(input);
//     const br = document.createElement("br");
//     form.appendChild(br);
//     input.value = arrOfValues[i];
//       if (typeof arrOfValues[i] === "number") {
//         input.type = "number";
//       } else if (typeof arrOfValues[i] === "string") {
//         input.type = "text";
//       } else if (typeof arrOfValues[i] === "boolean") {
//         input.type = "checkbox";
//         input.checked = "checked";
//       }
//     i++;
//     };
//   }
// getHtmlForm(car);

'Table'
// Дано любой массив с объектами. Сформировать таблицу (используя накопление тэгов HTML в строке):

// const persons = [
//   {
//     name: "Мария",
//     fatherName: "Ивановна",
//     surname: "Иванова",
//     sex: "female",
//   },
//   {
//     name: "Николай",
//     fatherName: "Иванович",
//     surname: "Иванов",
//     age: 15,
//   },
//   {
//     name: "Петр",
//     fatherName: "Иванович",
//     surname: "Иванов",
//     married: true,
//   },
// ];

// const arrOfColumn = [];
// for (pers of persons) {
//   for (key in pers) {
//     arrOfColumn.push(key);
//     }
// }
// const uniqueArrOfColumn = Array.from(new Set(arrOfColumn));
// let table = document.createElement('table');
// document.body.append(table);
// for (elem of uniqueArrOfColumn) {
//   let td = document.createElement('td')
//   table.appendChild(td);
//   td.innerText =`${elem}`;
// }
// for (perss of persons) {
//   let tr = document.createElement('tr');
//   table.appendChild(tr);
//   for (column of uniqueArrOfColumn) {
//     let td = document.createElement('td');
//     tr.appendChild(td);
//     if (perss[column]) {
//       td.innerText = `${perss[column]}`;
//     }
//   }
// }
// console.log(uniqueArrOfColumn);