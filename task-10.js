// Розрахувати загальну суму всіх замовлень та вивести інформацію у форматі:
// 'Загальна сума всіх замовлень: totalAmount'

const orders = [
{ id: 1, product: 'Футболки', quantity: 2, price: 15 },
{ id: 2, product: 'Шорти', quantity: 3, price: 20 },
{ id: 3, product: 'Кросівки', quantity: 1, price: 50 }
];

let totalAmount = 0;

for (const order of orders) {
    totalAmount += (order.quantity * order.price)
}

console.log(`Загальна сума всіх замовлень: ${totalAmount}`);