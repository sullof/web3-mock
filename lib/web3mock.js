
// Provide a mock web3 object for testing dApps
var httpProvider = require('./providers').HttpProvider;

function Web3(provider){

    this.connected = false;

    if(!provider){

        throw new Error('No provider provided');

    }

    this.connected = true;
    return this;

}

Web3.prototype.isConnected = function(){

    return this.connected;

};

module.exports = Web3;
