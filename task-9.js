// Є o6'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суми замовлення і збережіть його результат у змінній totaLCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

const cart = {
    apple: 50,
    banana: 30,
    orange: 40,
};



// version 1
console.log(cart);

let totaLCost = 0;

for (const value of Object.values(cart)) {
    totaLCost += value;
}

console.log(totaLCost);


// version 2
function total(obj) {
    console.log(cart);

    let totaLCost = 0;

    for (const value of Object.values(obj)) {
        totaLCost += value;
    }

    return totaLCost;
}

console.log(total(cart));