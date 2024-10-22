const repeatString = function(word,reps) {

    result = '';
    if(reps == 0 || word === '') return '';
    else if (reps <0) return 'ERROR';
    for(let i = 0; i < reps; i++){
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
