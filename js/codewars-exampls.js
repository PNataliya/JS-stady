//Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

//Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не...
//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

const friends = ["Ryan", "Kieran", "Jason", "Yous"];
const output = [];

for (const name of friends) {
  if (friends.length === 4);
  output.push(name);
}

console.log(output);

// ============ автопроверка модуль 2.1 ==== задача 11/32 ============

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

//Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

//Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  //const totalWords = message.length;
  let newMessage = message.split(" ");
  const newMessageLength = newMessage.length;
  //let totalPrice = newMessage;
  //console.log(newMessageLength);
  //console.log(newMessage.length);
  //console.log(pricePerWord);
  return newMessageLength * pricePerWord;
  //* return {
  // возвращает объект с именами
  // message, // то же самое что и message: message,
  // pricePerWord, //то же самое что и pricePerWord: pricePerWord,

  // Change code above this line
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

//============

function slugify(title) {
  // Change code below this line
  return title.toLowerCase().split(" ").join("-");

  // Change code above this line
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// ============================================
// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log(namesArr);
// console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   const nameWithEnding = `${namesArr[i]}:`;
//   console.log(`${nameWithEnding.padEnd(10, ' ')} ${phonesArr[i]}`);
// }

//===========================
function slugify(string) {
  return string.toLowerCase().split(" ").join("-");
}

console.log(slugify("Arrays for begginers"));
//=======================

// ========= example =========
// a поясніть будь ласка, як правильно сумувати в функції число.
// Наприклад фунція число 7,
// потрібно сумувати 1+2+3+4+5+5+7 = сумма

//function sumRange(num) {
// 1 ... num
//let sum = 0;

//for (let i = 1; i <= num; i += 1) {
// sum += i;
//}

//return sum;
//}

//console.log(sumRange(2)); // 3
//console.log(sumRange(3)); // 6
//console.log(sumRange(7)); // 28
//=============================

// function calculateTotal(number) {
//   // Change code below this line

//   sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;

// Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(6));
// console.log(calculateTotal(28));
// console.log(calculateTotal(171));
// console.log(calculateTotal(300));

//=============================
//Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
  let stringSplit = string.split(" ");
  let longestWord = "";
  let longOfWord = 0;
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i].length > longOfWord) {
      longOfWord = stringSplit[i].length;
      longestWord = stringSplit[i];
    }
  }

  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

//===========

// let a = "Hello world";
// let chars = a.split(" ");

// let words = [];
// chars.forEach(function (str) {
//   words.push({ word: str, length: str.length });
// });
// console.log(words[0].length); //5
// console.log(words[0].word); //"Hello"

//=====================
//Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.
//Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
//В цикле for использовался метод push
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i++) numbers.push(i);

  // Change code above this line
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
