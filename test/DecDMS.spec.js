const should = require('chai').should();
const convert = require('../src/DecDMS');
const sinon = require('sinon');
const constant = require('../src/constants');

describe('DecDMS', function() {
    let converter = new convert();

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

    describe('validateLong', function() {
        it('should not throw for valid input', function() {
            (function() {converter.validateLong(57.8, 24.5, 36.4)}).should.not.throw();
        });

        it('should throw for invalid input', function() {
            (function() {
                converter.validateLong(181, 0, 0);
            }).should.throw(`pUnit cannot be greater than ${constant.maxLong}`)
        });

    });

    describe('validateLat', function() {

        it('should not throw for valid input', function() {
            (function() {converter.validateLat(67, 22, 36.4)}).should.not.throw();
        });

        it('should throw for invalid input', function() {
            (function() {
                converter.validateLat(100,0,0);
            }).should.throw(`pUnit cannot be greater than ${constant.maxLat}`);
        });
    });

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