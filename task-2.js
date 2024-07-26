// Написати функцію сlearArray(array), котра створить новий масив, в якому не буде значень, які призводяться до false.

const array = [
    1,
    0,
    54,
    'doc',
    null,
    'jpg',
    undefined,
    '',
    'png',
    'exe',
    false,
    'mp4',
    NaN,
    'hbs',
];


function clearArray(array) {
    const newArray = [];
    for (const part of array) {
        if (part) {
        newArray.push(part);
        }
    }
    return newArray;
}

console.log(clearArray(array));