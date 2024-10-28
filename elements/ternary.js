

// ? ternary operator - make if/else value into one line

let input = false;

let option = undefined; // empty/nothing, unset, (null)

if(input){
    option = "yes we can";
}else{
    option = "no we will not";
}

console.log("OPTION:", option);
///////////////////////////

const lightColor = "GREEN";
// EXPRESSION ? IF_TRUE : IF_FALSE
const action = lightColor === "GREEN" ? "GO GO GO!!!" : "STOP!!!";
console.log(action);

