const readline = require("readline-sync");
console.log("1. Nasi Goreng : 20000")
console.log("2. Mie Goreng : Rp18000")
console.log("3. Ayam Bakar : Rp25000")
console.log("4. Es Teh : Rp5000")
console.log("5. Es Jeruk : Rp7000")
let menu = readline.questionInt("menu pilihan (1-5): ")
let porsi = readline.questionInt("jumlah porsi: ")

switch (menu) {
    case "1":
        console.log(menu === "Nasi Goreng")
        
        break;

    case "2":
        console.log(menu === "Mie Goreng")
        
        break;

    case "3":
        console.log(menu === "Ayam bakar")
        
        break;

    case "4":
        console.log(menu === "Es Teh")
        
        break;

    case "5":
        console.log(menu === "Es jeruk")
        
        break;

    default:
        break;
}
console.log("anda memesan: " + (porsi + menu))