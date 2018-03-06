// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      host: '127.0.0.1',
      port: 8545,
      from: "0xf18c6865a9b55258d7b2dec518f6f63cd3643166",
      network_id: '3',
      gas: 4700000
    }
  }
}
