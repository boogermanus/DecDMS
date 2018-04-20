const should = require('chai').should();
const convert = require('../src/DecDMS');
// const sinon = require('sinon'); might need to remove this
const constant = require('../src/constants');

describe('DecDMS', function() {
    let converter = new convert();
  //toDecimal--------------------------------------------------------------------------------------
    describe('toDecimal', function() {

        it('should convert to 1.0', function() {
            converter.toDecimal(1,0,0).should.be.equal(1.0);
        });

        it('should convert to 1.1', function() {
            converter.toDecimal(1,6,0).should.be.equal(1.1);
        })

        it('should convert to 1.11', function() {
            converter.toDecimal(1,6,36).should.be.equal(1.11);
        });
    });

//longToDecimal------------------------------------------------------------------------------------
    describe('longToDecimal', function() {
       
        it('should convert to 1.11', function() {
            converter.longToDecimal(1,6,36).should.be.equal(1.11);
        });

        it('should throw', function() {
            (function() {
                converter.longToDecimal(-189.9,0,0)
            }).should.throw(`pUnit cannot be less than ${constant.minLong}`)
        });
    });
//latToDecimal-------------------------------------------------------------------------------------
    describe('latToDecimal', function() {
        it('should convert to 1.11', function() {
            converter.latToDecimal(1,6,36).should.be.equal(1.11);
        });

        it('should throw', function() {
            (function() {
                converter.latToDecimal(100,0,0);
            }).should.throw(`pUnit cannot be greater than ${constant.maxLat}`)
        });
    });
//validateDecimalLong------------------------------------------------------------------------------
    describe('validateDecimalLong', function() {
        it('should throw error for values less than -180', function(){
            (function() {
                converter.validateDecimalLong(-190);
            }).should.throw(`pNumber cannot be less than ${constant.minLong}`);
        });

        it('should throw error for values greater than 180', function(){
            (function() {
                converter.validateDecimalLong(181.1);
            }).should.throw(`pNumber cano be greater than ${constant.maxLong}`);
        });

        it('should return ture if value is within range', function() {
            converter.validateDecimalLong(10.123).should.be.true;
        })
    });
});