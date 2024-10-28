
const monsters = [
    { name: "Frankenstein's Monster" },
    { name: "The Mummy" },
    { name: "Vlad the Impaler (Dracula)" }
];

function getMonster(m, i) {
    // `<div id="1">The Mummy</div>`
    return `<div id="${i}">${m.name}</div>`
}

//.map() transforms input array into output array
console.log(monsters.map(getMonster).join('\n'));

const numbers = [1, 2, 3, 4];
console.log(numbers);

//separator
const separator = "."; //GLUE
console.log(numbers.join(separator));
const text = "255.255.0.1";

const delimiter_AKA_splitter = ".";
const parsed = text.split(delimiter_AKA_splitter);
console.log(parsed)
console.log(parsed.join("-"));


