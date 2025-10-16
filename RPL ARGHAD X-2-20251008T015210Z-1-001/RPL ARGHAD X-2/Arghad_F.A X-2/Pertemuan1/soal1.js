const readline = require("readline-sync");
let panjang = readline.questionInt("panjang: ");
let lebar = readline.questionInt("lebar: ");

console.log("luas persegi panjang: " + (panjang * lebar))