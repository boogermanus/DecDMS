const should = require('chai').should();
const convert = require('../LLConverter');
const sinon = require('sinon');

describe('LLConverter', function() {
    let converter = new convert();
    let spy = sinon.spy(converter, "validateLongHours");
    describe('validateLongHours', function() {
        it('should throw for null value', function() {
            try {converter.validateLongHours("pHours cannot be null");}
            catch(err) {}
        });

        it('should throw for error greater than 180', function() {
            try {converter.validateLongHours(181);}
            catch(err) {}
            spy.threw("pHours out of range");
        })
    });
});