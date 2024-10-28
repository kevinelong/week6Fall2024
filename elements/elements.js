
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

