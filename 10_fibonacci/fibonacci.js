const fibonacci = function() {
    if (arguments[0] < 0) return "OOPS";
    if(arguments[0] == 0) return 0;
    if (arguments[0] == 1 || arguments[0] == 2) return 1;
    let index = Number(arguments[0]);
    let fib = [1,1];
    for(let i = 1; i < index; i++){
        fib.push(fib[i-1]+fib[i]);
    }
    return fib[index-1];
    

};

// Do not edit below this line
module.exports = fibonacci;
