var luca = {
    name: 'Luca',
    lastName: 'Spinello',
    yearOfBirth: 1992,
    monthOfBirth: 'august',
    dayOfBirth: 24,
    countryOfBirth: 'Rivoli',
    state: 'Italia',
    province: 'Torino'
};



var testToChangeAttribute = luca.name;
luca.name = 'Simone';
console.log(testToChangeAttribute);
console.log(luca.name);