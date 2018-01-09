const minutes = 60;
const seconds = 3600;

class LLConverter {

    toDecimal(pDegree, pMinutes, pSeconds) {
        
        return pDegree + pMinutes/minutes + pSeconds/seconds
    };

    validateLongDegree(pDegree) {
        if(pDegree == null)
            throw new Error("pDegree cannot be null");

        if(pDegree <= -180.0 || pDegree >= 180.0)
            throw new Error("pDegree out of range");

        return true;
    };

    validateLatDegree(pDegree) {
        if(pDegree == null)
            throw new Error("pDegree cannot be null");

        if(pDegree <= -90.0 || pDegree >= 180.0)
            throw new Error("pDegree out of range");
    };

    validateTimeUnits(pUnit) {
        if(pUnit == null)
            throw new Error("pUnit cannot be null");

        if(pUnit <= 0.0 || pDegree >= 60.0)
            throw new Error("pUnit out of range");
    }
};

module.exports = LLConverter;