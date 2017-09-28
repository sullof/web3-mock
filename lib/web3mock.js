
// Provide a mock web3 object for testing dApps
var httpProvider = require('./providers').HttpProvider,
    eth = require('./eth'),
    net = require('./net');

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

Web3.prototype.isAddress = function(){

    return true;

};

Web3.providers = {
    HttpProvider : httpProvider
};

Web3.eth = eth;
Web3.net = net;


module.exports = Web3;
