const sumAll = function() {
    if(arguments[0] < 0 || arguments[1] < 0) return "ERROR";
    if(!Number.isInteger(arguments[0])) return "ERROR";
    if(!Number.isInteger(arguments[1])) return "ERROR";
    let sum = 0;
    let numLess  = Math.min(arguments[0],arguments[1]);
    let numMore  = Math.max(arguments[0],arguments[1]);

    
    for(let i = numLess; i <= numMore;i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
