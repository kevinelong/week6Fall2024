
const fruit = ["apple", "banana", "cherry"];

fruit.forEach(f => console.log(f));


//no variable
[999, 444, 222].forEach(n => console.log(n));


["apple", "banana", "cherry"].forEach((f, i, a) => console.log(i+1, f, a));

//EXTRA CREDIT - show diff betweencurrent value and previous value
[11, 14, 16, 25].forEach((n, i, a) => i ? console.log(n - a[i - 1]) : 0);

// F5 ir fn-F5 - Run and Debug