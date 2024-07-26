// Створіть об'єкт calculator із трьома методами:
// read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта;
// sum() - повертає суму збережених значень;
// mult() - перемножує збережені значення та повертає результат.

const calculator = {
    read(a, b) {
        this.arg1 = a;
        this.arg2 = b;
    },
    sum() {
        return this.arg1 + this.arg2;
    },
    mult() {
        return this.arg1 * this.arg2;
    },
}

calculator.read(2, 3);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mult());