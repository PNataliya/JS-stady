// ====== task 4 ======
//Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
//После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `"There is no pizza with a name ${pizzaName} in the assortment."`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// //console.log(pizzaPalace.pizzas);
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
//==========================
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      return onError(pizzaName);
    }
    return onSuccess(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! There is no pizza with a name ${error} in the assortment."`;
}
// Method calls with callbacks
//console.log(pizzaPalace.pizzas);
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// ======== метод map() =======
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
//=========================

//============= task 5 ===========
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  orderedItems.forEach(async (orderedItems) => {
    totalPrice += orderedItems;
  });
  //   for (let i = 0; i < orderedItems.length; i += 1) {
  //     totalPrice += orderedItems[i];
  //   }

  // Change code above this line
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138)
console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503)
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //возвращает 1116
//================================

// ========= task 6 ============
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
  numbers.forEach((number) => {
    if (number > value) filteredNumbers.push(number);
  });
  //   for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] > value) {
  //       filteredNumbers.push(numbers[i]);
  //     }
  //   }

  // Change code above this line
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76]

// orderedItems.forEach(async (orderedItems) => {
//   totalPrice += orderedItems;
// });
//==============================

// ============== task 7 =========
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach./
console.log(`task 7`);

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  firstArray.forEach((firstArray) => {
    if (secondArray.includes(firstArray)) commonElements.push(firstArray);
  });

  //   for (let i = 0; i < firstArray.length; i += 1) {
  //     if (secondArray.includes(firstArray[i])) {
  //       commonElements.push(firstArray[i]);
  //     }
  //   }

  return commonElements;
  // Change code above this line
}
console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает []
// =============================
