const readline = require("readline-sync");
let X = readline.questionInt("perkalian: ");
let n = readline.questionInt("bilangan: ");
let m = readline.questionInt("berapa kali: ");
for (let i = n ; i<=m ; i++){;
    console.log(i + " x " + X + " = " + (i * X));
};