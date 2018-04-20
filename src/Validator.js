const constant = require('./constants');

class Validator {
//validateUnits------------------------------------------------------------------------------------
    validateUnits(pUnit, pMin, pMax) {
        if(pUnit == null) throw new Error("pUnit cannot be null");

        if(pUnit < pMin) throw new Error(`pUnit cannot be less than ${pMin}`);

        if(pUnit > pMax) throw new Error(`pUnit cannot be greater than ${pMax}`);

        return true;
    }
//validateLong-------------------------------------------------------------------------------------
    validateLong(pDegree, pMinutes, pSeconds) {
        this.validateUnits(pDegree, constant.MIN_LONG, constant.MAX_LONG);
        this.validateUnits(pMinutes, constant.ZERO, constant.MINUTES);
        this.validateUnits(pSeconds, constant.ZERO, constant.SECONDS);
    };
//validateLat--------------------------------------------------------------------------------------
    validateLat(pDegree, pMinutes, pSeconds) {
        this.validateUnits(pDegree, constant.minLat, constant.MAX_LAT);
        this.validateUnits(pMinutes, constant.ZERO, constant.MINUTES);
        this.validateUnits(pSeconds, constant.ZERO, constant.SECONDS);
    };
};

module.exports = Validator;