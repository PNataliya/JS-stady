// Example 1 - Базовые математические операторы

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);

const diff = grapes - apples;
console.log(diff);

// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

let students = 100;
students += 50;
console.log(students);

// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

const result = 108 + 223 - 2 * 5;
console.log(result);

// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

const value = 27.5;
console.log(Math.floor(27.5));
console.log(Math.ceil(27.5));
console.log(Math.round(27.5));

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;
console.log(`Example 6, рассмотреть пример`);

let weight = "88,3";
weight = Number.parseFloat(weight);
let height = "1.75";
height = Math.pow(Number.parseFloat(height), 2);

const bmi = weight / height;
console.log(bmi.toFixed(1)); // 28.8 == мой результат 28.7

// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений? Запинается на лжи

console.log("1", 5 > 4); // true

console.log("2", 10 >= "7"); // true

console.log("3", "2" > "12"); // true

console.log("4", "2" < "12"); // false

console.log("5", "4" == 4); // true

console.log("6", "6" === 6); // false

console.log("7", "false" === false); // false

console.log("8", 1 == true); // true

console.log("9", 1 === true); // false

console.log("10", "0" == false); // true

console.log("11", "0" === false); //false

console.log("12", "Papaya" < "papaya"); // true

console.log("13", "Papaya" === "papaya"); // false

console.log("14", undefined == null); // true

console.log("15", undefined === null); // false

// Example 8 - Логические операторы
// Каким будет результат выражений? Запинается на правде

console.log("1", true && 3); // 3

console.log("2", false && 3); // false

console.log("3", true && 4 && "kiwi"); // "kiwi"

console.log("4", true && 0 && "kiwi"); // 0

console.log("5", true || 3); // true

console.log("6", true || 3 || 4); // true

console.log("7", true || false || 7); // true

console.log("8", null || 2 || undefined); // 2

console.log("9", (1 && null && 2) > 0); // false

console.log("10", null || (2 && 3) || 4); // 3

// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную totalValue присваивалось значение переменной incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

const incomingValue = 5;
const defaultValue = 10;
const totalValue = incomingValue ?? defaultValue;

console.log(totalValue); // 5

// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24: 01

//  1. написать переменные
// 2. перевести в минуты и найти остаток от деления на 60
// 3. указать что значение часов и минут состоит из двух знаков,
//    если первого знака нет -  на его место ставить ноль.
// 4. залогировать через шаблонную строку

const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

//Методы replace() и replaceAll() ( Не поняла)
//Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение.

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css»

// Метод slice()  Не поняла)
// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.

const productName = "Repair droid";

console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // «droid»
