
var chai = require('chai'),
    expect = chai.expect,
    Web3 = require('../lib/web3mock'),
    web3Test = null;

describe('Web3 mock module',
    function(){

        it('Should require a provider to be provided to the constructor',
            function(){

                expect(
                    function(){

                        Web3()

                    }
                ).to.throw();

            }
        );

        it('Should have an HttpProvider object',
            function(){

                expect(Web3.providers).to.not.be.undefined;

            }
        );

        it('Should require an argument to the HttpProvider constructor',
            function(){

                expect(
                    function(){

                        Web3.providers.HttpProvider();

                    }
                ).to.throw();

            }
        );

        it('Should connect to a web3 provider',
            function(){

                var nodeURI = 'http://localhost:8645';
                web3Test = new Web3(new Web3.providers.HttpProvider(nodeURI));

                expect(typeof web3Test.isConnected).to.equal('function');

            }
        );

        it('Should return whether it is connected to a blockchain',
            function(){

                expect(web3Test.isConnected()).to.equal(true);

            }
        );

        it('Should return whether the blockchain is syncing or not',
            function(done){

                web3Test.eth.getSyncing(
                    function(error, result){

                        expect(error).to.equal(null);
                        expect(result).to.equal(false);

                        expect(web3Test.eth.syncing).to.equal(false);

                        done();

                    }
                )

            }
        );

        it('Should get the latest block number',
            function(done){

                web3Test.eth.getBlockNumber(
                    function(error, result){

                        expect(error).to.equal(null);
                        expect(result).to.equal(2744);

                        done();
                    }
                )

            }
        );

        it('Should retrieve a given block',
            function(done){

                web3Test.eth.getBlock(
                    function(error, block){

                        expect(error).to.equal(null);
                        expect(block.hash).to.equal("0x37cb73b97d28b4c6530c925d669e4b0e07f16e4ff41f45d10d44f4c166d650e5");

                        done();

                    }
                );

            }
        )


    }
);
