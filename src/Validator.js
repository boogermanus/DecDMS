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
        this.validateUnits(pDegree, constant.minLong, constant.maxLong);
        this.validateUnits(pMinutes, constant.zero, constant.MINUTES);
        this.validateUnits(pSeconds, constant.zero, constant.SECONDS);
    };
//validateLat--------------------------------------------------------------------------------------
    validateLat(pDegree, pMinutes, pSeconds) {
        this.validateUnits(pDegree, constant.minLat, constant.maxLat);
        this.validateUnits(pMinutes, constant.zero, constant.MINUTES);
        this.validateUnits(pSeconds, constant.zero, constant.SECONDS);
    };
};

module.exports = Validator;