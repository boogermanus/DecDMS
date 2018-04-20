const should = require('chai').should();
const convert = require('../src/DecDMS');
// const sinon = require('sinon'); might need to remove this
const constant = require('../src/constants');

describe('Validator', function() {
    let converter = new convert();
//validateUnits------------------------------------------------------------------------------------
    describe('validateUnits', function() {
        it('should throw for null value', function() {
            (function() {
                converter.validateUnits(null, 0, 0);
            }).should.throw("pUnit cannot be null");
        });

        it('should throw for value greater than 180', function() {
            (function() {
                converter.validateUnits(181.2, constant.minLong, constant.maxLong);
            }).should.throw(`pUnit cannot be greater than ${constant.maxLong}`);
        });

        it('should throw for value less than -180', function() {
            (function() {
                converter.validateUnits(-180.1, constant.minLong, constant.maxLong);
            }).should.throw(`pUnit cannot be less than ${constant.minLong}`)
        });

        it('should return true for valid values', function() {
            converter.validateUnits(10).should.be.true;
            converter.validateUnits(-58.8).should.be.true;
        });
    });
});