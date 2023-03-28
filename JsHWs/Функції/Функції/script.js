// createPerson
// Создайте функцию createPerson, которая принимает два параметра: name и surname, и возвращает объект с ключами name, surname, getFullName.
// getFullName должна быть функцией, которая работает с объектом через this, а так же готова к тому, что в объекте в последствии добавить ключ fatherName

// function creatPerson(name, surname) {
//     const obj = {
//         name,
//         surname,
//         getFullName: function () {
//             return `${this.name} ${this.surname}`;
//         },
//     }
//     console.log(obj.getFullName())
//     return obj;

// }
// console.log(creatPerson('Vasya', 'Petrenko'))

// createPersonClosure;

function createPersonClosure(name, surname) {
  const obj = {};
  let age = 25;
  let fatherName = "Valeriy";
  function getName() {
    obj.name = name;
    return `${obj.name}`;
  }
  getName();
  function getSurname() {
    obj.surname = surname;
    return `${obj.surname}`;
  }
  getSurname();
  function getFatherName() {
    obj.fatherName = fatherName;
    return `${obj.fatherName}`;
  }
  getFatherName();
  function getAge() {
    obj.age = age;
    return `${obj.age}`;
  }
  getAge();
  function getFullName() {
    obj.fullName = `${obj.name} ${obj.fatherName} ${obj.surname}`;
    return obj.fullName;
  }
  getFullName();
  function setName(newName) {
    if (newName[0] == newName[0].toUpperCase()) {
      obj.name = newName;
    } else {
      return name;
    }
    return newName;
  }
  setName("Vadym");
  function setSurname(newSurname) {
    if (newSurname[0] == newSurname[0].toUpperCase()) {
      obj.surname = newSurname;
    } else {
      return surname;
    }
    return newSurname;
  }
  setSurname("Bandera");
  function setFatherName(newFatherName) {
    if (newFatherName[0] == newFatherName[0].toUpperCase()) {
      obj.fatherName = newFatherName;
    } else {
      return fatherName;
    }
    return newFatherName;
  }
  setFatherName("Vasyl");
  function setAge(newAge) {
    return 0 <= newAge && newAge <= 100 ? (obj.age = newAge) : age;
  }
  setAge(101);
  function setFullName(newFullName) {
    obj.fullName = newFullName;
  }
  setFullName(`${obj.name} ${obj.surname} ${obj.fatherName}`);
  console.log(obj);
  return obj;
}
createPersonClosure("Rostyslav", "Syniuk");

// createPersonClosureDestruct
// Сделайте набор параметров функции из предыдущего задания объектом, используйте деструктуризацию для извлечения параметров.
// Задайте значения по умолчанию

function createPersonClosureDestruct() {
  let anotherPerson = createPersonClosure();
  let { name, surname } = anotherPerson;
  return name,surname;
}
createPersonClosureDestruct();

// isSorted
// Напишите функцию isSorted, которая принимает набор параметров любого размера,
// и возвращает true, когда все параметры - это числа, и каждое из них больше предыдущего параметра.

// function isSorted() {
//   let i;
//   for (i = 1; i < arguments.length; i++) {
//     console.log(i);
//     if (
//       arguments[i] === Number(arguments[i]) &&
//       arguments[i - 1] < arguments[i]
//     ) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSorted(1, 2, 3, 4, 5, 6, 7));

// personForm

// Напишите функцию, которая принимает два параметра: родительский DOM - элемент и объект - результат работы createPersonClosure
// (или createPersonClosureDestruct, результаты у обоих этих функций одинаковые) и рисует форму, которая позволяет редактировать данные о персоне.
// В начале работы personForm создает 5 полей ввода (имя, фамилия, отчество, возраст, ФИО) в родительском DOM-элементе и устанавливает туда значения, прочитанные с помощью getName, getSurname и т.д.
// По событию oninput в любом из полей ввода нужно запускать соответствующий set..... Например при изменении поля ввода имени должен запускаться setName(какой - то инпут.value).
// Функции set... возвращают значение, и его нужно занести обратно в input.Таким образом в полях ввода невозможно будет ввести некорректные значения(например возраст не сможет выйти за пределы 0 - 100 лет)

// function personForm(domElem, person) {

// }
// personForm();
//  domElem = document.createElement("form");
//   let input;
//   domElem.innerText = 'I"m a form';
//   const namesArr = ["Name", "Surname", "fatherName", "age", "fullName"];
//   // const getValues = [
//   //   getName(),
//   //   getSurname(),
//   //   getFatherName(),
//   //   getAge(),
//   //   getFullName(),
//   // ];
//   for (i = 0; i < 5; i++) {
//     input = document.createElement("input");
//     span = document.createElement("span");
//     currentForm.append(span, input);
//     input.style.marginRight = "15px";
//     span.innerText = `${namesArr[i]}`;
//     // input.value = `${getValues[i]}`;
//   }
//     console.log(input.value);
