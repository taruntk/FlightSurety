var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "conduct clip start laundry hour ridge claw roof small feature debris reject";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost
      port: 8545,           // Standard Ganache UI port
      network_id: "*",
      gas: 6721975
    }
  },
  compilers: {
    solc: {
      version: "^0.5.10"
    }
  }
};
