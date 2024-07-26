// Додати метод getinfo в об'єкт user, який повертатиме інформацію про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 16. Position: Spiderman.`

const user = {
    name: 'Peter',
    surname: 'Parker',
    age: 16,
    position: 'Spiderman',
};

user.getInfo = function() {
    return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
}

console.log(user);
console.log(user.getInfo());