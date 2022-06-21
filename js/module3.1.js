//
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
