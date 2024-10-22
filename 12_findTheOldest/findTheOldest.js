const findTheOldest = function() {
    let people = arguments[0];
    let oldest = 0;
    let person = [];
    let index = 0;
    for(const key in people){
        console.log(key);
        if((people[key].yearOfDeath-people[key].yearOfBirth)>=oldest){
            oldest = people[key].yearofDeath - people[key].yearOfBirth;
            console.log(people[key]);
            index = people[key];
        }
        else continue
    }
    
    console.log(index);
    return people[index].name;
};

// Do not edit below this line
module.exports = findTheOldest;
