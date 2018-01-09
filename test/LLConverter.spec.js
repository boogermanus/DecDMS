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
    })
});