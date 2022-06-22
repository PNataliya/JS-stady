// console.log('module 02.1');

// {
//   a = 10;
//   console.log('a:', a);

//   a = 15;
//   console.log('a:', a);
// }

// console.log('a:', a);

// ===== example ======
// name.length === 4
// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]
//               4        6         5        4
// const users = ['Ryan', 'Kieran', 'Jason', 'Yous'];
// const output = [];

// for (const name of users) {
//   if (name.length === 4) {
//     output.push(name);
//   }
// }

// console.log(output);

// ===== example ======
// const numbers = [12, 3232, 6666, 3, 98789];
// const output = [];

// for (const number of numbers) {
//   if (String(number).length === 4) {
//     output.push(number);
//   }
// }

// console.log(output);

// ===== example =====
// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// const num2 = numbers;
// console.log(num2); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// console.log(num2); // [1, 2, 3, 4, 5]

// numbers = [];
// console.log(numbers); // []

// ============================================
// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

// const genres = ['Jazz', 'Blues']; // Создайте массив genres с элементами «Jazz» и «Blues».

// genres.push('Rock & Roll'); // Добавьте «Рок-н-ролл» в конец.
// console.log(genres[0]); // Выведите в консоль первый элемент массива.
// console.log(genres[genres.length - 1]); // Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// console.log(genres.shift()); // Удалите первый элемент и выведите его в консоль.

// genres.unshift('Country', 'Reggae'); // Вставьте «Country» и «Reggy» в начало массива.
// console.log(genres);

// ============================================
// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// function getSquare(str) {
//   const [x, y] = str.split(' ');
//   //   const x = arr[0];
//   //   const y = arr[1];

//   return Number(x) * Number(y);
// }

// console.log(getSquare('8 11'));
// console.log(getSquare('10 11'));

// ============================================
// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате
// номер_элемента: значение_элемента
// Нумерация элементов должна начинаться с 1.

// const fruits = ['яблоко', 'виноград', 'абриеок', 'банан', 'лимон'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

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

// ============================================
// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const strArr = string.split(' ');

// strArr.shift();
// strArr.pop();

// console.log(`"${strArr.join(' ')}"`);

// ============================================
// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.
// "abc def" => "fed cba"

// const string = 'Welcome to the future';
// const letters = string.split('');
// const reversedStr = [];

// for (let i = letters.length - 1; i >= 0; i -= 1) {
//   reversedStr.push(letters[i]);
// }

// console.log(reversedStr.join(''));
// console.log(string.split('').reverse().join(''));

// ============================================
// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// for (let x = 0; x < langs.length; x += 1) {
//   for (let y = x + 1; y < langs.length; y += 1) {
//     const lang1 = langs[x];
//     const lang2 = langs[y];

//     if (lang1[0] > lang2[0]) {
//       langs[y] = lang1;
//       langs[x] = lang2;
//     }
//   }
// }

// console.log(langs);

// ===== swap =====
// let a = 1;
// let b = 2;

// [b, a] = [a, b];

// console.log('a:', a);
// console.log('b:', b);

// ============================================
// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];

// let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }

//   if (number > max) {
//     max = number;
//   }
// }

// console.log(min); // 1
// console.log(max); // 94

// ====== spread ======
// const numbers = [2, 17, 94, 1, 23, 37];

// console.log(...numbers);
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr1.push(4);
// console.log(arr1);
// console.log(arr2);

// ===== rest ======
// function sum(a, b, ...rest) {
//   console.log(rest);

//   return a + b;
// }

// console.log(sum(1, 1, 3, 4, 5, 3, 3, 2, 4));

// ===== arguments =====
// function sum(...rest) {
//   console.log(arguments);
//   //   return a + b;
// }

// console.log(sum(1, 1, 3, 4, 5, 3, 3, 2, 4));

// ========= example =========
// a поясніть будь ласка, як правильно сумувати в функції число.
// Наприклад фунція число 7,
// потрібно сумувати 1+2+3+4+5+5+7 = сумма

// function sumRange(num) {
//   // 1 ... num
//   let sum = 0;

//   for (let i = 1; i <= num; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumRange(2)); // 3
// console.log(sumRange(3)); // 6
// console.log(sumRange(7)); // 28
