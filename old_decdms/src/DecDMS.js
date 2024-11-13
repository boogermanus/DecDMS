const constant = require('./constants');
const validator = require('./Validator');
class DecDMS {
    constructor() {
        this.validator = new validator();
    }
    
//toDecimal----------------------------------------------------------------------------------------
    toDecimal(pDegree, pMinutes, pSeconds) {
        return pDegree + pMinutes/constant.MINUTES + pSeconds/constant.SECONDS;
    }
//longToDecimal------------------------------------------------------------------------------------
    longitudeToDecimal(pDegree, pMinutes, pSeconds) {
        this.validator.validateLong(pDegree, pMinutes, pSeconds);
        return this.toDecimal(pDegree, pMinutes, pSeconds);
    };
//latToDecimal-------------------------------------------------------------------------------------
    latitudeToDecimal(pDegree, pMinutes, pSeconds) {
        this.validator.validateLat(pDegree, pMinutes, pSeconds);
        return this.toDecimal(pDegree, pMinutes, pSeconds);
    }
};

module.exports = DecDMS;