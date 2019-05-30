
const {argv} = require('yargs')
const order = require('./coffeeOrders')

// console.log(process.argv)
// console.log(yargs.argv)

const command = argv._[0]


if ( command === 'add' ){
    console.log('adding order...');
    order.addOrder(argv.order);
}
else if ( command === 'remove' ){
    console.log('Removing Order...'); 
    order.removeOrder(argv.order);
}
else if ( command === 'read'){
    console.log('Reading Orders...');
    let content = order.loadOrders(argv.order);
    console.log(content);
}
else if ( command === 'list'){
    console.log('Your Orders Are...');
    order.listOrders();
}
// else if ( command === 'save'){
//     console.log('Saving Order...');
//     order.saveOrder();
// }
else {console.log('Unknown Command!');}

