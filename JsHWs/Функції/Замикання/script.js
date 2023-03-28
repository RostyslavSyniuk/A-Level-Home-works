// makeProfileTimer
// Напишите функцию makeProfileTimer, которая служит для замера времени выполнения другого кода и работает следующим образом:

// function makeProfileTimer() {
//     var t0 = performance.now();
//     alert('timer()');
//     var t1 = performance.now();
//     return alert(t1 - t0);
// }
//    makeProfileTimer();

// makeSaver
// Напишите функцию makeSaver, которая:

var saver = makeSaver(Math.random);

// saver = function (math) {
//     return math * Math.random();
// }
// saver(Math.random())
var value = saver();
var value1 = saver()

console.log(value1 === value)