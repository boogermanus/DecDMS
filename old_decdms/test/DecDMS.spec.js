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
        });

        it('should convert to 1.11', function() {
            converter.toDecimal(1,6,36).should.be.equal(1.11);
        });
    });

//longitudeToDecimal------------------------------------------------------------------------------------
    describe('longitudeToDecimal', function() {
       
        it('should convert to 1.11', function() {
            converter.longitudeToDecimal(1,6,36).should.be.equal(1.11);
        });

        it('should throw', function() {
            (function() {
                converter.longitudeToDecimal(-189.9,0,0)
            }).should.throw(`pUnit cannot be less than ${constant.MIN_LONG}`)
        });
    });
//latitudeToDecimal-------------------------------------------------------------------------------------
    describe('latitudeToDecimal', function() {
        it('should convert to 1.11', function() {
            converter.latitudeToDecimal(1,6,36).should.be.equal(1.11);
        });

        it('should throw', function() {
            (function() {
                converter.latitudeToDecimal(100,0,0);
            }).should.throw(`pUnit cannot be greater than ${constant.MAX_LAT}`)
        });
    });
});