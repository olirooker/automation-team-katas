/*
Write a program that converts Roman numerals to their decimal equivalent.

Further Challenge: write a program to convert decimal to Roman Numerals. Can the two programmes share any functions?

Further Challenge: write a suite of tests to back up your code.

Additional Further Challenge: Can you follow TDD principles for your development?
*/

const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

let numeralBuilder = ''
// could be defined without type so it's flexible? Eg let builder;

const romanNumeralConverter = (num) => {
    let max = 0
    for (let [numeral, decimal] of Object.entries(lookup)) {
        if (num >= decimal && decimal >= max) {
            numeralBuilder += numeral
            max = decimal
            num -= decimal
        }
    }
    return num === 0 ? numeralBuilder : romanNumeralConverter(num)
}

module.exports = { romanNumeralConverter }