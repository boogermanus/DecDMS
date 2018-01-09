const minutes = 60;
const seconds = 3600;

class LLConverter {

    toDecimal(pHours, pMinutes, pSeconds) {
        
        return pHours + pMinutes/minutes + pSeconds/seconds
    };

    fromDecimal(pArg) {

    };

    validateLongHours(pHours) {
        if(pHours == null)
            throw new Error("pHours cannot be null");

        if(pHours <= 0.0 || pHours >= 180)
            throw new Error('pHours out of range');
    };
}

module.exports = LLConverter;