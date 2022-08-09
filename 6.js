const date = require('date-and-time');
const now = new Date();
console.log(date.format(now, 'YYYY/MM/DD HH:mm:ss'));
console.log(date.format(now, 'ddd, MMM DD YYYY'));
console.log(date.format(now, 'hh:mm A [GMT]Z'));
console.log(date.format(now, 'hh:mm A [GMT]Z', true));

const pattern = date.compile('ddd, MMM DD YYYY');
console.log(date.format(now, pattern));