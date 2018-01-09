let constant = require('./constants');
class LLConverter {

    validateUnits(pUnit, pMin, pMax) {
        if(pUnit == null) throw new Error("pUnit cannot be null");

        if(pUnit < pMin) throw new Error(`pUnit cannot be less than ${pMin}`);

        if(pUnit > pMax) throw new Error(`pUnit cannot be greater than ${pMax}`)

        return true;
    }

    toDecimal(pDegree, pMinutes, pSeconds) {
        return pDegree + pMinutes/constant.minutes + pSeconds/constant.seconds;
    }
};

module.exports = LLConverter;