// Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значенням.
// Наприклад, функція fillArray(З, 'а') повертає масив ['а', 'а', 'а'].


function fillArray(times, value) {
  let array = [];
  for (let i = 0; i < times; i++) {
    array.push(value);
  }
  return array;
}

console.log(fillArray(3, 'a'));
console.log(fillArray(5, 5));
console.log(fillArray(2, true));