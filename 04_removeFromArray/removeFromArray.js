const removeFromArray = function() {
    args = [];
    for(let i = 1; i < arguments.length;i++){
        args.push(arguments[i]);
    }
    result = [];
    for(const value of arguments[0]){
        if(args.includes(value))continue;
        result.push(value);
    }
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
