const should = require('chai').should();
const convert = require('../LLConverter');
const sinon = require('sinon');
const constant = require('../constants');

describe('LLConverter', function() {
    let converter = new convert();

    describe('validateUnits', function() {
        
        let spyValidate = sinon.spy(converter,"validateUnits");
        beforeEach(function() {
            //reset so that we only have one exception per call
            spyValidate.reset();
        });

        it('should throw for null value', function() {
            try {converter.validateUnits(null,0,0);}
            catch(err) { }
            spyValidate.exceptions[0].message.should.be.equal("pUnit cannot be null");
        });

        it('should throw for value greater than 180', function() {
            try {converter.validateUnits(181.2, constant.minLong, constant.maxLong);}
            catch(err) { }
            spyValidate.exceptions[0].message.should.be.equal("pUnit cannot be greater than 180");
        });

        it('should throw for value less than -180', function() {
            try {converter.validateUnits(-180.1, constant.minLong, constant.maxLong);}
            catch(err) { }
            spyValidate.exceptions[0].message.should.be.equal("pUnit cannot be less than -180");
        });

        it('should return true for valid values', function() {
            converter.validateUnits(10).should.be.true;
            converter.validateUnits(-58.8).should.be.true;
        });
    });

    describe('validateLong', function() {
        let spyValidateLong = sinon.spy(converter,"validateLong");

        beforeEach(function() {
            spyValidateLong.reset();
        });

        it('should not throw for valid input', function() {
            converter.validateLong(57.8, 24.5, 36.4);
            spyValidateLong.threw().should.be.false;
        });

        it('should throw for invalid input', function() {
            try{converter.validateLong(181,0,0)}
            catch(err) {}
            spyValidateLong.threw().should.be.true;
        });

    });

    describe('validateLat', function() {
        let spyValidateLat = sinon.spy(converter, "validateLat");

        beforeEach(function() {
            spyValidateLat.reset();
        });

        it('should not throw for valid input', function() {
            converter.validateLat(67, 22, 36.4);
            spyValidateLat.threw().should.be.false;
        });

        it('should throw for invalid input', function() {
            try {
                converter.validateLat(100, 0, 0);
            }
            catch(err) {}
            spyValidateLat.threw().should.be.true;
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
            let spy = sinon.spy(converter, "longToDecimal");
            try{converter.longToDecimal(-189,0,0)}
            catch(err){}
            spy.threw().should.be.true;
        });
    });

    describe('latToDecimal', function() {
        it('should convert to 1.11', function() {
            converter.latToDecimal(1,6,36).should.be.equal(1.11);
        });

        it('should throw', function() {
            let spy = sinon.spy(converter,"latToDecimal");
            try{converter.latToDecimal(100,0,0)}
            catch(err){}
            spy.threw().should.be.true;
        });
    });
});