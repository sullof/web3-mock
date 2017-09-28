
var providers = {};

var HttpProvider = function(nodeURI){

    if(!nodeURI) throw new Error('No http connection info provided');
    console.debug('web3 connected to ' + nodeURI);

};

providers.HttpProvider = HttpProvider;

module.exports = providers;