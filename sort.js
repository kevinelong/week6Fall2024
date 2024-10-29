let products = [
    { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
    { prodId: 12, item: "Black Pens (12 pk)", price: 5.70 },
    { prodId: 22, item: "Stapler", price: 12.79 },
    { prodId: 33, item: "Antenna", price: 13.79 },
];

// let c = 0;
products.sort((a, b) => {
    // console.log(c++)

    if (a.item < b.item) {
        return -1; //negative
    }

    if (a.item == b.item) {
        return 0; //zero if even
    }

    // if (a.item > b.item){
    return 1; //positive
    // } 

    //else return 1; //default from example   
    console.log("Unreachable");
});

// products.sort((a, b) => a.price - b.price);  //sort by price

// products.forEach(p => console.log(p.item + " $" + p.price.toFixed(2)));
products.forEach(p => console.log(`${p.item} $${p.price.toFixed(2)}`));

// let numProducts = products.length;
// for (let i = 0; i < numProducts; i++) {
//     console.log(products[i].item +
//         " $" + products[i].price.toFixed(2));
// }