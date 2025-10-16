const readline = require("readline-sync");
let total = 0
let uang = readline.questionInt("uang yang mau ditabung: ");
let hari = readline.questionInt("mau nabung berapa hari: ");
for (let i = 1 ; i<=hari ; i++){;
    total += i;
    console.log("hari ke-" + i + " tabungan = " + (uang * i));
    
};
console.log("total tabungan setelah " + hari + " hari adalah: " + (uang * hari))