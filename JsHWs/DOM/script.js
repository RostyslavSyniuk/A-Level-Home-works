// ств div
const div = document.createElement("div");
// додати до нього клас wrapper
div.classList.add("wrapper");
// помістити його в середину тега body
const body = document.body;
body.appendChild(div);
// ств заголовок H1'DOM'
const header = document.createElement("h1");
header.textContent = "DOM(Document Object Model)";
// додати H2 перед div з класом wrapper
div.insertAdjacentElement("beforebegin", header);
// ств список ul
// додати до нього 3 елементи з текстом "один, два, три"
const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;
// помістити список всередину елемента з класом wrapper
div.innerHTML = ul;
// ств зображення
const img = document.createElement("img");
// додати властивості до зображення
// 1. Додати атрибут source
img.src = "https://picsum.photos/240";
// 2. Додати атрибут width зі знач 240
img.width = 240;
// 3. Додати клас super
img.classList.add("super");
// 4. Додати властивість alt зі знач "Super man"
img.alt = "Super man";
// Помістити зображ в середину елем з класом wrapper
div.appendChild(img);
// використовуючи html рядок, ств div з класом 'pDIV' +з двома параграфами
const elemHTML = `
    <div class='pDiv'>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
    </div>
`;
// помістити цей DIV до елемента <ul></ul>
const ulList = div.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHTML);
// додати до 2-го параграфа клас text
const pDiv = document.querySelector(".pDiv");
pDiv.children[1].classList.add("text");
// видалити 1-й параграф
pDiv.firstElementChild.remove();
// ств функцію generateAutoCard
// яка приймає 3 аргумента: brand, color, year
const generateAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
  return `
        <div class='autoCard'>
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобіль ${brand.toUpperCase()} - ${year} року. Вік авто - ${curYear - year} років.</p>
            <p>Колір: ${color}</p>
            <button type='button' class='btn'>Видалити</button>
        </div>
    `;
};
// функція має повертати розмітку html:
// <div class='autoCard>
//     <h2>Brand Year</h2>
//     <p>Автомобіль Brand - Year року. Вік авто - Years років.</p>
// </div>

// ств новий div з класом autos
const carsDiv = document.createElement("div");
carsDiv.classList.add("autos");
// ств 3 картки авто, викор функцію generateAutoCard
const carsList = [
  { brand: "Tesla", year: 2015, color: "red" },
  { brand: "Lexus", year: 2016, color: "silver" },
  { brand: "Nissan", year: 2012, color: "black" },
];

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');
// помістити ці 3 картки всередину div з класом autos
carsDiv.innerHTML = carsHTML;
// помістити div з класом autos на сторінку DOM - до div з класом wrapper
div.insertAdjacentElement('beforebegin', carsDiv);
// додати кнопку Видалити на кожну картку авто

// за кліком на кнопку - видаляти картку зі структури DOM
// 1. вибрати всі кнопки
const buttons = document.querySelectorAll('.btn');
// 2. ств функцію видалення
function handClick(e) {
    const currentButton = e.currentTarget
    currentButton.closest('.autoCard').remove();
};
// 3. викор циклб щоб завести обробника події на кожну кнопку
buttons.forEach(button => {
    button.addEventListener('click', handClick)
});