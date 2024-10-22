const palindromes = function () {
    let word = arguments[0];
    let processed = '';
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++ ){
        if((word.at(i)>='a'&& word.at(i)<='z') || (word.at(i)>'0' && word.at(i)<'9')){
            processed = processed + word.at(i);
        }
    }
    let reverse = '';
    for(let i = processed.length-1; i >= 0; i--){
        reverse = reverse + processed.at(i);
    }
    return reverse === processed;
};

// Do not edit below this line
module.exports = palindromes;
