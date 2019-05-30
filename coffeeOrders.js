
const fs = require('fs')

const addOrder = (myOrders) => {
    const allOrders = loadOrders();
    allOrders.push({Order: myOrders});
    saveOrder(allOrders);
}

const saveOrder = (orders) => {
    const ordersJSON = JSON.stringify(orders);
    fs.writeFileSync('orders.json', ordersJSON);
}

const loadOrders = () => {
    try {
        const dataBuffer = fs.readFileSync('orders.json');
    return JSON.parse(dataBuffer)
    }
    catch (e){
    return [];
    }
}

const listOrders = () => {
    const allOrders = loadOrders();

    allOrders.map((order) => {
        console.log(order.Order)
    })
}

const removeOrder = (deletedOrder) => {
    const allOrders = loadOrders();

    const ordersToKeep = allOrders.filter((order) => {
        return order.Order !== deletedOrder
    })

    saveOrder(ordersToKeep);
}

module.exports = {addOrder, saveOrder, loadOrders, listOrders, removeOrder};