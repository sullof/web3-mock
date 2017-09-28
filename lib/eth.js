
var eth = {};

eth.getSyncing = function(callBack){

    callBack(null, false);

};

eth.syncing = false;

// Get latest block
eth.getBlockNumber = function(callBack){

    callBack(null, 2744);

};

eth.getBlock = function(){


};

eth.getGasPrice = function(){

};

eth.getTransaction = function(){

};

eth.getBalance = function(){

};

eth.filter = function(){

};

module.exports = eth;