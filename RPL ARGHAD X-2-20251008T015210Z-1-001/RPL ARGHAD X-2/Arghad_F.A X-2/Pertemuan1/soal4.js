const readline = require("readline-sync");
let harga = readline.questionInt("harga barang: ");
let diskon = readline.questionInt("besar diskon(%): ");
console.log("harga awal: " + harga)
console.log("diskon: " + ((diskon / 100) * harga));
console.log("harga akhir: " + ((harga - ((diskon / 100) * harga))));