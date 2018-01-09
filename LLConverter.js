let constant = require('./constants');
class LLConverter {

    validateUnits(pUnit, pMin, pMax) {
        if(pUnit == null) throw new Error("pUnit cannot be null");

        if(pUnit < pMin) throw new Error(`pUnit cannot be less than ${pMin}`);

        if(pUnit > pMax) throw new Error(`pUnit cannot be greater than ${pMax}`)

        return true;
    }

    validateLong(pDegree, pMinutes, pSeconds) {
        if(this.validateUnits(pDegree, constant.minLong, constant.maxLong) 
            && this.validateUnits(pMinutes, constant.zero, constant.minutes)
            && this.validateUnits(pSeconds, constant.zero, constant.seconds)
        ) return true;
    };

    toDecimal(pDegree, pMinutes, pSeconds) {
        return pDegree + pMinutes/constant.minutes + pSeconds/constant.seconds;
    }

    longToDecimal(pDegree, pMinutes, pSeconds) {
        if(this.validateLong(pDegree, pMinutes, pSeconds))
        {
            return this.toDecimal(pDegree,pMinutes,pSeconds);
        }
    };
};

module.exports = LLConverter;