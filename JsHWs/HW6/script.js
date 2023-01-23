// 1.Створити функцію, яка буде видаляти людей з масиву за індексом, який ми передамо параметром.

// let arr = ["Vasya", "Petya", "Alexey", "Vasyl", "Petro", "Olexiy", 'Andriy', 'Vadym', 'Ostap'];
// function deleteIndex(arr, index) {
    
//     for (i = 0; i < arr.length; i++)
//         if (index == i)
//             delete arr[i];
//     console.log(arr);
// }
// deleteIndex(arr, 2);

// 2.Створити функцію яка поверне всі ключі об'єкта, переданого параметром

// const obj = {
//     name: "Ros",
//     surname: "Syniuk",
//     age: 25,
//     city: "Kyiv",
//     country: "Ukraine",
//   };

// function getAllKeys(obj) {
//     return Object.keys(obj);
// }
// console.log(getAllKeys(obj));

// 3.Створити функцію, яка поверне всі значення об'єкта переданого параметром

// const obj = {
//     name: "Ros",
//     surname: "Syniuk",
//     age: 25,
//     city: "Kyiv",
//     country: "Ukraine",
// };
//   function getAllValues(obj) {
//   let arr = [];
//   for (let value in obj) {
//       arr.push(obj[value]);
//     }
//     return arr;
// }
// console.log(getAllValues(obj));

// 4.Створити функцію, де ми першим параметром передамо об'єкт з новим кандидатом,
// а другим параметром - id будь - якого кондидата в масиві condidateArr.
// Функція повинна буде вставити кандидата переданого через перший параметр до масиву
// перед кондидатом у якого id однакове тому, що передали у другому параметрі


// const condidateArr = [
//   {
//     age: 4,
//     name: "Petro",
//   },
//   {
//     age: 5,
//     name: "Andriy",
//   },
//   {
//     age: 6,
//     name: "Vika",
//   },
//   {
//     age: 7,
//     name: "Katya",
//   },
//   {
//     age: 8,
//     name: "Maksym",
//   },
// ];
// const obj1 = {
//   age: 3,
//   name: "Valya",
// };
// const obj2 = {
//   age: 2,
//   name: "Mariia",
// };
// const obj3 = {
//   age: 1,
//   name: "Valeriy",
// };

// function addCondidateToArr(newCondidate, age) {
//   condidateArr.splice(age - 1, 0, newCondidate);
//   return condidateArr;
// }
// console.log(addCondidateToArr(obj2, 4));