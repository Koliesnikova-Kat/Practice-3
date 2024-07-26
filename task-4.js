// Напишіть функцію calculateAverage(), яка приймає довільну кількість аргументів і повертає їхнє середнє значення
// Додати перевірку, що аргумемти - це числа.


function calculateAverage(...args) {
    let sum = 0;
    let count = 0;
    for (const argument of args) {
        if (typeof argument === 'number') {
            sum += argument;
            count += 1;
        }
    }    
    return sum / count;
}

console.log(calculateAverage(12, 14));
console.log(calculateAverage(1, 2, 'number', 5));
console.log(calculateAverage(15, 3, false));
console.log(calculateAverage(19, 23, '2'));