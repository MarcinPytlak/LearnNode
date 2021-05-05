const fs = require('fs')
// const os = require('os');
// console.log(fs);
// console.log('Platform', os.platform());
// console.log('Arch', os.arch());
// console.log('UserInfo', os.hostname());

const genders = [
    "M",
    "F",
]

const maleNames = [
    "Marcin",
    "Patryk",
    "Piotr",
    "Kamil",
    "Michał",
]

const femaleNames = [
    "Edyta",
    "Patrycja",
    "Kasia",
    "Ania",
    "Dominika",
]

const lastNames = [
    "Sokół",
    "Mieszko",
    "Pytlak",
    "Tokarz",
    "Ingram",
]
function randChoice(arr) {
    let item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

const people = [

]

for ( let i=0; i<20; i++) {
    
    let gender = randChoice(genders)
    function name(gender) {
    let firstName;
    if(gender === "F") {
         return firstName =randChoice(femaleNames)
    } else if(gender === "M") {
        return firstName = randChoice(maleNames)
    }
    }
    let personName = name(gender);
    let personSurname = lastNames[Math.floor(Math.random() * lastNames.length)];
    function getRandomAge(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let personAge = getRandomAge(18 , 78)
    const obj = {
        gender : gender,
        name : personName,
        surname : personSurname,
        age : personAge,
    }
    people.push(obj)
}

let jsonArray = JSON.stringify(people);

fs.writeFile('people.json', jsonArray, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });