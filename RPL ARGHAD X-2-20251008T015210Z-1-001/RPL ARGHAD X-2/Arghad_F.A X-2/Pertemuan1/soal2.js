const readline = require("readline-sync");
let alas = readline.questionInt("alas: ");
let tinggi = readline.questionInt("tinggi: ");

console.log("luas segitiga: " + (0.5 * alas * tinggi))