//======= task 10 =========
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);

  values.push(apartment[key]);
}
// ============================================

// =========task 11 =================
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
//Объявлена переменная advert.
// Значение переменной advert это объект.
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }

  // Change code above this line
}

// =========== task 12 =====================

//Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

//Объявлена функция countProps(object)
//Вызов countProps({}) возвращает 0
//Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
//Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
//Функция подсчитывает только собственные свойства объекта

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  // Change code above this line
  return propCount;
}
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// При использовании for..in в переменную key помещается сам ключ, являющийся строкой.

// Таким образом в текущей реализации собирается большая строка, содержащая имена всех перечислимых ключей.

// Для того, чтобы найти количество, достаточно было увеличивать счетчик на единицу
// ================================

// ====== task 13 ========
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// Значение переменной values получено с помощью цикла for...of.
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}
// =====================================
