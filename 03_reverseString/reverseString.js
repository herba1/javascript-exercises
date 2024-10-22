const reverseString = function(wordIn) {
    let word = wordIn;
    if(word === '') return '';
    result = '';
    for(let i = word.length-1; i >= 0;i--){
        result = result + word.at(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
