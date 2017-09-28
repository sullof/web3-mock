
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
        )



    }
);
