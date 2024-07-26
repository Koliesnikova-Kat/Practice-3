// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

const user = {
    name: 'Igor',
    car: 'Mercedes',
    carColor: 'black',
};

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Southern Gothic",
    yearPublished: 1960,
    isBestseller: true,
}


// version 1
function checkKeyInObject(obj, key) {
    for (const element in obj) {
        if (element === key) {
            return true;
        }
    }
    return false;
}

console.log(checkKeyInObject(user, 'car'));
console.log(checkKeyInObject(user, 'age'));
console.log(checkKeyInObject(book, 'rating'));
console.log(checkKeyInObject(book, 'title'));


// version 2
function checkKeyInObject(obj, key) {
    return Object.keys(obj).includes(key);
}

console.log(checkKeyInObject(user, 'car'));
console.log(checkKeyInObject(user, 'age'));
console.log(checkKeyInObject(book, 'rating'));
console.log(checkKeyInObject(book, 'title'));