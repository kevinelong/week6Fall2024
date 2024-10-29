// FIND() RETURNS FIRST MATCHING OBJECT OR UNDEFINED
// FINDINDEX() RETURNS INDEX TO THE FIRST OR -1
function isOver60(arrayValue) {
    return arrayValue > 60;
}
let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let firstValOver60 = numbers.find(isOver60); // returns 64 - the actual object

if (firstValOver60 === undefined) {
    console.log("No values over 60");
} else {
    console.log(firstValOver60);
}

//  index        0  1   *2*   3   4   5   6   7
//let numbers = [7, 9, *64*, 60, 12, 13, 65, 62];
let index = numbers.findIndex(isOver60); // returns 2
console.log(index);
console.log(index === -1 ? "not found anywhere" : "found at " + index);
////////////////////

let allOver60 = numbers.filter(isOver60); //returns none, some, or all
// returns an array containing [64, 67, 66]
if (allOver60.length > 0) {
console.log(allOver60); // displays the array
}
else {
console.log("No values over 60");
}