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

