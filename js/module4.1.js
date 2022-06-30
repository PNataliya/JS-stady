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
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(pizzaName);
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
//   return `Error! There is no pizza with a name ${error} in the assortment."`;
// }
// // Method calls with callbacks
// //console.log(pizzaPalace.pizzas);
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// // ======== метод map() =======
// // const students = [
// //   { name: "Манго", score: 83 },
// //   { name: "Поли", score: 59 },
// //   { name: "Аякс", score: 37 },
// //   { name: "Киви", score: 94 },
// //   { name: "Хьюстон", score: 64 },
// // ];

// // const names = students.map((student) => student.name);
// // console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
// //=========================

// //============= task 5 ===========
// // Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// // Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;
// //   // Change code below this line

// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }

// //   // Change code above this line
// //   return totalPrice;
// // }

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(async (orderedItems) => {
//     totalPrice += orderedItems;
//   });
//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i];
//   //   }

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138)
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503)
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //возвращает 1116
// //================================

// // ========= task 6 ============
// // Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// // Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach((number) => {
//     if (number > value) filteredNumbers.push(number);
//   });
//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i]);
//   //     }
//   //   }

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76]

// // orderedItems.forEach(async (orderedItems) => {
// //   totalPrice += orderedItems;
// // });
// //==============================

// // ============== task 7 =========
// // Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// // Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach./
// console.log(`task 7`);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach((firstArray) => {
//     if (secondArray.includes(firstArray)) commonElements.push(firstArray);
//   });

//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i]);
//   //     }
//   //   }

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает []
// // =============================
// //===== task 7 ===========
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach((firstArray) => {
//     if (secondArray.includes(firstArray)) commonElements.push(firstArray);
//   });

//   return commonElements;
//   // Change code above this line
// }
// //=======================

// //========== task 8 =========
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };
// //=======

// //====== task 9 =======
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// //===============

// //===== task 10 ======
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(async (orderedItems) => {
//     totalPrice += orderedItems;
//   });

//   return totalPrice;
// };
// //=================

// //========= task 11 ===========
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) filteredNumbers.push(number);
//   });

//   // Change code above this line
//   return filteredNumbers;
// };
// //=================

// //====== task 12 ===
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((firstArray) => {
//     if (secondArray.includes(firstArray)) commonElements.push(firstArray);
//   });

//   // Change code above this line
//   return commonElements;
// };
// //===================

// //========= task 13 ========
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) newArray.push(number + value);
//     if (number % 2 !== 0) newArray.push(number);
//   });
//   return newArray;
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// //======================

// //=========== task 14 ===============
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// //====================

// //============= task 15 ==============
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);
// //=================

// //============= task 16 =======
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres);
// //==================

// //=========== task 17 =========
// const getUserNames = (users) => users.map((user) => user.name);
// //===================

// //======== task 18 ========
// const getUserEmails = (users) => users.map((user) => user.email);
// //====================

// //========== task 19 ========
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// //=========================

// //============ task 20 =============
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );
// //===================

// //============ task 21 ========
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// //==========================

// //============= task 22 =========
// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);
// //====================

// //============ task 23 ========
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(({ age }) => age >= minAge && age <= maxAge);
// // Change code above this line
// //========================

// //============ task 24 ========
// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));
// // Change code above this line
// //=========================

// //=========== task 25 =======
// const getFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// //===============

// //======= task 26 ======
// const getActiveUsers = (users) =>
//   users.filter((user) => user.isActive === true);
// // ==================

// // ======== task 27 =========
// const getInactiveUsers = (users) =>
//   users.filter((user) => user.isActive === false);
// // ========================

// //=========== task 28 ========
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((option) => option.title === BOOK_TITLE);
// const bookByAuthor = books.find((option) => option.author === AUTHOR);
// //===========================

// //========= task 29 =======
// const getUserWithEmail = (users, email) =>
//   users.find((option) => option.email === email);
// // Change code above this line
// //======================

