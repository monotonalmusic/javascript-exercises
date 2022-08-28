const sumAll = function(start, end) {

    let result = 0;

    if (start < 0 || end < 0){
        return "ERROR"
    };

    if (Number.isInteger(end) == false || Number.isInteger(start) == false){
        return "ERROR"
    };
        if (start < end) {
            for (i = start; i <= end; i++){
            result += Number(i)
            }
        }

        else {
            for (i = end; i <= start; i++){
            result += Number(i)
            }
        }
    return result;
   
};


// Do not edit below this line
module.exports = sumAll;
