// String: gopni4ek
// Попросите пользователя ввести строку через prompt. Используя split и join сделайте что бы после любой запятой следовало слово блин, .

// const sentence = prompt('Будь ласка, введіть довільне речення=)');
// console.log(sentence.split(" ").join(",блін "));

// String: greeting
// Спросите у пользователя имя, и поприветствуйте его с помощью alert.

// let sayHello = prompt('what is your name?')
// alert("Hello, " + `${sayHello}. ` + "I want you to be my friend!!! =)");

// String: capitalize
// Преобразуйте строку, введенную пользователем, таким образом, что бы первая буква становилась большой, а остальные - маленькими.

// let str = "cANBerRa";
// let result = str.toUpperCase()[0] + str.toLowerCase().slice(1);
// console.log(result);

// String: word count
// Посчитайте количество слов в строке. Используйте разбиение по пробелам. Длина массива называется так же, как и длина строки.

// let str = "Посчитайте количество слов в строке. Используйте разбиение по пробелам. Длина массива называется так же, как и длина строки";
// console.log(str.split(' ').length);

// String: credentials
// Спросите у пользователя ФИО, используя prompt трижды. Выкиньте лишние пробелы, используя .trim
// Используя String: capitalize сделайте так, что бы каждое слово в ФИО было с большой буквы, а остальные - маленькие
// Объедините эти три строки в одну переменную fullName и выведите куда-то(alert, console.log). Не забудьте пробелы между словами.

// let name = prompt('Enter name');
// let father = prompt('Enter father name');
// let surname = prompt('Enter surname');
// let fullName = name.trim().toUpperCase()[0] + name.trim().slice(1) +
//     " " + father.trim().toUpperCase()[0] + father.trim().slice(1) +
//     " " + surname.trim().toUpperCase()[0] + surname.trim().slice(1);
// console.log(fullName);

// String: beer
// Не використовуючи .replace замініть слово пиво в рядку на слово чай

// let str = "Було жарко. Василь пив пиво вприкуску з креветками";
// let result = str.split(" ");
// result.splice(4, 1, "чай");
// console.log(result.join(" "));

// String: no tag
// Найдите в строке HTML тэг.Удалите, т.е.вырежьте его - создайте другую строку, в которой будет все символы до тэга и после него
// Тэг может быть любым.split и join не используйте, вместо этого используйте indexOf и slice. .replace не используйте

// let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
// let result = 0;
// result = str.slice(0, 39) + str.slice(46);
// console.log(result);

// String: big tag
// На основе предыдущего задания сделайте тэг большими буквами.
// replace, split и join не используйте, вместо этого используйте indexOf и slice.

// let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
// let result = str.slice(0, 39) + str.slice(39, 46).toUpperCase() + str.slice(46);
// console.log(result);

// String: new line
// Попросите пользователя ввести строку через prompt.prompt не позволяет вводить многострочные строки.
// Дадим пользователю такую возможность - Пользователь может вводить \n в качестве маркера новой строки.
// Используя split и join сделайте эту строку воистину многострочной и выведите в консоль или через alert.

// let str = prompt("Write any text( '\\n' is break to a new line):");
// console.log(str.split("\\n").join("\n"));

// String: youtube
// Пусть пользователь введет любой текст с ссылкой на youtube. Используя регулярное выражение извлеките из ссылки идентификатор видоса и создайте строку с встраиваемым блоком HTML. Добавьте блок на страницу.
// объявите константу с регулярным выражением
// используйте метод match, который вернет вам массив
// извлеките из массива элемент с идентификатором видео
// изучите HTML код встраивания видео в страницу на youtube.
// используя интерполяцию строк вклейте идентификатор видео в HTML код встраивания видео
// используя document.write отправьте полученную строку на страницу.

// const reg = /www\.youtube\.com\/watch\?v\=((-|_)*(\w+(-|_)*\w+))/;
// const str = "https://www.youtube.com/watch?v=sU4S1kd12bw";
// const found = str.match(reg);
// document.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${found[1]}"
// title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
// gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
