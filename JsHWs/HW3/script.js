// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.

// let i
// for(i = 1; i <= 10; i++){
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

// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?

// let paperBlock = 500;
// let paperBlockPerWeek = 1200 / paperBlock * 8;
// console.log(Math.ceil(paperBlockPerWeek))

// 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3

// function appartmentCount(appartment){
//     if(isNaN(appartment) || appartment <= 0){
//         console.log(`You enter wrong number`);
//         return 0;
//     }
//     let floor = Math.ceil(appartment / 3);
//     if(floor > 9){
//         floor -= 9;
//     }
//     let porch = Math.ceil(appartment/27);
//     console.log(`This appartment is on the ${floor} floor, in ${porch} porch`)
// }
// appartmentCount(22)
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

// myPyramid(7);