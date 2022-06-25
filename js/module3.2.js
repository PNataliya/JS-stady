// =========== task 41 =========
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${item.name} is already in your inventory!`;
      }
    }
    // const newProduct = {
    //   ...newPotion,
    // };

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];
      if (potionName === name) {
        potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i].name) {
        this.potions[i].name = newName;
        return;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

console.table(atTheOldToad.getPotions()); // вращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
console.table(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); // в массиве potions последним элементом будет этот объект
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); // в массиве potions последним элементом будет этот объект
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); // массив potions не изменяется  и  возвращает строку "Error! Potion Dragon breath is already in your inventory!"
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })); // массив potions не изменяется и  возвращает строку "Error! Potion Dragon breath is already in your inventory!"
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.removePotion("Dragon breath")); // в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.removePotion("Speed potion")); // в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
console.table(atTheOldToad.getPotions());
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
console.table(atTheOldToad.getPotions());