// //========== task 30 ==============
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);
// //================================

// // ========== task 31 ============
// const isEveryUserActive = (users) =>
//   users.every((user) => user.isActive === true);
// //=======================

// //===== task 32 ======
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);
// //====================

// //======== task 33 =========
// const isAnyUserActive = (users) => users.some((user) => user.isActive === true);
// //=====================

// // ========= task 34 ====
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// // ====================

// //======== task 35 =======
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => (total += player.playtime / player.gamesPlayed),
//   0
// );
// //===================

// //======== task 36 ============
// const calculateTotalBalance = (users) =>
//   users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// //===========

// // ======= task 37 ===========
// const getTotalFriendCount = (users) =>
//   users.reduce((totalFriends, user) => totalFriends + user.friends.length, 0);
// //================

// // ======== task 38 =========
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));
// //=======================

// // ========= task 39 ========
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// //=========================

// // ======= task 40 ========
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// //========================

// // ====== task 41 =========

//console.log(`task 41`);
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((first, second) =>
//   first.author.localeCompare(second.author)
// );

// const sortedByReversedAuthorName = [...books].sort((first, second) =>
//   second.author.localeCompare(first.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (first, second) => first.rating - second.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (first, second) => second.rating - first.rating
// );

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);
//=====================

// ==== task 42 ======
// const sortByAscendingBalance = (users) =>
//   [...users].sort((first, second) => first.balance - second.balance);
// // =================

// // === task 43 ========
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort(
//     (first, second) => second.friends.length - first.friends.length
//   );
// // ================

// // ======= task 44 =========
// const sortByName = (users) =>
//   [...users].sort((first, second) => first.name.localeCompare(second.name));
// =======================

// ======== task 45 ==========
// console.log(
//   `task 45: "Bernard Cornwell", "Robert Sheckley", "Howard Lovecraft"`
// );
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((first, second) => first.localeCompare(second));

// console.log(names); // "Bernard Cornwell", "Robert Sheckley", "Howard Lovecraft"

// console.log(`==================`);
//students.filter((student) => student.score >= HIGH_SCORE);
// ========================
// ======= task 46 ========
// console.log(
//   `task 46: "Moore Hensley","Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"`
// );
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // Change code below this line
// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((first, second) => first.friends.length - second.friends.length)
//     .map((user) => user.name);

// console.table(getNamesSortedByFriendCount);
// Change code above this line
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort(
//     (first, second) => second.friends.length - first.friends.length
//   );
//   //
//   const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((first, second) => first.localeCompare(second));
//console.log(`==================`);
// ===================
// ==== task 47 ====
// console.log(
//   `task 47: ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]`
// );

// const getSortedFriends = users
//   .flatMap((user) => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((first, second) => first.localeCompare(second));
// console.table(getSortedFriends);

// console.log(`==================`);
// ===============
// ===== task 48 ====
console.table(`task 48: Если значение параметра gender это строка "male", функция возвращает число 12053
Если значение параметра gender это строка "female", функция возвращает число 8863`);
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

const getTotalBalanceByGender = (users, gender) =>
  users.map((user) => student.gender);
//users.find((option) => option.gender === gender);
//
//const isAnyUserActive = (users) => users.some((user) => user.isActive === true);
//
// students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// users.Map((user) => user.gender);
// users.reduce((totaBalance, user) => totaBalance + user.balance, 0);

console.table(getTotalBalanceByGender);
//const getUserWithEmail = (users, email) => users.find((option) => option.email === email);
//.find(option => option.label === "blue");
//.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
//// const getSortedFriends = users
//   .flatMap((user) => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((first, second) => first.localeCompare(second));
//============================================
// console.log(`exam from conspect`);
// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "физика"] },
//   { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//   { name: "Киви", score: 94, courses: ["литература", "информатика"] },
// ];
// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']

// ===================================
// //======= exam from conspect ======
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);
// //================================
