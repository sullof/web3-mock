
var chai = require('chai'),
    expect = chai.expect,
    Web3 = require('../lib/web3mock');

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
        )





    }
);
