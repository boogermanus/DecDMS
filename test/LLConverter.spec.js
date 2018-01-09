const should = require('chai').should();
const convert = require('../LLConverter');
const sinon = require('sinon');

describe('LLConverter', function() {
    let converter = new convert();

    describe('validateLongDegree', function() {
        let spyLong = sinon.spy(converter,"validateLongDegree");
        beforeEach(function() {
            //reset so that we only have one exception per call
            spyLong.reset();
        });

        it('should throw for null value', function() {
            try {converter.validateLongDegree(null);}
            catch(err) { }
            spyLong.exceptions[0].message.should.be.equal("pDegree cannot be null");
        });

        it('should throw for value greater than 180', function() {
            try {converter.validateLongDegree(181);}
            catch(err) { }
            spyLong.exceptions[0].message.should.be.equal("pDegree out of range");
        });

        it('should throw for value less than -180', function() {
            try {converter.validateLongDegree(-181);}
            catch(err) { }
            spyLong.exceptions[0].message.should.be.equal("pDegree out of range");
        });

        it('should return true for valid values', function() {
            converter.validateLongDegree(10).should.be.true;
            converter.validateLatdDegree(-58.8).should.be.true;
        });
    });
});