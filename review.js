// review.js

x = 123     // what does that do? 
// assign a value to a variable-name (AKA identifier/label/attribute/property)

let y = 456 // set *initial* value
y = 789     // change the value

const TAX_RATE = 0.08 // we use capitals to indicate its a constant  (unchanging)
//TAX_RATE = 0.12     // ERROR illegal to try to change a const

const list = [1, 2];
list.push(3); //LEGAL - NO ERROR changing the *content* is permitted.
//list = [] //illegal

const person = { first: "kevin", last: "long" };
person.age = 57; //LEGAL - NO ERROR changing the *content* is permitted.
// person = {} //illegal

var foo = "bar" //old-school and ambigous and weirdly scoped - *do-not-use*

// SIMPLE/PRIMATIVE DATA TYPES - Shape/Size of data in memory
first = "KEVIN" // String ("AAA") OF CHARACTERS ('a') 
age = 57 // Number
DOB = new Date("9/13/1967"); // Date
isCool = true //Boolean - Logical true/false
let u; //undefined
let getList = (a, b) => (a && b) ? [a, b] : null;
output = getList() // could return *null* if unsuccessfull
missing = null //null is considered an object by typeof

// COMPLEX DATA TYPES - COLLECTIONS e.g. array lists and object dictionary
ordered = [111, 222, 333] // Array is an ordered list
dict = { color: "red", width: "100px" } // Object (Associative Array) {Key:Value, Key2:Value2}

//OPERATORS
// PEMDAS - ORDER OF OPERATIONS

// OPERATORS - MATH 
sum = 4 + 5 //addition
delta = 4 - 5 // subtract difference
prod = 4 * 5 // multiplication
d = 4 / 5 // division/fractions

// OPERATORS - LOGIC - SYLLOGISMS
// TRUTH TABLES 0 is false, 1 is true
chocolate = true
vanilla = true
tasty = chocolate && vanilla // AND
// && AND
// A B OUTPUT
// 0 0 0
// 0 1 0
// 1 0 0
// 1 1 1
smart = true
strong = false
good = smart || strong // OR
// || OR
// A B OUTPUT
// 0 0 0
// 0 1 1
// 1 0 1
// 1 1 1
sunny = false
cloudy = !sunny // NOT - inverts(turns upside down AKA opposite)
// ! NOT
// A OUTPUT
// 0 1
// 1 0


//MORE LOGICAL OPERATORS
a = "1" // string text with a character of the numeral "1"
b = 1   // integer number value 1
a == b  // Equal "1" == 1 - Avoids converting text to a number
a === b // Equal and the same data type
a != b  // not equal
a !== b  // not equal including data type
a < b // is less than
a > b // is greater than
a <= b // is less than or equal to
a >= b // is greater than or equal to

// CONDITIONALS - BRANCHING (IF, ELSE IF, ELSE, SWITCH, CASE)
isAwesome = true
isOK = false
if (isAwesome) { //DO IT OR NOT - ONLY ONE INITIAL CASE
    console.log("YAY!!!")
} else if (isOK) { //OPTIONAL - AS MANY ELSE IFs AS YOU NEED
    console.log("OK.")
} else { //OPTIONAL - ONLY ONE FINAL CASE
    //only if not awesome and not ok
    //finally if neither exp or exp2 then do this
    console.log("Meh, we will survive");
}

//RIGHT and brief
isNew = true
isBlack = true

if (isNew && isBlack) {
    console.log("BUY IT!!!")
}

//WRONG but functional
if (isNew) {
    if (isBlack) {
        console.log("BUY IT!!!")
    }
}

//TERNARY THREE WAY OPERATOR
isGreen = true
action = isGreen ? "GO" : "STOP"
console.log(action)
// LOOPS - iterates over an iterable collection like an array or list of keys.
// while(exp) - good for learning loop steps
// do while(exp) good when you want to alway enter the loop once

// for(;;) classic - we want to use the index - CAN DO ANYTHING

// for(of) - use a list
// for(in) - use keys of an Object

// ES6 - Functional Programming "loops"
// .forEach() - apply a function to each item
// .map() - transform each item, returning the same number of outputs and inputs
// .filter() - return all matches in a potentially shorter or even empty array
// .find() - returns first matching object fomr list/array
// .findIndex() - returns the position (index) where the first match was found

//CODE REUSE - function (a block of code to be reused)

// function add(a, b){ //receive posittional parameters in order
//     return a + b;
// }

// arrow function
const add = (a, b) => a + b; //same but shorter to assign an anoymous function to an identifier

result = add(6, 7); //call/invoke function by name passing arguments 6 and 7
// result = 6 + 7
console.log(result);

//IIFE - immediately invoked function expression - GROSS
console.log(((a, b) => a + b)(6, 7));//13 
