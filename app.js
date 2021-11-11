const price = require('./price')

const query = process.argv.slice(2);

price.get(query[0], query[1], query[2]);