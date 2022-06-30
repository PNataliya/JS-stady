// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

function multiply() {
  let sum = 0;
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      sum *= arguments[i];
    }
    console.log(sum);
  } else console.log(0);
}

multiply();

// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reversString(str) {
  let arr = str.split("");
  console.log(arr.reverse().join(""));
}

reversString("Hello world!");

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

function getCodeStringFromText(str) {
  let arr = str.split("");
  let arr2 = [];
  for (let i = 0; arr.length > i; i++) {
    arr2.push(str.charCodeAt(i));
  }
  console.log(arr2.join(" "));
}

getCodeStringFromText("hello world!");

// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function randomNumber(x) {
  let y = Math.floor(Math.random() * 10 + 1);
  if (!isNaN(x) && x > 0 && x < 11) {
    if (x === y) {
      console.log("Вы выиграли");
    } else {
      console.log(`Вы не угадали ваше число ${x} а выпало число ${y}`);
    }
  }
}

randomNumber(1);

// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
function getArray(x) {
  let arr = [];
  for (let i = 0; i < x; i++) {
    arr.push(i + 1);
  }
  console.log(arr);
}
getArray(10);

// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(x) {
  let arr2 = [];
  for (let i = 0; i < x.length; i++) {
    arr2.push(x[i]);
  }
  console.log(x.concat(arr2));
}

doubleArray([1, 2, 3]);

// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollections() {
  let x = arguments;
  let arr = [];
  console.log(x.length);
  for (let i = 0; i <= x.length - 1; i++) {
    arguments[i].splice(0, 1);
    arr[i] = arguments[i];
  }
  console.log(arr);
}

changeCollections([1, 2, 3], ["a", "b", "c"]);

// Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
