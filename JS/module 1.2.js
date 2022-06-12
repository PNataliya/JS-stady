// Example 1 - Ввод пользователя и ветвления
//Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

//Example 2 - Отображение времени (if...else)
//Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
  timestring = `${hours} ч. ${minutes} мин.`;
} else {
  timestring = `${hours} ч.`;
}
console.log(timestring);
