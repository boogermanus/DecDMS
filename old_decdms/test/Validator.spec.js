const should = require('chai').should();
const validator = require('../src/Validator');
// const sinon = require('sinon'); might need to remove this
const constant = require('../src/constants');

describe('Validator', function() {
    let valid = new validator();
//validateUnits------------------------------------------------------------------------------------
    describe('validateUnits', function() {
        it('should throw for null value', function() {
            (function() {
                valid.validateUnits(null, 0, 0);
            }).should.throw("pUnit cannot be null");
        });

        it('should throw for value greater than 180', function() {
            (function() {
                valid.validateUnits(181.2, constant.MIN_LONG, constant.MAX_LONG);
            }).should.throw(`pUnit cannot be greater than ${constant.MAX_LONG}`);
        });

        it('should throw for value less than -180', function() {
            (function() {
                valid.validateUnits(-180.1, constant.MIN_LONG, constant.MAX_LONG);
            }).should.throw(`pUnit cannot be less than ${constant.MIN_LONG}`)
        });

        it('should return true for valid values', function() {
            valid.validateUnits(10).should.be.true;
            valid.validateUnits(-58.8).should.be.true;
        });
    });

//validateLong-------------------------------------------------------------------------------------
    describe('validateLong', function() {
        it('should not throw for valid input', function() {
            (function() {valid.validateLong(57.8, 24.5, 36.4)}).should.not.throw();
        });

        it('should throw for invalid input', function() {
            (function() {
                valid.validateLong(constant.MAX_LONG + 1, 0, 0);
            }).should.throw(`pUnit cannot be greater than ${constant.MAX_LONG}`)
        });

    });
//validateLat--------------------------------------------------------------------------------------
    describe('validateLat', function() {

        it('should not throw for valid input', function() {
            (function() {valid.validateLat(67, 22, 36.4)}).should.not.throw();
        });

        it('should throw for invalid input', function() {
            (function() {
                valid.validateLat(100,0,0);
            }).should.throw(`pUnit cannot be greater than ${constant.MAX_LAT}`);
        });
    });

//validateString-----------------------------------------------------------------------------------
    describe('validateString', function() {

        it('should throw for null input', function() {
            (function() {valid.validateString(null)}).should.throw();
        });

        it('should not throw for non null input', function() {
            (function() {valid.validateString("input")}).should.not.throw().and.be.true;
        })
    });

});