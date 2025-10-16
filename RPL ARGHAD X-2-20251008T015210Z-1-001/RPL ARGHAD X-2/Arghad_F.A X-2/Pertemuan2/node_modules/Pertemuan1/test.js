const readline = require("readline-sync");
let nomor1 = readline.questionInt("bilangan pertama: ");
let nomor2 = readline.questionInt("bilangan kedua: ");

console.log("hasil penjumlahan " + (nomor1 + nomor2));

console.log("hasil pengurangan " + (nomor1 - nomor2));

console.log("hasil perkalian " + (nomor1 * nomor2));

console.log("hasil pembagian " + (nomor1 / nomor2)); 