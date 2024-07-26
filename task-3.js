// Напиши скрипт, який порівняє два масива і виведе у консоль результат: true - якщо всі елементи однакові і false - в іншому випадку

const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30]; 
const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];
const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];
const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];
const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
const arr8 = [6, 'dream', -30, 10, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];


function arrayCompare(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (const element of array1) {
        if (!array2.includes(element)) {
            return false;
        }
    }
    return true;
}

console.log(arrayCompare(arr1, arr2));
console.log(arrayCompare(arr3, arr4));
console.log(arrayCompare(arr5, arr6));
console.log(arrayCompare(arr7, arr8));
console.log(arrayCompare(arr1, arr8));