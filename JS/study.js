// * Напиши скрипт обработки покупки в магазине.
// * - Баланс пользователя хранится в переменной balance;
// * - сумма покупки зранится в переменной  payment;
// * - Перед проверкой вывести сообщение: "Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету."
// * - Если сумма покупки

// === Вариант 1 ====
// let balance1 = 10000;
// const payment1 = 2000;
// const preMassege = `Общая стоимость заказа ${payment1} кредитов.\n Проверяем количество доступных средств на счету.`;
// console.log(preMassege);

// if (payment1 <= balance1) {
//   const total = balance1 - payment1;
//   const messegeOk = `На счету осталось ${total} кредитов.`;
//   console.log(messegeOk);
// } else if (payment1 > balance1) {
//   const messegeNo = `На счету не достаточно средств для проведения операции.`;
//   console.log(messegeNo);
// }
// const messegeEnd = `Операция завершена.`;
// console.log(messegeEnd);

// === Вариант 2 ====

// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов.\n Проверяем количество доступных средств на счету.`
// );

// if (payment <= balance) {
//   balance -= payment;

//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log(`На счету недостаточно средств для проведения операции`);
// }

// console.log(`Операция завершена`);
